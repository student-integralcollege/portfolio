import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.03] shadow-card hover:shadow-cardHover transition-shadow overflow-hidden">
      <div className={`h-36 bg-gradient-to-br ${project.gradient || 'from-sky-500 to-blue-500'} flex items-center justify-center`}>
        <span className="text-white/90 font-semibold text-lg tracking-tight">{project.title}</span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-ink dark:text-paper">{project.title}</h3>
          <div className="flex items-center gap-2 text-ink/40 dark:text-paper/40 shrink-0">
            <a href={project.webapp} target="_blank" rel="noreferrer" aria-label={`${project.title} live site`} className="hover:text-ink dark:hover:text-paper transition-colors">
              <ExternalLink size={15} />
            </a>
            <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`} className="hover:text-ink dark:hover:text-paper transition-colors">
              <FaGithub size={15} />
            </a>
          </div>
        </div>

        <p className="mt-2 text-sm text-ink/60 dark:text-paper/60 leading-relaxed">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {(project.tags || []).map((t) => (
            <span key={t} className="text-[11px] font-medium px-2 py-1 rounded-md bg-black/[0.04] dark:bg-white/10 text-ink/60 dark:text-paper/60">{t}</span>
          ))}
        </div>

        {project.status ? (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-success">
            <span className="w-1.5 h-1.5 rounded-full bg-success" />
            {project.status}
          </div>
        ) : null}
      </div>
    </div>
  )
}