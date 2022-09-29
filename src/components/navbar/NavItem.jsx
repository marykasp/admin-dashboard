import React, { useState } from 'react'

const NavItem = ({ icon, children, notifications }) => {
  const [open, setOpen] = useState(false)
  return (
    <li className="nav-item" onClick={() => setOpen(!open)}>
      {icon}
      {notifications && <div className="counter">5</div>}
      {open && children}
    </li>
  )
}

export default NavItem
