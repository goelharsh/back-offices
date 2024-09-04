import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { FaUser } from "react-icons/fa";
import {Link} from "react-router-dom"
const Sidebar = () => {
  const [sidebarWidth, setSidebarWidth] = useState("250px");
  const [dropdownOpen, setDropdownOpen] = useState({
    users: false,
    careers: false, 
  });

  const toggleDropdown = (section) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <div className="dashboard-sidebar" style={{ width: sidebarWidth }}>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <ul className="sidebar-menu">
          <li>
            <button
              className="sidebar-item"
              onClick={() => toggleDropdown("users")}
            >
              {sidebarWidth === "50px" ? <FaUser size={12} /> : <h2>Users</h2>}
            </button>
            {dropdownOpen.users && sidebarWidth !== "50px" && (
              <ul className="dropdown-content">
                <li>
                  <Link to="/dashboard/users">All Users</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className="sidebar-item"
              onClick={() => toggleDropdown("careers")}
            >
              {sidebarWidth === "50px" ? (
                <FaBriefcase size={24} />
              ) : (
                <h2>Careers</h2>
              )}
            </button>
            {dropdownOpen.careers && sidebarWidth !== "50px" && (
              <ul className="dropdown-content">
                <li>
                  <Link to="/dashboard/careers" >All Careers</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
