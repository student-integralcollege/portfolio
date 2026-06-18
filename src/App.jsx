import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/About/About'
import Projects from './Components/Work/Projects'
import Skills from './Components/Skills/Skill'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const toggleTheme = () => setIsDark((d) => !d)

  return (
    <div className="min-h-screen bg-paper dark:bg-ink transition-colors">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  )
}