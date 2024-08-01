import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    address: '',
    email: '',
    password: '',
    bookings: []
  });

  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      fetchProfile();
    }
  }, [token, navigate]);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/v1/users/profile`, profile, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProfile(response.data);
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="profile">
      <h1>User Profile</h1>
      <form id='profileForm' method='post' encType='multipart/form-data' className="profile-form" onSubmit={handleSubmit}>
        <div className="image-upload">
          {image && <img src={image} alt="User" className="user-image" />}
          <input type="file" name='profilePhoto' accept="image/*" onChange={handleImageChange} />
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={profile.firstName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={profile.lastName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Contact:</label>
          <input type="text" name="contact" value={profile.contact} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={profile.address} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={profile.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={profile.password} onChange={handleInputChange} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfilePage;
