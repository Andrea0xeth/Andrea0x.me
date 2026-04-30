import React from 'react';
import { NextRequest } from 'next/server';
import { renderToStream, DocumentProps } from '@react-pdf/renderer';
import { CVDocument } from '@/components/cv-document';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';

// react-pdf relies on Node-only APIs (streams, fontkit) — force Node runtime.
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

export async function GET(req: NextRequest) {
  const lang = parseLang(req.nextUrl.searchParams.get('lang'));

  try {
    // CVDocument resolves to a <Document> element at render time.
    // Cast through unknown so TS accepts the ReactElement<DocumentProps> shape.
    const element = React.createElement(CVDocument, {
      lang,
      data: portfolioData,
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
      },
    );
  }
}
