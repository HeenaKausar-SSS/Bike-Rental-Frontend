import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const DeleteBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      const confirmDeletion = window.confirm('Are you sure you want to delete this booking?');
      if (confirmDeletion) {
        const deleteBooking = async () => {
          try {
            await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/bookings/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            navigate('/book'); // Redirect to bookings list or another page
          } catch (error) {
            console.error('Error deleting booking:', error);
            navigate('/error'); // Redirect to an error page or show an error message
          }
        };

        deleteBooking();
      } else {
        navigate('/book'); // Redirect to bookings list if user cancels deletion
      }
    }
  }, [id, token, navigate]);

  return (
    <div>Deleting booking...</div>
  );
};

export default DeleteBooking;
