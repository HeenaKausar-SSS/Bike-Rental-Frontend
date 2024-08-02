import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    address: '',
    email: '',
    password: '',
  });
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/auth/admin/users/${id}`);
        setProfile(response.data);
        if (response.data.profilePhoto) {
          setImage(response.data.profilePhoto);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfile();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setProfile({ ...profile, profilePhoto: e.target.files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in profile) {
      formData.append(key, profile[key]);
    }

    try {
      await axios.put(`http://localhost:8080/api/v1/auth/admin/users/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Profile updated successfully');
      navigate('/user-management');
    } catch (error) {
      console.error('Error updating profile:',error.response || error.message || error);
    }
  };

  return (
    <div className="profile">
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="image-upload">
          {image && <img src={image} alt="User" className="user-image" />}
          <input type="file" name="profilePhoto" accept="image/*" onChange={handleImageChange} />
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
          <input type="text" name="contact" value={profile.contactNumber} onChange={handleInputChange} />
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
