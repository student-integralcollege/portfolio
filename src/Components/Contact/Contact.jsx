import { profile } from '../../assets/Data'

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16 pb-32 text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink dark:text-paper">
        Let's build something together
      </h2>
      <p className="mt-3 text-ink/60 dark:text-paper/60 max-w-md mx-auto">
        Have a project in mind, or just want to say hi? My inbox is open.
      </p>
      <a href={profile.contact.href}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink dark:bg-paper text-paper dark:text-ink px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
        {profile.contact.label}
      </a>
      <p className="mt-12 text-xs text-ink/30 dark:text-paper/30">
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
      </p>
    </section>
  )
}