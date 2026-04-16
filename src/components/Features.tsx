const features = [
  {
    title: 'Online Booking',
    description:
      'Clients book 24/7 without calling — choose service, pick a time, done. No more phone tag.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
  },
  {
    title: 'Mobile Optimized',
    description:
      'Your clients search on their phones. Every site I build is fast, responsive, and looks sharp on any screen.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: 'Local SEO Ready',
    description:
      'Structured data, optimized meta tags, and fast load times — so Google shows your business to nearby customers first.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-zinc-900/50 px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What's included
          </h2>
          <p className="mt-3 text-zinc-400">
            Every site ships with the tools that actually grow a local business.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-7"
            >
              <span className="rounded-xl border border-brand/30 bg-brand/10 p-3 text-brand-light">
                {f.icon}
              </span>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
