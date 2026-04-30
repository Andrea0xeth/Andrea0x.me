#!/usr/bin/env node
/**
 * Generates website screenshots for portfolio entries via Microlink.
 *
 * Reads `src/data/portfolio.ts`, extracts entries from `caseStudies[]` and
 * `projects[]` that expose a real `link` URL, then downloads a JPEG screenshot
 * for each one into `public/images/previews/<slug>.jpg`.
 *
 * Idempotent: skips entries whose preview file already exists.
 *
 * Usage:
 *   npm run previews:generate
 *   FORCE=1 npm run previews:generate    # ignore existing files
 */

import { readFile, writeFile, access, mkdir, stat } from "node:fs/promises";
import { constants as FS } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const PORTFOLIO_PATH = resolve(ROOT, "src/data/portfolio.ts");
const OUT_DIR = resolve(ROOT, "public/images/previews");
const FORCE = process.env.FORCE === "1";

const REQUEST_TIMEOUT_MS = 30_000;
const DELAY_BETWEEN_MS = 250;

// --- helpers ---------------------------------------------------------------

const kebab = (s) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fileExists(p) {
  try {
    await access(p, FS.F_OK);
    return true;
  } catch {
    return false;
  }
}

// --- portfolio parsing -----------------------------------------------------

/**
 * Parse caseStudies[] and projects[] from portfolio.ts using lightweight regex.
 * We don't need full TS evaluation — we only want { slug, title, link } per
 * entry (and we derive slug from title for projects).
 */
function parseEntriesFromBlock(block, kind) {
  // Split the block by top-level "{ ... }" objects. We rely on the formatting
  // in portfolio.ts (one entry per `{` on its own line preceded by indent).
  const entries = [];
  // Greedy split: find each "    {" object opening at indent 4 and walk
  // braces to find its matching close.
  const lines = block.split("\n");
  let depth = 0;
  let buf = [];
  let inEntry = false;
  for (const line of lines) {
    if (!inEntry) {
      if (/^\s{4,6}\{\s*$/.test(line)) {
        inEntry = true;
        depth = 1;
        buf = [line];
      }
      continue;
    }
    buf.push(line);
    // count braces excluding those in strings — naive but adequate for this file
    for (const ch of line) {
      if (ch === "{") depth++;
      else if (ch === "}") depth--;
    }
    if (depth === 0) {
      const obj = buf.join("\n");
      const titleMatch = obj.match(/(?:^|\n)\s*(?:title|name)\s*:\s*"([^"]+)"/);
      const slugMatch = obj.match(/(?:^|\n)\s*slug\s*:\s*"([^"]+)"/);
      const linkMatch = obj.match(/(?:^|\n)\s*link\s*:\s*"([^"]+)"/);
      const imageMatch = obj.match(/(?:^|\n)\s*image\s*:\s*"([^"]+)"/);
      const title = titleMatch?.[1];
      const link = linkMatch?.[1];
      const image = imageMatch?.[1] ?? null;
      if (title) {
        const slug = slugMatch?.[1] ?? kebab(title);
        entries.push({ kind, slug, title, link: link || null, image });
      }
      inEntry = false;
      buf = [];
    }
  }
  return entries;
}

function extractArrayBlock(source, key) {
  // Find `  <key>: [` and return the content up to the matching closing `]`.
  const startRe = new RegExp(`\\n\\s{2}${key}\\s*:\\s*\\[`, "m");
  const m = source.match(startRe);
  if (!m) throw new Error(`Could not locate '${key}: [' in portfolio.ts`);
  const start = m.index + m[0].length;
  let depth = 1;
  let i = start;
  while (i < source.length && depth > 0) {
    const ch = source[i];
    if (ch === "[") depth++;
    else if (ch === "]") depth--;
    i++;
  }
  return source.slice(start, i - 1);
}

async function loadPortfolioEntries() {
  const src = await readFile(PORTFOLIO_PATH, "utf8");
  const caseStudiesBlock = extractArrayBlock(src, "caseStudies");
  const projectsBlock = extractArrayBlock(src, "projects");
  return [
    ...parseEntriesFromBlock(caseStudiesBlock, "caseStudy"),
    ...parseEntriesFromBlock(projectsBlock, "project"),
  ];
}

