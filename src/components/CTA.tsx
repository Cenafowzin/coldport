const EMAIL = 'digodubeux@gmail.com' // ← replace with your real email

export default function CTA() {
  const subject = encodeURIComponent('Website inquiry')
  const body = encodeURIComponent(
    "Hi Rodrigo,\n\nI found your portfolio and I'm interested in a website for my business.\n\nBusiness name: \nBusiness type: \nWhat I'm looking for: ",
  )

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-28 text-center">
      {/* glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[400px] rounded-full bg-brand/15 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Want something like this for{' '}
          <span className="gradient-text">your business?</span>
        </h2>
        <p className="mt-5 text-lg text-zinc-400">
          I work with a small number of clients at a time so I can give each project
          the attention it deserves. Reach out and let's talk.
        </p>

        <a
          href={`mailto:${EMAIL}?subject=${subject}&body=${body}`}
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-brand px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand/90 hover:shadow-brand/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Get in touch
        </a>

        <p className="mt-4 text-sm text-zinc-600">
          Usually reply within 24 hours.
        </p>
      </div>
    </section>
  )
}
