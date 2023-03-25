import React from 'react'

const RollButton = ({ gameOver, onClick }) => {
  return (
      <button onClick={onClick}>
        {gameOver ? 'New Game' : 'Roll'}
      </button>
  );
};

export default RollButton