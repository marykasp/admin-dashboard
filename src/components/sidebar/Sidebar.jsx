import React from 'react'
import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import GroupIcon from "@mui/icons-material/Group";

// TODO: have each SidebarItem be a sublist - data object with id, subsectionn title, children (will be the actually list itemms)
// ** Iterate over the sidebarlist object and create a SidebarItem - each item will have a key and use rest operator to pass downn rest of properties of the object

export const sidebarList = [
  {
    icon: (<DashboardIcon className="icon" />),
    title: "Dashboard",
    section: "Main",
  },
  {
    icon: <GroupIcon className="icon" />,
    title: "Users",
    section: "Main",
  },
  {
    icon: <StorefrontIcon className="icon" />,
    title: "Projects",
    section: "Information",
  },
  {
    icon: <CreditCardIcon className="icon" />,
    title: "Orders",
    section: "Information",
  },
  {
    icon: <DashboardIcon className="icon" />,
    title: "Data",
    section: "Information",
  },
  {
    icon: <AssessmentIcon className="icon" />,
    title: "Documents",
    sectionn: "Information",
  },
  {
    icon: <SettingsIcon className="icon" />,
    title: "Settings",
    section: "Settings",
  },
  {
    icon: <TextSnippetIcon className="icon" />,
    title: "Logs",
    section: "Settings",
  },
  {
    icon: <AccountCircleIcon className="icon" />,
    title: "Profile",
    sectio: "User",
  },
  {
    icon: <LogoutIcon className="icon" />,
    title: "Logout",
    section: "User",
  },
];




const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className='logo'>evozyne</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          {sidebarList.filter(item => item.section === 'Main').map(item => (
            <li>
              {item.icon}
              <span>{item.title}</span>
            </li>

          ))}
          <p className="title">Information</p>
          {sidebarList.filter(item => item.section === 'Information').map(item => (
            <li>
              {item.icon}
              <span>{item.title}</span>
            </li>
          ))}
          <p className="title">Settings</p>
          {sidebarList.filter(item => item.section === 'Settings').map(item => (
            <li>
              {item.icon}
              <span>{item.title}</span>
            </li>
          ))}
          <p className="title">User</p>
          {sidebarList.filter(item => item.section === 'User').map(item => (
            <li>
              {item.icon}
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
