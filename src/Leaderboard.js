// src/components/Leaderboard.js
import React from 'react';
import './Leaderboard.css';

const Leaderboard = ({ leaderboard }) => {
  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <ol>
        {leaderboard.map((entry, index) => (
          <li key={index}>{`${entry.username}: ${entry.score}`}</li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
