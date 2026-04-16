export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-14 text-center">
      {/* subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[400px] w-[400px] rounded-full bg-brand/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          I build websites that{' '}
          <span className="gradient-text">bring clients to your door</span>
        </h1>

        <p className="mt-4 text-base text-zinc-500 sm:text-lg">
          Custom-designed for barbershops, tattoo studios, salons &amp; nail bars — with real booking systems, not just pretty pages.
        </p>
      </div>
    </section>
  )
}
