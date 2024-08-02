import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUsers } from 'react-icons/fa';
import { BsBookmarkStarFill } from "react-icons/bs";
import { FaMotorcycle } from "react-icons/fa6";

const MainContent = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalBookings: 0,
    totalBikes: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersResponse, bookingsResponse, bikesResponse] = await Promise.all([
          axios.get('http://localhost:8080/api/v1/statistics/total-users'),
          axios.get('http://localhost:8080/api/v1/statistics/total-bookings'),
          axios.get('http://localhost:8080/api/v1/statistics/total-bikes')
        ]);

        console.log('Users response:', usersResponse);
        console.log('Bookings response:', bookingsResponse);
        console.log('Bikes response:', bikesResponse);

        setStats({
          totalUsers: usersResponse.data,
          totalBookings: bookingsResponse.data,
          totalBikes: bikesResponse.data
        });
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStats();
  }, []);

  useEffect(() => {
    console.log('Stats state:', stats);
  }, [stats]);

  return (
    <div className="main-content">
      <div className="card">
        <div className="card-icon"><FaUsers /></div>
        <div className="card-text">Total Users</div>
        <div className="card-number">{stats.totalUsers}</div>
      </div>
      <div className="card">
        <div className="card-icon"><BsBookmarkStarFill /></div>
        <div className="card-text">Total Bookings</div>
        <div className="card-number">{stats.totalBookings}</div>
      </div>
      <div className="card">
        <div className="card-icon"><FaMotorcycle /></div>
        <div className="card-text">Total Bikes</div>
        <div className="card-number">{stats.totalBikes}</div>
      </div>
    </div>
  );
};

export default MainContent;