// --- microlink download ----------------------------------------------------

function buildMicrolinkUrl(targetUrl) {
  const params = new URLSearchParams({
    url: targetUrl,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    "viewport.width": "1280",
    "viewport.height": "720",
    waitUntil: "networkidle0",
    type: "jpeg",
  });
  return `https://api.microlink.io/?${params.toString()}`;
}

async function downloadScreenshot(targetUrl, outPath) {
  const apiUrl = buildMicrolinkUrl(targetUrl);
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), REQUEST_TIMEOUT_MS);
  try {
    const res = await fetch(apiUrl, {
      redirect: "follow",
      signal: ac.signal,
      headers: { "user-agent": "andrea0x-previews/1.0" },
    });
    if (!res.ok) {
      return { ok: false, reason: `HTTP ${res.status}` };
    }
    const contentType = res.headers.get("content-type") || "";
    const buf = Buffer.from(await res.arrayBuffer());
    if (!contentType.includes("image") && !buf.slice(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]))) {
      // Sometimes Microlink returns JSON with an error
      const head = buf.slice(0, 200).toString("utf8");
      return { ok: false, reason: `non-image response (${contentType}): ${head.slice(0, 120)}` };
    }
    if (buf.length < 1024) {
      return { ok: false, reason: `payload too small (${buf.length}B)` };
    }
    await writeFile(outPath, buf);
    return { ok: true, bytes: buf.length };
  } catch (err) {
    if (err.name === "AbortError") return { ok: false, reason: "timeout (>30s)" };
    return { ok: false, reason: String(err.message || err) };
  } finally {
    clearTimeout(timer);
  }
}

// --- main ------------------------------------------------------------------

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const entries = await loadPortfolioEntries();
  const targets = entries.filter((e) => e.link && e.link !== "#");

  console.log(`Found ${entries.length} portfolio entries (${targets.length} with link).`);
  if (FORCE) console.log("FORCE=1 -> regenerating existing previews.");

  const manifest = [];
  for (const entry of targets) {
    const out = resolve(OUT_DIR, `${entry.slug}.jpg`);
    const exists = await fileExists(out);
    if (exists && !FORCE) {
      manifest.push({ ...entry, status: "skipped", note: "already exists" });
      console.log(`  [skip] ${entry.slug}  (${entry.link})`);
      continue;
    }
    process.stdout.write(`  [..]   ${entry.slug}  ${entry.link} ... `);
    const result = await downloadScreenshot(entry.link, out);
    if (result.ok) {
      const kb = (result.bytes / 1024).toFixed(0);
      console.log(`ok (${kb} KB)`);
      manifest.push({ ...entry, status: "generated", note: `${kb} KB` });
    } else {
      console.log(`FAIL: ${result.reason}`);
      manifest.push({ ...entry, status: "failed", note: result.reason });
    }
    await sleep(DELAY_BETWEEN_MS);
  }

  // Final manifest
  console.log("\n=== Manifest ===");
  for (const m of manifest) {
    const icon = m.status === "generated" ? "OK " : m.status === "skipped" ? "-- " : "XX ";
    console.log(`${icon} ${m.kind.padEnd(10)} ${m.slug.padEnd(20)} ${m.status.padEnd(10)} ${m.note}`);
  }

  // Disk size
  let totalBytes = 0;
  for (const m of manifest) {
    if (m.status === "generated" || m.status === "skipped") {
      try {
        const st = await stat(resolve(OUT_DIR, `${m.slug}.jpg`));
        totalBytes += st.size;
      } catch {}
    }
  }
  console.log(`\nTotal disk size: ${(totalBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(
    `Generated: ${manifest.filter((m) => m.status === "generated").length}, ` +
      `skipped: ${manifest.filter((m) => m.status === "skipped").length}, ` +
      `failed: ${manifest.filter((m) => m.status === "failed").length}`
  );
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
