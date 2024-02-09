import React, { useState } from 'react';
import "./Card.css"
import tri from './tri.jpg'

const Votem = () => {
  const [address, setAddress] = useState('');

  return (
    <div className="votem-container">
      {/* <img src={tri} alt="Votem banner" className="votem-banner" /> */}
      <div className="votem-form">
        <h1 className="votem-heading">WELCOME TO INVOTE</h1>
        <p className="votem-heading">Get ready for India's next election, with everything you need to know about voting and your candidates.</p>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="votem-input"
        />
        <button className="votem-button">Start</button>
      </div>
    </div>
  );
};

export default Votem;