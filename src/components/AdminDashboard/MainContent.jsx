import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { BsBookmarkStarFill } from "react-icons/bs";
import { FaMotorcycle } from "react-icons/fa6";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="card">
        <div className="card-icon"><FaUsers /></div>
        <div className="card-text">Total Users</div>
        <div className="card-number">20</div>
      </div>
      <div className="card">
        <div className="card-icon"><BsBookmarkStarFill /></div>
        <div className="card-text">Total Bookings</div>
        <div className="card-number">15</div>
      </div>
      <div className="card">
        <div className="card-icon"><FaMotorcycle /></div>
        <div className="card-text">Total Bikes</div>
        <div className="card-number">10</div>
      </div>
    </div>
  );
};

export default MainContent;
