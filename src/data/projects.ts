export type BusinessType = 'Hair Salon' | 'Tattoo Studio' | 'Nail Salon' | 'Barbershop'

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
    id: 'comandante-barber',
    name: 'Comandante Barber Shop',
    type: 'Barbershop',
    styleLabel: 'Bold & masculine',
    description: 'Full custom booking system built from scratch — clients choose service, barber, date and time. Includes real-time availability, service catalog, stylist profiles, and a complete admin dashboard.',
    images: [
      '/images/comandante_full.png',
      '/images/comandante_book.png',
      '/images/comandante_admin.png',
    ],
    demoUrl: 'https://comandante-barber-shop.vercel.app',
    featured: true,
  },
  {
    id: 'classic-barber',
    name: 'Classic Barber Shop',
    type: 'Barbershop',
    styleLabel: 'Classic & warm',
    description: 'Conversion-focused site with gallery, testimonials, Google Maps integration, and a direct call-to-action. Built to turn searchers into walk-ins.',
    images: [
      '/images/screencapture-classic-cuts-modern-touch-lovable-app-2026-04-15-01_26_37.png',
    ],
    demoUrl: 'https://classic-cuts-barbersh.vercel.app',
  },
  {
    id: 'big-bad-wolf',
    name: 'Big Bad Wolf Tattoo',
    type: 'Tattoo Studio',
    styleLabel: 'Bold & illustrated',
    description: 'High-personality site matching the studio\'s cartoon-style branding. Showcases artist work, services, and walk-in availability.',
    images: [
      '/images/screencapture-wolf-roll-studio-lovable-app-2026-04-15-01_26_14.png',
    ],
    demoUrl: 'https://big-bad-wolf-tattoos.vercel.app',
  },
  {
    id: 'pretty-ugly',
    name: 'Pretty Ugly Tattoo',
    type: 'Tattoo Studio',
    styleLabel: 'Dark editorial',
    description: 'Minimalist black-and-white design for a fine line studio. Portfolio-first layout with artist story, selected work, and booking flow.',
    images: [
      '/images/screencapture-pretty-ugly-ink-site-lovable-app-2026-04-15-01_26_59.png',
      '/images/screencapture-pretty-ugly-ink-site-lovable-app-about-2026-04-15-01_27_10.png',
      '/images/screencapture-pretty-ugly-ink-site-lovable-app-styles-2026-04-15-01_27_28.png',
      '/images/screencapture-pretty-ugly-ink-site-lovable-app-portfolio-2026-04-15-01_27_39.png',
      '/images/screencapture-pretty-ugly-ink-site-lovable-app-contact-2026-04-15-01_27_57.png',
    ],
    demoUrl: 'https://pretty-ugly-studio-site.vercel.app',
  },
  {
    id: 'luxe-nails',
    name: 'Luxe Nails',
    type: 'Nail Salon',
    styleLabel: 'Soft & feminine',
    description: 'Elegant nail salon site with service menu, gallery, and appointment booking. Designed to attract premium clients.',
    images: [
      '/images/screencapture-luxe-nails-style-lovable-app-2026-04-15-01_24_42.png',
      '/images/screencapture-luxe-nails-style-lovable-app-about-2026-04-15-01_25_07.png',
      '/images/screencapture-luxe-nails-style-lovable-app-services-2026-04-15-01_25_17.png',
      '/images/screencapture-luxe-nails-style-lovable-app-gallery-2026-04-15-01_25_29.png',
      '/images/screencapture-luxe-nails-style-lovable-app-booking-2026-04-15-01_25_50.png',
      '/images/screencapture-luxe-nails-style-lovable-app-contact-2026-04-15-01_25_43.png',
    ],
    demoUrl: 'https://luxe-nails-nashville.vercel.app',
  },
]
