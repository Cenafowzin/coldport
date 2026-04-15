export default function Hero() {
  return (
    <section className="relative flex min-h-[50vh] flex-col items-center justify-center px-4 py-16 text-center">
      {/* subtle radial glow — reduced opacity */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[500px] w-[500px] rounded-full bg-brand/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <span className="mb-4 inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1 text-sm font-medium text-brand-light">
          Available for new projects
        </span>

        <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          I build websites that{' '}
          <span className="gradient-text">bring clients to your door</span>
        </h1>

        <p className="mt-5 text-lg text-zinc-400 sm:text-xl">
          Booking systems, local SEO-ready, mobile-first — built for barbershops,
          salons, and studios.
        </p>

        <p className="mt-3 text-sm text-zinc-500">
          Every site is custom-designed to match your brand — not a template.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-brand px-8 py-3 text-base font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand/90 hover:shadow-brand/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-8 py-3 text-base font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-800"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
