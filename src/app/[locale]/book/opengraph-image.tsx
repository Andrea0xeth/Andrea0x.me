import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Book a call with Andrea Ritondale';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = raw === 'it' ? 'it' : 'en';
  const headline =
    locale === 'it' ? 'Prenota una chiamata' : 'Book a call';
  const sub =
    locale === 'it'
      ? 'Discovery call · 15–60 min · Google Meet'
      : 'Discovery call · 15–60 min · Google Meet';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          position: 'relative',
          backgroundColor: '#0a0e1a',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, #0a0e1a 0%, #0f1419 25%, #1a1f2e 50%, #0f1419 75%, #0a0e1a 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-180px',
            right: '-120px',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-160px',
            left: '-100px',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(96, 165, 250, 0.14) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            padding: '72px 88px',
            position: 'relative',
            zIndex: 1,
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div
              style={{
                fontSize: '22px',
                color: '#60a5fa',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Andrea0x.eth
            </div>
            <div
              style={{
                fontSize: '72px',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-1.5px',
                color: '#f8fafc',
                maxWidth: '900px',
              }}
            >
              {headline}
            </div>
            <div
              style={{
                fontSize: '28px',
                color: '#94a3b8',
                fontWeight: 400,
                marginTop: '8px',
              }}
            >
              {sub}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '26px', color: '#e2e8f0', fontWeight: 600 }}>
                Andrea Ritondale
              </div>
              <div style={{ fontSize: '22px', color: '#64748b' }}>
                Principal Engineer · IT Architect · AI Builder
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 22px',
                borderRadius: '999px',
                backgroundColor: 'rgba(59, 130, 246, 0.15)',
                border: '1.5px solid rgba(59, 130, 246, 0.45)',
                color: '#93c5fd',
                fontSize: '22px',
                fontWeight: 600,
              }}
            >
              andrea0x.me/book
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
