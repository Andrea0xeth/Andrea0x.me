import fs from 'fs/promises';
import path from 'path';
import React from 'react';
import { NextRequest } from 'next/server';
import { renderToStream, DocumentProps } from '@react-pdf/renderer';
import QRCode from 'qrcode';
import { CVDocument } from '@/components/cv-document';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';

// react-pdf relies on Node-only APIs (streams, fontkit, fs) — force Node runtime.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function parseLang(value: string | null): Locale {
  return value === 'en' ? 'en' : 'it';
}

function buildFilename(lang: Locale): string {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  return `Andrea_Ritondale_CV_${yyyy}-${mm}_${lang.toUpperCase()}.pdf`;
}

async function streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of stream) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : (chunk as Buffer));
  }
  return Buffer.concat(chunks);
}

// Cache photo + QR across requests in the same process.
let cachedPhoto: string | undefined;
const cachedQrByLang: Record<Locale, string | undefined> = { it: undefined, en: undefined };

async function getPhotoDataUrl(): Promise<string | undefined> {
  if (cachedPhoto) return cachedPhoto;
  try {
    const buf = await fs.readFile(
      path.join(process.cwd(), 'public', 'images', 'me.jpg')
    );
    cachedPhoto = `data:image/jpeg;base64,${buf.toString('base64')}`;
    return cachedPhoto;
  } catch {
    return undefined;
  }
}

async function getQrDataUrl(lang: Locale): Promise<string> {
  if (cachedQrByLang[lang]) return cachedQrByLang[lang]!;
  const url = `https://andrea0x.me/${lang}?utm_source=cv&utm_medium=qr`;
  const dataUrl = await QRCode.toDataURL(url, {
    margin: 0,
    width: 240,
    color: { dark: '#0f172a', light: '#ffffff00' },
    errorCorrectionLevel: 'M',
  });
  cachedQrByLang[lang] = dataUrl;
  return dataUrl;
}

export async function GET(req: NextRequest) {
  const lang = parseLang(req.nextUrl.searchParams.get('lang'));

  try {
    const [photoSrc, qrDataUrl] = await Promise.all([
      getPhotoDataUrl(),
      getQrDataUrl(lang),
    ]);

    const element = React.createElement(CVDocument, {
      lang,
      data: portfolioData,
      photoSrc,
      qrDataUrl,
    }) as unknown as React.ReactElement<DocumentProps>;

    const stream = await renderToStream(element);
    const buffer = await streamToBuffer(stream as unknown as NodeJS.ReadableStream);
    const filename = buildFilename(lang);

    return new Response(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'public, max-age=3600',
        'Content-Length': String(buffer.length),
      },
    });
  } catch (err) {
    console.error('[api/cv] failed to render PDF', err);
    return new Response(
      JSON.stringify({ error: 'Failed to render CV PDF.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
