import React from 'react';

function BookingList({ currentBookings, previousBookings, cancelBooking, reorderBike, editBooking }) {
  return (
    <div>
      <h2>Current Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Bike</th>
            <th>Start Date & Time</th>
            <th>End Date & Time</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentBookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.bike}</td>
              <td>{booking.startDateTime}</td>
              <td>{booking.endDateTime}</td>
              <td>{booking.amount}</td>
              <td>
                <button onClick={() => cancelBooking(booking.id)}>Cancel</button>
                <button onClick={() => editBooking(booking.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Previous Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Bike</th>
            <th>Start Date & Time</th>
            <th>End Date & Time</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {previousBookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.bike}</td>
              <td>{booking.startDateTime}</td>
              <td>{booking.endDateTime}</td>
              <td>{booking.amount}</td>
              <td>
                <button onClick={() => reorderBike(booking.id)}>Reorder</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingList;
