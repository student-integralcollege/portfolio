import { Sun, Moon } from 'lucide-react'
import { profile, navLinks } from '../../assets/Data'

export default function Navbar({ isDark, toggleTheme }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-paper/80 dark:bg-ink/80 border-b border-black/5 dark:border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold text-ink dark:text-paper">
          <span className="w-8 h-8 rounded-full bg-ink dark:bg-paper text-paper dark:text-ink flex items-center justify-center text-sm font-bold">
            {profile.avatarInitial}
          </span>
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-ink/70 dark:text-paper/70">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-ink dark:hover:text-paper transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={toggleTheme}
          aria-label="Toggle color theme"
          className="w-9 h-9 rounded-full flex items-center justify-center text-ink/70 dark:text-paper/70 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  )
}