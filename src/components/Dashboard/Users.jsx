import React, { useState } from "react";
import OpenSidebar from "../../assets/openSidebar";
import CloseSidebar from "../../assets/closeSidebar";
import { Route } from "express";

const Users = () => {
  const name = localStorage.getItem("name");
  const [sidebarWidth, setSidebarWidth] = useState("250px");
  const toggleSidebar = () => {
    setSidebarWidth((prevWidth) => (prevWidth === "50px" ? "250px" : "50px"));
  };
  const handleLogout = () => {
    toast(`Logout successfully...`, {
      position: "bottom-right",
      autoClose: 5000,
      theme: "light",
    });
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem("token");
      navigate("/");
    }, 1000);
  };
  return (
    <div className="dashboard-content" style={{ marginLeft: sidebarWidth }}>
      <div
        className="headerOutter"
        style={{ width: `calc(100% - ${sidebarWidth})` }}
      >
        <div className="headerInner">
          <button className="toggleButton" onClick={toggleSidebar}>
            {sidebarWidth === "50px" ? <OpenSidebar /> : <CloseSidebar />}
          </button>
          <div className="title">
            <h2></h2>
          </div>
          <div className="header-actions">
            <button onClick={handleLogout}>Logout</button>
            <span>{name}</span>
          </div>
        </div>
      </div>
      <div className="dashboard-visibleArea">
       
      </div>
    </div>
  );
};

export default Users;
