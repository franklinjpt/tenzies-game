import React from 'react'
import Die from './Die'

const DiceContainer = ({ dice, holdDice }) => {
  return (
      <div className="dice-container">
        {dice.map((die, index) => (
            <Die
                key={index}
                value={die.value}
                isHeld={die.isHeld}
                holdDice={() => holdDice(index)}
            />
        ))}
      </div>
  );
};

export default DiceContainer