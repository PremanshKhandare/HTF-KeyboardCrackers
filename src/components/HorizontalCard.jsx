import React from 'react';
import './HorizontalCard.css'; // Styles for the card

const HorizontalCard = ({ name, backgroundImage }) => {
  return (
    <div className="horizontal-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="card-content">
        <h2 className="card-name">{name}</h2>
      </div>
    </div>
  );
};

export default HorizontalCard;
