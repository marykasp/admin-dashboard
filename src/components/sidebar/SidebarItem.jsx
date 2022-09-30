import React from 'react'
import { Link } from 'react-router-dom'

const SidebarItem = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <Link to={item.link} className="sidebar-menu-item">
          {item.icon}
          <span>{item.title}</span>
        </Link>
      ))}
    </ul>
  )
}

export default SidebarItem
