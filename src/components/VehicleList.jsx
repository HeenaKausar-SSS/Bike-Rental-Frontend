import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VehicleCard from './VehicleCards';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/Vehicle/vehicles`);
        setVehicles(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching vehicle data');
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="vehicle-cards-container">
      {vehicles.map((vehicle, index) => (
        <VehicleCard key={index} {...vehicle} />
      ))}
    </div>
  );
};

export default VehicleList;

