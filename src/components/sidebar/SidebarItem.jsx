import React from 'react'
import { Link } from 'react-router-dom'

const SidebarItem = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li>
          <Link to={item.link} className="sidebar-menu-item" key={`nav-${index}`}>
            {item.icon}
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SidebarItem
