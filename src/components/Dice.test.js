import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import React from 'react'
import DiceContainer from './DiceContainer';
import RollButton from './RollButton.jsx';

const mockDice = [
  { value: 1, isHeld: false },
  { value: 2, isHeld: false },
  { value: 3, isHeld: false },
  { value: 4, isHeld: false },
  { value: 5, isHeld: false },
  { value: 6, isHeld: false },
  { value: 7, isHeld: false },
  { value: 8, isHeld: false },
  { value: 9, isHeld: false },
  { value: 10, isHeld: false },
];

const mockHoldDice = jest.fn()
const mockOnClick = jest.fn()

test("roll dice functionality", () => {

  render(<DiceContainer dice={mockDice} holdDice={mockHoldDice}/>)
  render(<RollButton gameOver={false} onClick={mockOnClick}/>)
  fireEvent.click(screen.getByRole('button', {name: /Roll/i}))
  expect(screen.getAllByTestId("die")).toHaveLength(10)
})