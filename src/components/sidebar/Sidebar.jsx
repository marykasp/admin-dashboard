import React from 'react';
import { Link } from 'react-router-dom'
import "./sidebar.scss"
import SidebarMenu from './SidebarMenu';
import SidebarItem from "./SidebarItem";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AssessmentIcon from "@mui/icons-material/Assessment";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import GroupIcon from "@mui/icons-material/Group";

// TODO: have each SidebarItem be a sublist - data object with id, subsectionn title, children (will be the actually list itemms)
// ** Iterate over the sidebarlist object and create a SidebarItem - each item will have a key and use rest operator to pass downn rest of properties of the object

export const sidebarList = [
  {
    id: 1,
    title: 'Main',
    children: [
      {
        icon: (<DashboardIcon className="icon" />),
        title: "Dashboard",
        link: "/",
      },
      {
        icon: <GroupIcon className="icon" />,
        title: "Users",
        link: "/users",
      },
    ]
  },
  {
    id: 2,
    title: 'Information',
    children: [
      {
        icon: <StorefrontIcon className="icon" />,
        title: "Projects",
        link: "/projects"
      },
      {
        icon: <CreditCardIcon className="icon" />,
        title: "Orders",
        link: "/orders"
      },
      {
        icon: <DashboardIcon className="icon" />,
        title: "Data",
        link: "/data"
      },
      {
        icon: <AssessmentIcon className="icon" />,
        title: "Documents",
        link: "/documents"
      },
    ]
  },
  {
    id: 3,
    title: 'Settings',
    children: [
      {
        icon: <SettingsIcon className="icon" />,
        title: "Settings",
        link: "/settings"
      },
      {
        icon: <TextSnippetIcon className="icon" />,
        title: "Logs",
        link: "/logs"
      },
    ]
  },
  {
    id: 3,
    title: 'Settings',
    children: [
      {
        icon: <AccountCircleIcon className="icon" />,
        title: "Profile",
        link: "/profile"
      },
      {
        icon: <LogoutIcon className="icon" />,
        title: "Logout",
        link: "/form"
      },
    ]
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
        <div>
          {sidebarList.map((nav, index) => (
            <SidebarMenu nav={nav} index={index}>
              <SidebarItem items={nav.children} />
            </SidebarMenu>
          ))}

        </div>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div >
  )
}

export default Sidebar
