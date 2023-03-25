import React from 'react'

const ScoreCount = ({ count }) => {
  return (
      <div className="score-count" data-testid="score-count">
        <h3 className="score-count__text">Your Score:</h3>
        <span className="score-count__value" >{count}</span>
      </div>
  );
};

export default ScoreCount