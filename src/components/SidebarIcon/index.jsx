import React from 'react'
import './sidebarIcon.sass'

const SidebarIcon = ({ label, isActive, ...rest }) => {
  return (
    <div {...rest} className={`sidebar-icon ${isActive && 'sidebar-icon-active'}`}>
      {label}
    </div>
  )
}

export default SidebarIcon
