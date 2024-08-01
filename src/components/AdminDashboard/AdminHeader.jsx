import React, { useState } from 'react';
import { FaHome, FaUsers, FaCalendarAlt, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { RiEBike2Fill } from "react-icons/ri";
import { MdInventory2 } from "react-icons/md";
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="admin-name">Admin Name</div>
        <div className="sidebar-links">
          <Link to={'/admin'} onClick={closeSidebar}>
            <FaHome /> Home
          </Link>
          <Link to={'/admin/manage-user'} onClick={closeSidebar}>
            <FaUsers /> Manage User
          </Link>
          <Link to={'/admin/manage-booking'} onClick={closeSidebar}>
            <FaCalendarAlt /> Manage Bookings
          </Link>
          <Link to={'/admin/manage-vehicle'} onClick={closeSidebar}>
            <RiEBike2Fill /> Manage Bikes
          </Link>
          <Link to={'/admin/manage-inventory'} onClick={closeSidebar}>
            <MdInventory2 /> Manage Inventory
          </Link>
          <Link to={'/admin/admin-login'} onClick={closeSidebar}>
            <FaSignOutAlt /> Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
