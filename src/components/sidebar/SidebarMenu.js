import React, { useState } from "react";

const SidebarMenu = ({ nav, index, children }) => {
  const [submenuActive, setSubmenuActive] = useState(false);
  return (
    <div
      className="sidebar-section"
      key={index}
      onClick={() => setSubmenuActive(!submenuActive)}
    >
      <div className="sidebar-submenu">
        <p className="title">{nav.title}</p>
        icon
      </div>
      {submenuActive && children}
    </div>
  );
};

export default SidebarMenu;
