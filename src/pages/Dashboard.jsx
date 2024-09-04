import React from 'react';
import Sidebar from '../components/Common/Sidebar';
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 3.5rem)', position: 'relative' }}>
      {/* Sidebar */}
      <div style={{ position: 'sticky', top: 0, height: 'calc(100vh - 3.5rem)' }}>
        <Sidebar />
      </div>

      {/* Main content */}
      <div style={{ height: 'calc(100vh - 3.5rem)', overflow: 'auto', width: '100%' }}>
        <div style={{ margin: '0 auto', width: '91.6667%', maxWidth: '1000px', padding: '2.5rem' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
