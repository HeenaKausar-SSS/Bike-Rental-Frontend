import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import BookingList from '../components/UserBookingList';
import { UserContext } from '../context/UserContext';

function App() {
  const [currentBookings, setCurrentBookings] = useState([]);
  const [previousBookings, setPreviousBookings] = useState([]);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/bookings/history`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        const bookings = response.data;
        const current = bookings.filter(booking => new Date(booking.endDateTime) >= new Date());
        const previous = bookings.filter(booking => new Date(booking.endDateTime) < new Date());
        setCurrentBookings(current);
        setPreviousBookings(previous);
      })
      .catch(error => {
        console.error('Error fetching booking data:', error);
      });
    }
  }, [token, navigate]);

  const cancelBooking = (id) => {
    setCurrentBookings(currentBookings.filter((booking) => booking.id !== id));
  };

  const reorderBike = (id) => {
    const booking = previousBookings.find((booking) => booking.id === id);
    if (booking) {
      setCurrentBookings([...currentBookings, booking]);
    }
  };

  const editBooking = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="App">
      <h1>Bike Rental Service</h1>
      <BookingList
        currentBookings={currentBookings}
        previousBookings={previousBookings}
        cancelBooking={cancelBooking}
        reorderBike={reorderBike}
        editBooking={editBooking}
      />
    </div>
  );
}

export default App;
