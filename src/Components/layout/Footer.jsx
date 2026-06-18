import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const nav = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
  ]

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="py-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-xl font-semibold text-ink dark:text-paper">Adeeb Hussain</h2>

        <nav className="flex flex-wrap justify-center gap-4 mt-4">
          {nav.map((item) => (
            <button key={item.id} onClick={() => handleScroll(item.id)} className="text-sm hover:text-indigo-600">
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex justify-center gap-4 mt-6 text-2xl">
          <a href="https://x.com/AdeebHu78527761" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-indigo-600"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/syed-mohd-adeeb-hussain-395670295/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-indigo-600"><FaLinkedin /></a>
          <a href="https://github.com/student-integralcollege" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-indigo-600"><FaGithub /></a>
        </div>

        <p className="text-sm text-gray-500 mt-6">© {new Date().getFullYear()} Adeeb Hussain. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
