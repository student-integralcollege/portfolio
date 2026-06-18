import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { profile, socials } from '../../assets/Data'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  mail: Mail
}

export default function About() {
  return (
    <section id="top" className="max-w-5xl mx-auto px-6 pt-16 pb-12">
      <div className="flex items-center gap-3 flex-wrap">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink dark:text-paper">
          Hi, I'm {profile.name}
        </h1>
        {profile.openToWork && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 text-success text-xs font-medium px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulseDot" />
            Open to work
          </span>
        )}
      </div>

      <p className="mt-4 max-w-2xl text-ink/60 dark:text-paper/60 text-base sm:text-lg leading-relaxed">
        {profile.bio.map((chunk, i) => (
          <span key={i} className={chunk.bold ? 'font-semibold text-ink dark:text-paper' : ''}>{chunk.text}</span>
        ))}
      </p>

      <p className="mt-3 max-w-2xl text-ink/60 dark:text-paper/60 text-base sm:text-lg leading-relaxed">
        {profile.availability.map((chunk, i) => (
          <span key={i} className={chunk.bold ? 'font-semibold text-ink dark:text-paper' : ''}>{chunk.text}</span>
        ))}
      </p>

      {profile.contact?.href && profile.contact?.label && (
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href={profile.contact.href}
            className="inline-flex items-center gap-2 rounded-full bg-ink dark:bg-paper text-paper dark:text-ink px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity">
            <Mail size={16} />
            {profile.contact.label}
          </a>
        </div>
      )}

      <div className="mt-6 flex items-center gap-5 text-ink/50 dark:text-paper/50">
        {socials.map((s) => {
          const Icon = iconMap[s.icon]
          return (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
              className="hover:text-ink dark:hover:text-paper transition-colors">
              <Icon size={18} />
            </a>
          )
        })}
      </div>
    </section>
  )
}