import { useState, useEffect, useRef } from 'react'
import type { Project, BusinessType } from '../data/projects'

// ─── helpers ────────────────────────────────────────────────────────────────

const TYPE_COLORS: Record<BusinessType, string> = {
  'Barbershop':   'bg-amber-900/50 text-amber-300 border-amber-800/50',
  'Hair Salon':   'bg-pink-900/50 text-pink-300 border-pink-800/50',
  'Tattoo Studio':'bg-zinc-800/60 text-zinc-300 border-zinc-700/50',
  'Nail Salon':   'bg-violet-900/50 text-violet-300 border-violet-800/50',
}

const PLACEHOLDER_GRADIENTS = [
  'from-violet-900/60 to-zinc-900',
  'from-pink-900/60 to-zinc-900',
  'from-indigo-900/60 to-zinc-900',
  'from-fuchsia-900/60 to-zinc-900',
  'from-purple-900/60 to-zinc-900',
]

/** Extracts a readable page name from a screenshot filename.
 *  "...-lovable-app-services-2026-..." → "Services"
 *  "...-lovable-app-2026-..."          → "Home"
 */
function getPageLabel(imgPath: string): string {
  const filename = imgPath.split('/').pop() ?? ''
  const match = filename.match(/app-([a-z]+)-2\d{3}/)
  if (match?.[1]) return match[1].charAt(0).toUpperCase() + match[1].slice(1)
  return 'Home'
}

// ─── scroll preview (single full-page screenshot) ───────────────────────────

interface ScrollPreviewProps {
  src: string
  alt: string
  containerClass: string
}

function ScrollPreview({ src, alt, containerClass }: ScrollPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [scrollEnd, setScrollEnd] = useState('-70%')
  const [paused, setPaused] = useState(false)
  const [ready, setReady] = useState(false)

  function computeScroll() {
    const container = containerRef.current
    const img = imgRef.current
    if (!container || !img) return
    const imgH = img.clientHeight
    const containerH = container.clientHeight
    if (imgH > containerH) {
      const pct = (((imgH - containerH) / imgH) * 100).toFixed(1)
      setScrollEnd(`-${pct}%`)
    }
    setReady(true)
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClass}`}
      style={{ '--scroll-end': scrollEnd } as React.CSSProperties}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-auto"
        style={
          ready
            ? {
                animation: 'scroll-preview 20s ease-in-out infinite alternate',
                animationPlayState: paused ? 'paused' : 'running',
              }
            : undefined
        }
        onLoad={computeScroll}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-zinc-950/50 to-transparent" />
    </div>
  )
}

// ─── hybrid preview (scroll → tab cycling) ──────────────────────────────────
// Used for the featured card. First image scrolls, remaining images cycle as tabs.

const HYBRID_LABELS = ['Website', 'Online Booking', 'Admin Panel']
// ms each slide is shown before advancing
const HYBRID_DURATIONS = [18000, 5000, 5000]

interface HybridPreviewProps {
  images: string[]
  alt: string
  containerClass: string
}

function HybridPreview({ images, alt, containerClass }: HybridPreviewProps) {
  const [fullSrc, ...tabSrcs] = images
  const totalSlides = 1 + tabSrcs.length

  const [slide, setSlide] = useState(0)
  const [scrollKey, setScrollKey] = useState(0) // increment → restarts CSS anim
  const [paused, setPaused] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [scrollEnd, setScrollEnd] = useState('-70%')
  const [scrollReady, setScrollReady] = useState(false)

  function computeScroll() {
    const container = containerRef.current
    const img = imgRef.current
    if (!container || !img) return
    const imgH = img.clientHeight
    const containerH = container.clientHeight
    if (imgH > containerH) {
      const pct = (((imgH - containerH) / imgH) * 100).toFixed(1)
      setScrollEnd(`-${pct}%`)
    }
    setScrollReady(true)
  }

  // auto-advance timer
  useEffect(() => {
    if (paused) return
    const duration = HYBRID_DURATIONS[slide] ?? 4000
    const id = setTimeout(() => {
      const next = (slide + 1) % totalSlides
      if (next === 0) setScrollKey((k) => k + 1) // restart scroll from top
      setSlide(next)
    }, duration)
    return () => clearInterval(id)
  }, [slide, paused, totalSlides])

  function goToSlide(e: React.MouseEvent, i: number) {
    e.stopPropagation()
    if (i === 0) setScrollKey((k) => k + 1)
    setSlide(i)
    setPaused(true)
  }

  const label = HYBRID_LABELS[slide] ?? ''

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClass}`}
      style={{ '--scroll-end': scrollEnd } as React.CSSProperties}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── slide 0: full-page scroll ── */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          slide === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {fullSrc && (
          <img
            key={scrollKey}
            ref={imgRef}
            src={fullSrc}
            alt={`${alt} — Website`}
            className="w-full h-auto"
            style={
              scrollReady
                ? {
                    animation: 'scroll-preview 18s ease-in-out forwards',
                    animationPlayState:
                      slide === 0 && !paused ? 'running' : 'paused',
                  }
                : undefined
            }
            onLoad={computeScroll}
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-zinc-950/50 to-transparent" />
      </div>

      {/* ── slides 1+: static tab images ── */}
      {tabSrcs.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} — ${HYBRID_LABELS[i + 1] ?? ''}`}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${
            slide === i + 1 ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* ── label ── */}
      <div className="absolute bottom-2 left-3 z-10 rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-zinc-300 backdrop-blur-sm">
        {label}
      </div>

      {/* ── dot indicators ── */}
      {totalSlides > 1 && (
        <div className="absolute bottom-2.5 right-3 z-10 flex items-center gap-1">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.preventDefault()
                goToSlide(e, i)
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === slide
                  ? 'w-4 bg-white'
                  : 'w-1.5 bg-white/35 hover:bg-white/60'
              }`}
              aria-label={HYBRID_LABELS[i] ?? ''}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ─── tab preview (multiple pages cycling) ───────────────────────────────────

interface TabPreviewProps {
  images: string[]
  alt: string
  containerClass: string
}

function TabPreview({ images, alt, containerClass }: TabPreviewProps) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length)
    }, 2800)
    return () => clearInterval(id)
  }, [paused, images.length])

  return (
    <div
      className={`relative overflow-hidden ${containerClass}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} — ${getPageLabel(src)}`}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* active page label */}
      <div className="absolute bottom-2 left-3 z-10 rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-zinc-300 backdrop-blur-sm">
        {getPageLabel(images[active] ?? '')}
      </div>

      {/* dot indicators */}
      <div className="absolute bottom-2.5 right-3 z-10 flex items-center gap-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setActive(i)
              setPaused(true)
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? 'w-4 bg-white' : 'w-1.5 bg-white/35 hover:bg-white/60'
            }`}
            aria-label={`View ${getPageLabel(images[i] ?? '')}`}
          />
        ))}
      </div>
    </div>
  )
}

// ─── placeholder ────────────────────────────────────────────────────────────

function PlaceholderPreview({
  gradient,
  containerClass,
}: {
  gradient: string
  containerClass: string
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br text-zinc-600 ${gradient} ${containerClass}`}
    >
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className="text-xs">Screenshot coming soon</span>
    </div>
  )
}

