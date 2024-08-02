import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [backendError, setBackendError] = useState('');
  const navigate = useNavigate();

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
      const response = await axios.post('http://localhost:8080/api/v1/auth/admin/login', formData);
      const adminData = response.data;
      console.log(adminData);
      // Assuming the response contains a token or some kind of auth information
      if (adminData) {
        setBackendError('');
        // Save auth token or admin data to local storage or context if needed
        // localStorage.setItem('token', adminData.token);
        navigate('/admin'); // Replace with the actual admin dashboard route
      } else {
        setBackendError('Invalid login credentials');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setBackendError(error.response.data.message);
      } else {
        setBackendError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="admin-login">
      <form onSubmit={handleSubmit}>
        <h2>ADMIN LOGIN FORM</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
        {backendError && <p className="backend-error">{backendError}</p>}
        <div className="register-link">
          <Link to="/admin/admin-register">Not registered? Register here</Link>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
