import { projects } from "../../constants";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl md:text-5xl dark:text-white">
            Projects
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-500 dark:text-zinc-400">
            A curated collection of projects built while exploring modern web
            development technologies and real-world problem solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md shadow-zinc-950/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-950/10 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20 dark:hover:border-zinc-700"
            >
              {/* Project Image */}
              <div className="overflow-hidden border-b border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-950">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="aspect-video w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">

                {/* Title + Action Icons */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold leading-snug tracking-tight text-zinc-950 dark:text-white sm:text-xl">
                    {project.title}
                  </h3>

                  <div className="flex shrink-0 items-center gap-1.5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source on GitHub`}
                      title="GitHub Repository"
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-500 transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-700 dark:hover:text-white"
                    >
                      <FaGithub className="h-4 w-4" />
                    </a>

                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                      title="Live Demo"
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-500 transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-700 dark:hover:text-white"
                    >
                      <FiExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                {/* Tech Tags + Status */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/20 dark:text-green-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 dark:bg-green-400" />
                    Completed
                  </span>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://github.com/student-integralcollege"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
          >
            <FaGithub className="h-4 w-4" />
            View More on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
