import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Andrea Ritondale — Principal Engineer · IT Architect · AI Builder';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
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
        {/* Background Gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #0a0e1a 0%, #0f1419 25%, #1a1f2e 50%, #0f1419 75%, #0a0e1a 100%)',
          }}
        />

        {/* Animated Background Circles */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            right: '-200px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-150px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Grid Pattern Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Main Content Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            padding: '80px 100px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Top Section - Name and Role */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '60px',
            }}
          >
            {/* Name with gradient */}
            <div
              style={{
                fontSize: '88px',
                fontWeight: '800',
                lineHeight: '1',
                marginBottom: '24px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                letterSpacing: '-2px',
              }}
            >
              Andrea Ritondale
            </div>

            {/* Role */}
            <div
              style={{
                fontSize: '28px',
                color: '#cbd5e1',
                fontWeight: '400',
                letterSpacing: '-0.5px',
              }}
            >
              Andrea0x.eth · Principal Engineer · IT Architect · AI Builder
            </div>
          </div>

          {/* Middle Section - Expertise Tags */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: 'auto',
            }}
          >
            {['B2B SaaS', 'AI Engineering', 'Cloud', 'Web3', 'IT Architecture'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '14px 28px',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  border: '1.5px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '16px',
                  fontSize: '22px',
                  color: '#60a5fa',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Bottom Section - URL */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: 'auto',
            }}
          >
            <div
              style={{
                width: '4px',
                height: '40px',
                background: 'linear-gradient(180deg, #3b82f6, #8b5cf6, #ec4899)',
                borderRadius: '2px',
              }}
            />
            <div
              style={{
                fontSize: '24px',
                color: '#94a3b8',
                fontWeight: '500',
                letterSpacing: '0.5px',
              }}
            >
              andrea0x.me
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          style={{
            position: 'absolute',
            top: '60px',
            right: '80px',
            width: '120px',
            height: '120px',
            border: '2px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '24px',
            transform: 'rotate(12deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '120px',
            width: '80px',
            height: '80px',
            border: '2px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '50%',
            transform: 'rotate(-8deg)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
