import React from 'react'
import PropTypes from 'prop-types'

export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-md bg-black/[0.06] dark:bg-white/10 text-ink/70 dark:text-paper/70 ${className}`.trim()}>
      {children}
    </span>
  )
}

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
