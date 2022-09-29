import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import "./dropdownmenu.scss"


const DropDownMenu = () => {

  function DropdownItem(props) {
    return (
      <div className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        <span>{props.children}</span>
        <span className="icon-right">{props.rightIcon}</span>
      </div>
    )
  }
  return (
    <div className="dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem leftIcon={<SettingsIcon />}>Settings</DropdownItem>
      <DropdownItem rightIcon={<SettingsIcon />}>Settings</DropdownItem>
    </div>
  )
}

export default DropDownMenu
