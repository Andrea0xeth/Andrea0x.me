import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Andrea Ritondale — Principal Engineer · IT Architect · AI Builder',
    short_name: 'Andrea Ritondale',
    description: 'Principal Engineer + IT Architect + AI Builder. Multi-skill, multi-domain, generalist by design.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0ea5e9',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'productivity', 'portfolio'],
    lang: 'en',
    dir: 'ltr',
  }
}


