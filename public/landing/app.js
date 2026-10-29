(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  /* Nav */
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Generic reveal */
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

  /* Focus reveal: a frame travels word to word and brings each one sharp */
  const title = document.querySelector("[data-focus]");
  const start = () => document.body.classList.add("is-ready");
  if (title && !reduced) {
    const words = [...title.querySelectorAll(".w")];
    const frame = document.createElement("span");
    frame.className = "focus-frame";
    frame.setAttribute("aria-hidden", "true");
    frame.innerHTML = "<i></i><i></i><i></i><i></i>";
    title.append(frame);

    const place = (w) => {
      const pad = 0.06 * w.offsetHeight;
      frame.style.translate = `${w.offsetLeft - pad}px ${w.offsetTop + pad * 0.6}px`;
      frame.style.width = `${w.offsetWidth + pad * 2}px`;
      frame.style.height = `${w.offsetHeight - pad * 0.6}px`;
    };

    (async () => {
      await document.fonts?.ready;
      start();
      place(words[0]);
      await wait(80);
      frame.classList.add("on");
      for (const w of words) {
        place(w);
        await wait(220);
        w.classList.add("sharp");
        await wait(120);
      }
      await wait(380);
      frame.classList.remove("on");
    })();
  } else {
    title?.querySelectorAll(".w").forEach((w) => w.classList.add("sharp"));
    start();
  }

  /* Hero tilt */
  const inner = document.querySelector("[data-tilt] .stage-inner");
  if (inner && !reduced && fine) {
    window.addEventListener(
      "pointermove",
      (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        inner.style.setProperty("--ry", `${-8 + x * 12}deg`);
        inner.style.setProperty("--rx", `${4 - y * 7}deg`);
      },
      { passive: true },
    );
  }

  /* Active projects: the list rolls in a loop while the counter climbs to the real total */
  const list = document.querySelector("[data-count-list]");
  const count = document.querySelector("[data-count]");
  if (list && count && !reduced) {
    const total = list.children.length;
    for (const row of [...list.children]) {
      const clone = row.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      list.append(clone);
    }
    list.parentElement.classList.add("rolling");
    count.textContent = "0";
    (async () => {
      await wait(1400);
      for (let i = 1; i <= total; i++) {
        count.textContent = String(i);
        count.classList.remove("bump");
        void count.offsetWidth;
        count.classList.add("bump");
        await wait(170);
      }
    })();
  }

  /* Local time in Rome */
  const clock = document.querySelector("[data-clock]");
  if (clock) {
    const fmt = new Intl.DateTimeFormat("it-IT", { timeZone: "Europe/Rome", hour: "2-digit", minute: "2-digit" });
    const tick = () => (clock.textContent = fmt.format(new Date()));
    tick();
    setInterval(tick, 15000);
  }

  /* Liquid glass: highlight follows the pointer */
  if (fine) {
    for (const el of document.querySelectorAll("[data-glass]")) {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    }
  }

  /* Story: the chapter nearest the viewport middle drives the sticky window */
  const story = document.querySelector(".story");
  if (story) {
    const chapters = [...story.querySelectorAll(".chapter")];
    const shots = [...story.querySelectorAll(".story-frame .shot")];
    const rail = [...story.querySelectorAll(".story-rail li")];
    const chips = [...story.querySelectorAll(".story-chips .chip-card")];
    const urls = [...story.querySelectorAll(".story-url span")];
    let current = -1;

    const setStep = (i) => {
      if (i === current) return;
      const prev = current;
      current = i;
      story.dataset.step = String(i);
      for (const list of [chapters, rail, chips, urls]) list.forEach((el, k) => el.classList.toggle("on", k === i));
      shots.forEach((s, k) => {
        s.classList.toggle("on", k === i);
        s.classList.toggle("out", k === prev && k < i);
        if (k !== prev && k !== i) s.classList.remove("out");
      });
    };

    const pick = () => {
      const mid = window.innerHeight / 2;
      let best = 0;
      let bestD = Infinity;
      chapters.forEach((c, k) => {
        const r = c.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bestD) {
          bestD = d;
          best = k;
        }
      });
      setStep(best);
    };
    setStep(0);
    onFrameScroll(pick);
  }

  /* Step path: line fills with scroll, each step lights as the line reaches it */
  const path = document.querySelector("[data-path]");
  if (path) {
    const steps = [...path.querySelectorAll(".path-steps li")];
    const update = () => {
      const r = path.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = reduced ? 1 : clamp((vh * 0.82 - r.top) / (r.height + vh * 0.3));
      path.style.setProperty("--p", p.toFixed(3));
      steps.forEach((li, k) => li.classList.toggle("lit", reduced || p >= k / steps.length + 0.02));
    };
    update();
    onFrameScroll(update);
  }

  /* Spotlight cards */
  for (const spot of fine ? document.querySelectorAll("[data-spot]") : []) {
    const cards = [...spot.children];
    spot.addEventListener("pointermove", (e) => {
      const rects = cards.map((c) => c.getBoundingClientRect());
      cards.forEach((c, i) => {
        c.style.setProperty("--mx", `${e.clientX - rects[i].left}px`);
        c.style.setProperty("--my", `${e.clientY - rects[i].top}px`);
      });
    });
    spot.addEventListener("pointerleave", () => {
      for (const c of cards) {
        c.style.setProperty("--mx", "-400px");
        c.style.setProperty("--my", "-400px");
      }
    });
  }

  /* Composer: demo prompts type into the placeholder; real input drives the halo */
  const halo = document.querySelector("[data-halo]");
  if (halo) {
    const input = halo.querySelector(".halo-input");
    const prompts = (halo.dataset.prompts || "").split("|").filter(Boolean);
    const FULL = 64;
    let touched = false;

    const fill = (n) => halo.style.setProperty("--fill", clamp(n / FULL).toFixed(3));
    input.addEventListener("focus", () => {
      touched = true;
      input.placeholder = halo.dataset.placeholder || "";
      fill(input.value.length);
    });
    input.addEventListener("input", () => fill(input.value.length));
    halo.addEventListener("submit", (e) => {
      if (!input.value.trim()) {
        e.preventDefault();
        input.focus();
        return;
      }
      halo.classList.add("sent");
    });

    if (reduced || !prompts.length) {
      if (prompts.length) input.placeholder = prompts[0];
    } else {
      let visible = false;
      new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.3 }).observe(halo);
      (async () => {
        for (let n = 0; !touched; n = (n + 1) % prompts.length) {
          const p = prompts[n];
          while (!visible && !touched) await wait(300);
          for (let i = 1; i <= p.length && !touched; i++) {
            input.placeholder = p.slice(0, i);
            fill((i / p.length) * FULL);
            await wait(34 + Math.random() * 46);
          }
          if (touched) break;
          await wait(900);
          halo.classList.add("sent");
          await wait(380);
          input.placeholder = "";
          fill(0);
          await wait(420);
          halo.classList.remove("sent");
          await wait(500);
        }
      })();
    }
  }

  /* Footer year */
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  function wait(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  function onFrameScroll(fn) {
    let queued = false;
    const queue = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        fn();
      });
    };
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
  }
})();
