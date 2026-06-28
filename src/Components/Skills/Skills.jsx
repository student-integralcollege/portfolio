import { skills } from "../../constants";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl md:text-5xl dark:text-white">
            Skills
          </h2>
        </div>

        {/* Skill Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:border-zinc-600 dark:border-zinc-300 dark:bg-white dark:text-zinc-950 dark:hover:border-zinc-500"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
