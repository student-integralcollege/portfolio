import { useEffect, useState } from 'react'
import Hero from './Components/About/About'
import Projects from './Components/Work/Work'
import Skill from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Layout from './Components/Layout/Layout'
import Education from './Components/Education/Education'

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
    <Layout isDark={isDark} toggleTheme={toggleTheme}>
      <Hero />
      <Skill />
      <Projects />
      <Education />
      <Contact />
    </Layout>
  )
}