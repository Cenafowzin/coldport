import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const [featured, ...rest] = projects

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for local businesses — each one unique
          </h2>
          <p className="mt-3 text-zinc-400">
            Live sites, real clients, no templates.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Hero project — full width */}
          <ProjectCard project={featured} index={0} featured />

          {/* Remaining 4 in a 2×2 grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
