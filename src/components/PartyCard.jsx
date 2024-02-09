import React, { useState } from 'react';
import './PartyCard.css'

const PartyCard = ({ name, description, imageUrl }) => {
  const [votes, setVotes] = useState(0);

  const handleVote = () => {
    setVotes(votes + 1);
  };

  return (
    <div className="party-card">
      <img src={imageUrl} alt={name} className="party-image" />
      <div className="party-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <button onClick={handleVote}>Vote</button>
        <button className='butt'>Votes: {votes}</button>
      </div>
    </div>
  );
};

export default PartyCard;
