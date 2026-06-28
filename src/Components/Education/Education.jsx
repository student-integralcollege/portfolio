import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
          Academic background
        </p>
        <h2
          id="education-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl md:text-5xl dark:text-white"
        >
          Education
        </h2>
      </div>

      <div className="relative grid gap-6 pl-8 sm:gap-8 sm:pl-10 md:pl-0">
        <div
          className="absolute left-3 top-3 h-[calc(100%-1.5rem)] w-px bg-zinc-950 sm:left-4 md:left-8 dark:bg-zinc-700"
          aria-hidden="true"
        />

        {education.map((edu) => (
          <article
            key={edu.id}
            className="group relative grid min-h-full gap-6 rounded-3xl border border-zinc-200 bg-white p-5 shadow-lg shadow-zinc-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-950/10 sm:p-7 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-7 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20 dark:hover:border-zinc-700"
          >
            <div className="relative flex shrink-0">
              <div
                className="absolute -left-[2.675rem] top-[-14px] h-3 w-3 rounded-full border-2 border-white bg-green-600 shadow ring-4 ring-zinc-100 sm:-left-[3.625rem] md:-left-[2px] dark:border-zinc-900 dark:bg-green-400 dark:ring-zinc-800"
                aria-hidden="true"
              />

              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 p-3 shadow-sm transition-transform duration-300 group-hover:scale-[1.03] sm:h-24 sm:w-24 dark:border-zinc-800 dark:bg-zinc-950">
                <img
                  src={edu.img}
                  alt={`${edu.school} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-bold leading-tight text-zinc-950 sm:text-2xl dark:text-white">
                  {edu.school}
                </h3>

                {edu.grade && (
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    Grade: {edu.grade}
                  </span>
                )}
              </div>

              <p className="mt-2 text-base font-semibold leading-7 text-zinc-700 dark:text-zinc-300">
                {edu.degree}
              </p>

              {edu.desc && (
                <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
                  {edu.desc}
                </p>
              )}
            </div>

            <div className="w-fit rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-semibold text-zinc-600 md:justify-self-end md:whitespace-nowrap dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
              {edu.date}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
