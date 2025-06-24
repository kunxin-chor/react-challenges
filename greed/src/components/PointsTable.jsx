import React from 'react';

function PointsTable() {
  return (
    <div className="points-table">
      <h3>Scoring Rules</h3>
      <table>
        <thead>
          <tr>
            <th>Combination</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>100 points each</td></tr>
          <tr><td>5</td><td>50 points each</td></tr>
          <tr><td>Three 1's</td><td>1000 points</td></tr>
          <tr><td>Three of a kind (2-6)</td><td>100 × face value</td></tr>
          <tr><td>Three pairs</td><td>1500 points</td></tr>
          <tr><td>Straight 1-6</td><td>2000 points</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default PointsTable;
