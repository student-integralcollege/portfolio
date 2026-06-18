import React from 'react'
import PropTypes from 'prop-types'

export default function Button({ children, onClick, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500',
    secondary: 'bg-gray-100 text-ink hover:bg-gray-200 dark:bg-white/5 dark:text-paper',
    ghost: 'bg-transparent text-ink hover:bg-ink/10',
  }

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`.trim()

  return (
    <button type="button" onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  className: PropTypes.string,
}
