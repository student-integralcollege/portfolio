import { projects as projectsData, skills as skillsData, education as educationData } from '../constants.js'

export const profile = {
  name: 'Adeeb Hussain',
  avatarInitial: 'Y',
  role: 'full-stack developer',
  openToWork: true,
  bio: [
    { text: 'A ', bold: false },
    { text: 'full-stack developer', bold: true },
    { text: ' who loves coding, tech, and science. I build clean, modern web applications using ', bold: false },
    { text: 'TypeScript, React, Next.js, and Express.js.', bold: true },
  ],
  availability: [
    { text: "I'm open to ", bold: false },
    { text: 'freelance projects', bold: true },
    { text: ', ', bold: false },
    { text: 'collaborations', bold: true },
    { text: ', and ', bold: false },
    { text: 'full-time opportunities.', bold: true },
  ],
  contact: {
    href: 'mailto:your.email@example.com',
    label: 'Email me',
  },
}

export const socials = [
  { label: 'Twitter', href: 'https://twitter.com/yourhandle', icon: 'twitter' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/syed-mohd-adeeb-hussain-395670295', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/student-integralcollege', icon: 'github' },
]

export const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
  { label: 'Education', href: '#education' },
]

export const dockLinks = [
  { label: 'Home', href: '#top', icon: 'home' },
  { label: 'GitHub', href: 'https://github.com/yourhandle', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourhandle', icon: 'linkedin' },
  { label: 'Twitter', href: 'https://twitter.com/yourhandle', icon: 'twitter' },
]
export const education = educationData
export const projects = projectsData
export const skills = skillsData