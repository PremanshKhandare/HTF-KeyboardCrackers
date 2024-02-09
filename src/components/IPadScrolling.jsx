import React, { useState } from 'react';
import './iPadScrolling.css'; // Import your CSS file for styling
import people from './people.jpg'

const IPadScrolling = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    setScrollPosition(event.target.scrollTop);
  };

  return (
    <div className="ipad-container">
      <div className="ipad-inner" onScroll={handleScroll}>
        <div className="ipad-content" style={{ transform: `translateY(-${scrollPosition}px)` }}>

            <img src={people} alt="janta" />
          {/* Your content goes here */}
          <p>Voting is not merely a civic duty; it's the cornerstone of democracy, a fundamental right that empowers individuals to shape the course of their nation. With each ballot cast, we contribute to the collective voice that determines our leaders, policies, and the direction of our society. The importance of voting cannot be overstated—it's the mechanism through which we express our values, aspirations, and concerns. By participating in the electoral process, we uphold the principles of representation and ensure that our voices are heard. Every vote carries weight, every choice matters. It's a privilege earned through the sacrifices of generations past, and a responsibility we owe to the generations yet to come. So let us embrace this privilege, honor this responsibility, and stand together in the conviction that our votes can shape a better future for all.</p>
          {/* Add more content to see scrolling effect */}
        </div>
      </div>
    </div>
  );
};

export default IPadScrolling;
