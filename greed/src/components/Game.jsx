import React from 'react';
import Dice from './Dice';
import PlayerScore from './PlayerScore';
import PointsTable from './PointsTable';

function Game() {

  return (
    <div className="game-container">
      <div className="game-header">
        <h1>Greed Dice Game</h1>
        <div className="turn-counter">Turn: 1</div>
      </div>
      
      <div className="players-container">
        <PlayerScore/>
        <PlayerScore/>
      </div>
      
      <div className="dice-container">
        {[1, 2, 3, 4, 5].map((value) => (
          <div key={value} className="dice-wrapper">
            <Dice/>
          </div>
        ))}
      </div>

      <div className="turn-points">
        <h3>Current Turn Points: 0</h3>
      </div>
      
      <div className="game-controls">
        <button className="btn roll-btn">
          Roll Dice
        </button>
        <button className="btn bank-btn" disabled>
          Bank Points
        </button>
      </div>
      
      <PointsTable />
    </div>
  );
}

export default Game;
