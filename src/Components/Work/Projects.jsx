import ProjectCard from './Projectcard'
import { projects } from '../../assets/Data'

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-ink dark:text-paper mb-6">Projects</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
