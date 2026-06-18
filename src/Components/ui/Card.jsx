import React from 'react'
import PropTypes from 'prop-types'

export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-slate-900 rounded-lg shadow p-4 ${className}`.trim()}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
