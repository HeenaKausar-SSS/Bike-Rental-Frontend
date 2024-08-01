import React from 'react';

const VehicleCard = ({ image, name, amount, description, available }) => {
  const truncatedDescription = description.length > 50 ? description.substring(0, 50) + '...' : description;

  return (
    <>
    <div className="vehicle-card">
      <img src={image} alt={name} className="vehicle-image" />
      <h2 className="vehicle-name">{name}</h2>
      <p className="vehicle-amount">Rs.{amount}</p>
      <p className="vehicle-description">{truncatedDescription}</p>
      <input type="number" min="1" className="vehicle-quantity" placeholder="Enter Quantity" />
      <div className="vehicle-action">
        {available ? <button className="vehicle-button">Book Now</button> : null}
        <label className={`vehicle-availability ${available ? '' : 'full-width'}`}>
          {available ? 'Available' : 'Not Available'}
        </label>
      </div>
    </div>
    </>
  );
};

export default VehicleCard;
