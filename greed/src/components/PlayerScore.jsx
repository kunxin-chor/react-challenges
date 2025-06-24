import React from 'react';

function PlayerScore({ player, score = 0, isCurrent = false }) {
  return (
    <div className={`player-score ${isCurrent ? 'current-player' : ''}`}>
      <h3>Player {player} {isCurrent && '(Current)'}</h3>
      <div className="score">Score: {score}</div>
    </div>
  );
}

export default PlayerScore;
