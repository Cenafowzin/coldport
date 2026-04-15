export type BusinessType = 'Hair Salon' | 'Tattoo Studio' | 'Nail Salon'

export interface Project {
  id: string
  name: string
  type: BusinessType
  styleLabel: string
  description: string
  /** Multiple images = tab cycling; single image = scroll animation; empty = placeholder */
  images: string[]
  demoUrl: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'glamour-studio',
    name: 'Glamour Studio',
    type: 'Hair Salon',
    styleLabel: 'Elegant & sophisticated',
    description: 'Full booking system with real-time availability, service menu, and stylist profiles.',
    images: [],
    demoUrl: 'https://your-demo-url.vercel.app',
    featured: true,
  },
  {
    id: 'shear-bliss',
    name: 'Shear Bliss',
    type: 'Hair Salon',
    styleLabel: 'Soft & feminine',
    description: 'Clean, conversion-focused landing page with gallery and contact form.',
    images: [
      '/images/screencapture-classic-cuts-modern-touch-lovable-app-2026-04-15-01_26_37.png',
    ],
    demoUrl: 'https://your-demo-url-2.vercel.app',
  },
  {
    id: 'ink-collective',
    name: 'Ink Collective',
    type: 'Tattoo Studio',
    styleLabel: 'Dark editorial',
    description: 'Portfolio-first design showcasing artist work with inquiry form.',
    images: [
      '/images/screencapture-wolf-roll-studio-lovable-app-2026-04-15-01_26_14.png',
    ],
    demoUrl: 'https://your-demo-url-3.vercel.app',
  },
  {
    id: 'obsidian-ink',
    name: 'Obsidian Ink',
    type: 'Tattoo Studio',
    styleLabel: 'Bold & illustrated',
    description: 'Dark, editorial aesthetic with flash sale section and artist bios.',
    images: [
      '/images/screencapture-pretty-ugly-ink-site-lovable-app-2026-04-15-01_26_59.png',
      '/images/screencapture-pretty-ugly-ink-site-lovable-app-about-2026-04-15-01_27_10.png',
      '/images/screencapture-pretty-ugly-ink-site-lovable-app-styles-2026-04-15-01_27_28.png',
      '/images/screencapture-pretty-ugly-ink-site-lovable-app-portfolio-2026-04-15-01_27_39.png',
      '/images/screencapture-pretty-ugly-ink-site-lovable-app-contact-2026-04-15-01_27_57.png',
    ],
    demoUrl: 'https://your-demo-url-4.vercel.app',
  },
  {
    id: 'polish-lounge',
    name: 'Polish Lounge',
    type: 'Nail Salon',
    styleLabel: 'Bright & playful',
    description: 'Modern nail salon site with service menu and online booking widget.',
    images: [
      '/images/screencapture-luxe-nails-style-lovable-app-2026-04-15-01_24_42.png',
      '/images/screencapture-luxe-nails-style-lovable-app-about-2026-04-15-01_25_07.png',
      '/images/screencapture-luxe-nails-style-lovable-app-services-2026-04-15-01_25_17.png',
      '/images/screencapture-luxe-nails-style-lovable-app-gallery-2026-04-15-01_25_29.png',
      '/images/screencapture-luxe-nails-style-lovable-app-booking-2026-04-15-01_25_50.png',
      '/images/screencapture-luxe-nails-style-lovable-app-contact-2026-04-15-01_25_43.png',
    ],
    demoUrl: 'https://your-demo-url-5.vercel.app',
  },
]
