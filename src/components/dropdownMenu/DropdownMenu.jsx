import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./dropdownmenu.scss"
import { CSSTransition } from 'react-transition-group';


const DropDownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main')

  function DropdownItem(props) {
    return (
      <div className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <div className="icon-button">{props.leftIcon}</div>
        <div>{props.children}</div>
        <div className="icon-right">{props.rightIcon}</div>
      </div>
    )
  }
  return (
    <div className="dropdown">
      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary">
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem leftIcon={<SettingsIcon />} rightIcon={<ChevronRightIcon />} goToMenu="settings">
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary">
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem leftIcon={<SettingsIcon />}>Settings</DropdownItem>
          <DropdownItem rightIcon={<SettingsIcon />}>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div >

  )
}

export default DropDownMenu
