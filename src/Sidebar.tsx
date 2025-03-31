import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setExpanded(!expanded);
  };

  return (
    <div className={`sidebar ${expanded ? "expanded" : "collapsed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {expanded ? "<<" : ">>"}
      </button>
      <ul className="menu">
        <li className="menu-item">
          <span className="icon">🏠</span>
          {expanded && <span className="label">Home</span>}
        </li>
        <li className="menu-item">
          <span className="icon">🔍</span>
          {expanded && <span className="label">Search</span>}
        </li>
        <li className="menu-item">
          <span className="icon">📁</span>
          {expanded && <span className="label">Files</span>}
        </li>
        <li className="menu-item">
          <span className="icon">⚙️</span>
          {expanded && <span className="label">Settings</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
