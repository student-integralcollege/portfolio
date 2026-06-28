import photo from "../../assets/profile.jpg";

export default function About() {
  return (
    <section id="hero" className="pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto] lg:grid-cols-2 items-center gap-4 sm:gap-8 lg:gap-12">

          {/* Text Content */}
          <div className="min-w-0">
            <h1 className="text-xl sm:text-3xl lg:text-4xl tracking-tight font-bold text-slate-900 dark:text-white">
              Hi, I'm Adeeb Hussain
              <span className="ml-2 sm:ml-4 inline-block align-middle rounded-full bg-green-100 px-2 py-0.5 text-[10px] sm:text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400 whitespace-nowrap">
                ● Open to Work
              </span>
            </h1>

            <p className="mt-2 sm:mt-6 max-w-2xl text-xs sm:text-base lg:text-lg leading-relaxed sm:leading-8 text-slate-600 dark:text-slate-300">
              Full Stack Developer passionate about building scalable web applications and AI-powered solutions. Experienced with React, Next.js, TypeScript, Node.js, Express.js, MongoDB, and modern web technologies. I enjoy solving real-world problems, creating intuitive user experiences, and developing efficient backend systems.
            </p>

            <div className="mt-4 sm:mt-10 flex flex-wrap gap-2 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-xs sm:px-7 sm:py-3 sm:text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
              >
                Get in Touch
              </a>

              <a
                href="https://drive.google.com/file/d/example/view"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-xs sm:px-7 sm:py-3 sm:text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex justify-end lg:justify-center">
            <div className="relative h-24 w-24 translate-x-1 sm:h-48 sm:w-48 sm:translate-x-2 lg:h-72 lg:w-72 lg:translate-x-24 overflow-hidden rounded-full border-2 sm:border-4 border-slate-200 shadow-xl lg:shadow-2xl dark:border-slate-700">
              <img
                src={photo}
                alt="Adeeb Hussain"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}