import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEye, FaSearch } from 'react-icons/fa';
import { MdModeEdit, MdDelete, MdFilterAlt } from 'react-icons/md';
import PaginationTable from '../../components/Pagination';
import { useNavigate } from 'react-router-dom';

const columns = [
  "ID", 
  "User ID", 
  "Vehicle ID", 
  "Start Date", 
  "Start Time", 
  "End Date", 
  "End Time", 
  // "Payment Status", 
  "Actions"
];

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [totalActive, setTotalActive] = useState(0);
  const [totalPrevious, setTotalPrevious] = useState(0);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/bookings/admin/bookings');
        setBookings(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching bookings:', error.response || error.message || error);
        setError('Failed to fetch bookings');
      }
    };

    const fetchStatistics = async () => {
      try {
        const [activeResponse, previousResponse] = await Promise.all([
          axios.get('http://localhost:8080/api/v1/statistics/total-active-bookings'),
          axios.get('http://localhost:8080/api/v1/statistics/total-previous-bookings'),
        ]);

        setTotalActive(activeResponse.data);
        setTotalPrevious(previousResponse.data);
      } catch (error) {
        console.error('Error fetching statistics:', error);
        setError('Failed to fetch statistics');
      }
    };

    fetchBookings();
    fetchStatistics();
  }, []);

  const handleView = (id) => {
    navigate(`/bookings/view/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/book/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/bookings/${id}`);
      setBookings(bookings.filter(booking => booking.id !== id));
      setError('');
    } catch (error) {
      console.error('Error deleting booking:', error.response || error.message || error);
      setError('Failed to delete booking');
    }
  };

  const renderRow = (booking) => (
    <>
      <td>{booking.id}</td>
      <td>{booking.userId}</td>
      <td>{booking.vehicleId}</td>
      <td>{booking.startDate}</td>
      <td>{booking.startTime}</td>
      <td>{booking.endDate}</td>
      <td>{booking.endTime}</td>
      {/* <td>{booking.paymentStatus}</td> */}
      <td className="actions">
        <button className="view-btn" onClick={() => handleView(booking.id)}><FaEye /></button>
        <button className="edit-btn" onClick={() => handleEdit(booking.id)}><MdModeEdit /></button>
        <button className="delete-btn" onClick={() => handleDelete(booking.id)}><MdDelete /></button>
      </td>
    </>
  );

  return (
    <div className="booking-management">
      <div className="cards">
        <div className="card">
          <div className="card-text">Total Active Booking</div>
          <div className="card-number">{totalActive}</div>
        </div>
        <div className="card">
          <div className="card-text">Total Previous Booking</div>
          <div className="card-number">{totalPrevious}</div>
        </div>
        <div className="card">
          <div className="card-text">Pending Payments</div>
          <div className="card-number">5</div> {/* Assuming static value for pending payments */}
        </div>
      </div>
      <div className="search-filter">
        <div className="search-bar">
          <div className="icon"><FaSearch /></div>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="filter">
          <div className="icon"><MdFilterAlt/></div>
          <select>
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="previous">Previous</option>
            <option value="pending">Pending Payments</option>
          </select>
        </div>
      </div>
      <PaginationTable data={bookings} columns={columns} renderRow={renderRow} />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default BookingManagement;
