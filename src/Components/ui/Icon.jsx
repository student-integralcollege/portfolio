import React from 'react'
import PropTypes from 'prop-types'

// Simple icon wrapper: pass the icon component as `component` prop
export default function Icon({ component: Component, size = 16, className = '', ...props }) {
  if (!Component) return null
  return <Component size={size} className={className} {...props} />
}

Icon.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  size: PropTypes.number,
  className: PropTypes.string,
}
