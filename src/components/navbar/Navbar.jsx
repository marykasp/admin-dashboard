import React from 'react'
import DropdownMenu from '../dropdownMenu/DropdownMenu'
import NavItem from "./NavItem"
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon className="icon" />
        </div>
        <ul className="nav-items">
          <NavItem icon={<LanguageOutlinedIcon />} />
          <NavItem icon={<DarkModeOutlinedIcon />} />
          <NavItem icon={<FullscreenOutlinedIcon />} />
          <NavItem icon={<NotificationsNoneOutlinedIcon className="icon" />} notifications={10} />

          <NavItem icon={<ChatBubbleOutlinedIcon className="icon" />} notifications={5} />

          <NavItem icon={<img src="https://randomuser.me/api/portraits/men/10.jpg" alt="" className='avatar' />} />
          <NavItem icon={<ListOutlinedIcon />}>
            {/* Dropdown goes here */}
            <DropdownMenu />
          </NavItem>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