// ─── main card ──────────────────────────────────────────────────────────────

interface Props {
  project: Project
  index: number
  featured?: boolean
}

export default function ProjectCard({ project, index, featured = false }: Props) {
  const { images } = project
  const gradient = PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length]
  const imageContainerClass = featured ? 'h-[320px]' : 'h-[220px]'

  function renderPreview() {
    if (images.length === 0) {
      return <PlaceholderPreview gradient={gradient} containerClass={imageContainerClass} />
    }
    // Featured card: scroll first image, then cycle through the rest
    if (featured) {
      return (
        <HybridPreview
          images={images}
          alt={project.name}
          containerClass={imageContainerClass}
        />
      )
    }
    if (images.length === 1) {
      return (
        <ScrollPreview
          src={images[0]!}
          alt={project.name}
          containerClass={imageContainerClass}
        />
      )
    }
    return (
      <TabPreview
        images={images}
        alt={project.name}
        containerClass={imageContainerClass}
      />
    )
  }

  function openDemo() {
    window.open(project.demoUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <article
      onClick={openDemo}
      className={`group flex cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_12px_40px_rgba(255,255,255,0.06)] ${
        featured ? 'flex-col md:flex-row' : 'flex-col'
      }`}
    >
      {/* preview column */}
      <div
        className={`relative shrink-0 overflow-hidden ${
          featured ? 'w-full md:w-[55%]' : 'w-full'
        }`}
      >
        {renderPreview()}

        {/* type badge */}
        <div className="absolute left-3 top-3 z-10">
          <span
            className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${TYPE_COLORS[project.type]}`}
          >
            {project.type}
          </span>
        </div>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-600">
          {project.styleLabel}
        </p>

        <h3 className={`font-semibold text-zinc-100 ${featured ? 'text-2xl' : 'text-lg'}`}>
          {project.name}
        </h3>

        <p className={`flex-1 leading-relaxed text-zinc-400 ${featured ? 'text-base' : 'text-sm'}`}>
          {project.description}
        </p>

        {featured && (
          <div className="flex items-center gap-2 rounded-lg border border-brand/30 bg-brand/10 px-4 py-2.5 text-sm font-medium text-brand-light">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Full booking system included
          </div>
        )}

        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-brand/60 hover:bg-zinc-700 hover:text-white"
        >
          View live demo
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </article>
  )
}
