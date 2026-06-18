import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, isDark, toggleTheme }) {
  return (
    <div className="min-h-screen bg-paper dark:bg-ink transition-colors">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
