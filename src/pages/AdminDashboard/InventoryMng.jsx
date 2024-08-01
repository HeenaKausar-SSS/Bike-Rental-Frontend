import React, { useState, useEffect } from 'react';
import { MdFilterAlt } from "react-icons/md";
import { FaSearch, FaPlus } from 'react-icons/fa';
import axios from 'axios';

import bike1 from '../../images/bike1.jpg'

const bikes = [
  {
    id: 1,
    imageUrl: bike1,
    bikeName: 'Mountain Bike',
    amount: "500",
    description: 'A high-quality mountain bike suitable for off-road trails.',
  },
  {
    id: 2,
    imageUrl: bike1,
    bikeName: 'Road Bike',
    amount: "500",
    description: 'A fast and lightweight road bike for city and long-distance rides.',
  },
  {
    id: 3,
    imageUrl: bike1,
    bikeName: 'Hybrid Bike',
    amount: '200',
    description: 'A versatile hybrid bike that combines the features of road and mountain bikes.',
  },
  {
    id: 3,
    imageUrl: bike1,
    bikeName: 'Hybrid Bike',
    amount: '200',
    description: 'A versatile hybrid bike that combines the features of road and mountain bikes.',
  },
  // Add more bike data as needed
];

const ManageInventory = () => {
  const [bikes, setBikes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    bikeName: '',
    description: '',
    imageUrl: '',
    registrationNumber: '',
    status: '',
    ratePerDay: '',
  });

//   useEffect(() => {
//     const fetchBikes = async () => {
//       try {
//         const response = await axios.get('/admin/get-vehicles'); // Adjust the endpoint as necessary
//         setBikes(response.data);
//       } catch (error) {
//         console.error('Error fetching bikes:', error);
//       }
//     };

//     fetchBikes();
//   }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/admin/api/v1/Vehicle/admin/add-vehicle`, formData);
      setBikes([...bikes, response.data]); // assuming the response contains the new bike data
      setShowForm(false);
      setFormData({
        bikeName: '',
        description: '',
        imageUrl: '',
        registrationNumber: '',
        status: '',
        ratePerDay: '',
      });
    } catch (error) {
      console.error('Error adding bike:', error);
    }
  };

  return (
    <div className="manage-inventory">
      <div className="header">
        <button className="add-bike-btn" onClick={() => setShowForm(true)}><FaPlus />ADD NEW BIKE</button>
        <div className="search-filter">
          <div className="search-bar">
            <div className="icon"><FaSearch /></div>
            <input type="text" placeholder="Search..." />
          </div>
          <div className="filter">
            <div className="icon"><MdFilterAlt /></div>
            <select>
              <option value="">All</option>
              <option value="mountain">Mountain Bikes</option>
              <option value="road">Road Bikes</option>
              <option value="hybrid">Hybrid Bikes</option>
            </select>
          </div>
        </div>
      </div>
      <div className="cards">
        {bikes.map(bike => (
          <div key={bike.id} className="card">
            <img src={bike.imageUrl} alt={bike.bikeName} />
            <div className="card-content">
              <h3>{bike.bikeName}</h3>
              <h3>$ {bike.amount}</h3>
              {/* <h3>$ {bike.status}</h3> */}
              <p>{bike.description}</p>
              <div className="card-btn">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showForm && (
        <div className="form-popup">
          <form onSubmit={handleSubmit} className="add-bike-form">
            <h2>Add New Bike</h2>
         
            <label>
              Bike Name:
              <input type="text" name="bikeName" value={formData.bikeName} onChange={handleChange} required />
            </label>
            <label>
              Description:
              <input type="text" name="description" value={formData.description} onChange={handleChange} required />
            </label>
            <label>
              Registration Number:
              <input type="text" name="" value={formData.registrationNumber} onChange={handleChange} required />
            </label>
            <label>
              Rate Per Day:
              <input type="text" name="" value={formData.ratePerDay} onChange={handleChange} required />
            </label>
            <label>
              Status:
              <input type="text" name="" value={formData.status} onChange={handleChange} required />
            </label>
            <label>
              Image URL:
              <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
            </label>
          <div className="btn-container">
          <button type="submit" className='add-new-bike'>Add Bike</button>
            <button type="button" className='cancel-new-bike' onClick={() => setShowForm(false)}>Cancel</button>
          </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ManageInventory;
