# 🚀 Andrea0x.eth Portfolio

> **Professional Blockchain Product Manager & Web3 Developer Portfolio**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

## 🌟 Features

### 🎨 **Modern Design**
- **Glassmorphism UI**: Beautiful glass-effect cards and components
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions

### 📱 **Mobile-First Experience**
- **Adaptive Navigation**: Mobile tabs with auto-expanding content
- **Touch-Optimized**: Gesture-friendly interface
- **Performance Optimized**: Fast loading and smooth scrolling
- **PWA Ready**: Progressive Web App capabilities

### 🔧 **Technical Excellence**
- **TypeScript**: Full type safety and better developer experience
- **Component Architecture**: Modular, reusable React components
- **SEO Optimized**: Perfect meta tags, OpenGraph, and Twitter Cards
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | Next.js | 15.5.3 | React framework with SSR/SSG |
| **Language** | TypeScript | 5.0+ | Type-safe JavaScript |
| **Styling** | Tailwind CSS | 3.4+ | Utility-first CSS framework |
| **Animations** | Framer Motion | 11.0+ | Production-ready motion library |
| **Icons** | Lucide React | Latest | Beautiful, customizable icons |
| **Fonts** | Inter + JetBrains Mono | Latest | Modern typography |
| **Deployment** | Vercel | Latest | Optimized hosting platform |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with SEO and theme provider
│   ├── page.tsx           # Main portfolio page
│   ├── manifest.ts        # PWA manifest
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── animated-button.tsx
│   │   ├── glass-card.tsx
│   │   ├── portfolio-image.tsx
│   │   ├── section-divider.tsx
│   │   └── theme-switcher.tsx
│   ├── experience-section.tsx
│   ├── mobile-tabs.tsx
│   ├── portfolio-section.tsx
│   ├── rotating-avatar.tsx
│   └── typewriter-hero.tsx
├── contexts/             # React contexts
│   └── theme-context.tsx # Theme management
├── data/                 # Static data
│   └── portfolio.ts      # Portfolio content and configuration
└── lib/                  # Utility functions
    └── utils.ts          # Helper functions
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.0 or higher
- **npm**: 9.0 or higher
- **Git**: Latest version

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/andrea0x-eth/andrea0x-me.git
   cd andrea0x-me
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🎨 Customization

### Theme Configuration

The portfolio supports both light and dark themes with CSS variables:

```css
:root {
  /* Light Theme */
  --bg-primary: #f8fafc;
  --bg-secondary: #f1f5f9;
  --text-primary: #0f172a;
  --accent-primary: #3b82f6;
}

.dark {
  /* Dark Theme */
  --bg-primary: #0a0e1a;
  --bg-secondary: #0f1419;
  --text-primary: #f8fafc;
  --accent-primary: #3b82f6;
}
```

### Content Management

Update portfolio content in `src/data/portfolio.ts`:

```typescript
export const portfolioData = {
  personal: {
    name: "Andrea0x.eth",
    title: "Blockchain Product Manager & Product Communication",
    description: "Your description here...",
  },
  expertise: [
    {
      title: "Your Expertise",
      description: "Description here...",
      icon: "🎯",
    },
  ],
  // ... more content
};
```

### Adding New Sections

1. Create component in `src/components/`
2. Import and use in `src/app/page.tsx`
3. Add responsive breakpoints as needed

## 📱 Mobile Features

### Adaptive Navigation
- **Desktop**: Full navigation with all sections visible
- **Mobile**: Tabbed interface with collapsible content
- **Auto-expand**: Expertise tab opens by default

### Touch Optimizations
- **Swipe gestures**: Smooth tab switching
- **Touch targets**: Minimum 44px for accessibility
- **Haptic feedback**: Native mobile interactions

## 🔍 SEO Features

### Meta Tags
- **Title**: Optimized for search engines
- **Description**: Compelling meta descriptions
- **Keywords**: Comprehensive keyword targeting
- **OpenGraph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing

### Performance
- **Core Web Vitals**: Optimized for Google's ranking factors
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic bundle optimization
- **Caching**: Efficient browser caching strategies

## 🎯 Portfolio Sections

### 1. **Hero Section**
- Animated typewriter effect
- Professional avatar with rotation
- Social media links
- Call-to-action buttons

### 2. **Statistics**
- Key metrics and achievements
- Animated counters
- Glassmorphism cards

### 3. **Expertise**
- Core competencies
- Interactive cards
- Responsive grid layout

### 4. **Portfolio**
- Project showcase
- Category filtering
- Hover effects with GIFs
- External links

### 5. **Experience**
- Work history
- Education background
- Timeline layout
- Company links

### 6. **Skills & Languages**
- Technical skills with progress bars
- Language proficiency
- Animated skill indicators

### 7. **Contact**
- Call-to-action section
- Multiple contact methods
- Professional presentation

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure environment variables** (if needed)
3. **Deploy automatically** on every push

### Manual Deployment

```bash
# Build the application
npm run build

# Export static files (if using static export)
npm run export

# Deploy to your hosting provider
```

### Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=https://andrea0x.eth.limo
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
```

### Code Style

- **ESLint**: Configured with Next.js recommended rules
- **Prettier**: Code formatting (if configured)
- **TypeScript**: Strict mode enabled
- **Conventional Commits**: Standardized commit messages

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Add TypeScript types for new features
- Update documentation for significant changes
- Test on multiple devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Andrea Ritondale (Andrea0x.eth)**
- **Website**: [andrea0x.eth.limo](https://andrea0x.eth.limo)
- **Twitter**: [@Andrea0x_eth](https://twitter.com/Andrea0x_eth)
- **LinkedIn**: [Andrea Ritondale](https://linkedin.com/in/andrea-ritondale)
- **GitHub**: [@andrea0x-eth](https://github.com/andrea0x-eth)

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Framer Motion** for smooth animations
- **Vercel** for seamless deployment
- **Open Source Community** for inspiration and tools

## 📈 Roadmap

### Upcoming Features
- [ ] Blog integration
- [ ] Contact form with email service
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] Advanced animations
- [ ] PWA features enhancement

### Performance Improvements
- [ ] Image optimization
- [ ] Bundle size reduction
- [ ] Caching strategies
- [ ] CDN integration

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/andrea0x-eth/andrea0x-me?style=social)](https://github.com/andrea0x-eth/andrea0x-me/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/andrea0x-eth/andrea0x-me?style=social)](https://github.com/andrea0x-eth/andrea0x-me/network)

**Built with ❤️ by [Andrea0x.eth](https://andrea0x.me)**

</div>