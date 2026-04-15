export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <span className="text-base font-semibold tracking-tight text-zinc-100">
          Rodrigo Dubeux
        </span>
        <a
          href="#contact"
          className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-800"
        >
          Get in touch
        </a>
      </div>
    </nav>
  )
}
