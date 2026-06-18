import { useEffect, useState } from 'react'
import Hero from './components/sections/About'
import Projects from './Components/Work/Projects'
import Skills from './Components/Skills/Skill'
import Contact from './Components/Contact/Contact'
import Layout from './components/layout/Layout'

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
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  )
}