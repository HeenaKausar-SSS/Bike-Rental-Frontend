import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditAdminProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState('');

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/auth/admin/profile/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching admin data", error);
      }
    };

    fetchAdminData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    const namePattern = /^[A-Za-z]{1,20}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const usernamePattern = /^[A-Za-z0-9_]{3,20}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

    if (!namePattern.test(formData.firstName)) {
      errors.firstName = 'First name must be alphabetic and not more than 20 characters';
    }

    if (!namePattern.test(formData.lastName)) {
      errors.lastName = 'Last name must be alphabetic and not more than 20 characters';
    }

    if (!emailPattern.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!usernamePattern.test(formData.username)) {
      errors.username = 'Username must be 3-20 characters long and can contain letters, numbers, and underscores';
    }

    if (formData.password && !passwordPattern.test(formData.password)) {
      errors.password = 'Password must be at least 8 characters and include 1 uppercase, 1 lowercase, 1 number, and 1 special character';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.put(`http://localhost:8080/api/v1/auth/admin/profile/${id}`, formData);
        console.log(response.data);
        setBackendError('');
        navigate('/admin'); 
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          setBackendError(error.response.data.message);
        } else {
          setBackendError('An error occurred. Please try again.');
        }
      }
    }
  };

  return (
    <div className="edit-admin-profile">
      <form onSubmit={handleSubmit}>
        <h2>Edit Admin Profile</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
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
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <button type="submit" className="submit-btn">Update</button>
        {backendError && <p className="backend-error">{backendError}</p>}
      </form>
    </div>
  );
};

export default EditAdminProfile;
