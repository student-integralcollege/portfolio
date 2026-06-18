import React, { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { profile, navLinks } from '../../data/siteData'

export default function Navbar({ isDark, toggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-paper/80 dark:bg-ink/80 border-b border-black/5 dark:border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold text-ink dark:text-paper">
          <span className="w-8 h-8 rounded-full bg-ink dark:bg-paper text-paper dark:text-ink flex items-center justify-center text-sm font-bold">
            {profile.avatarInitial}
          </span>
          <span className="sr-only">Home</span>
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-ink/70 dark:text-paper/70">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-ink dark:hover:text-paper transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="w-9 h-9 rounded-full flex items-center justify-center text-ink/70 dark:text-paper/70 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="sm:hidden p-2 rounded-md focus:outline-none"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden bg-paper/95 dark:bg-ink/95 border-t border-black/5 dark:border-white/5">
          <div className="px-6 py-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="py-2 hover:text-ink dark:hover:text-paper">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
