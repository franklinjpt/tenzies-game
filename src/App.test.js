import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App'

test("initial state of the app", () => {
  render(<App />)
  const countElement = screen.getByTestId('score-count');
  expect(countElement).toHaveTextContent('0');
  expect(screen.getByText('Tenzies')).toBeInTheDocument()
  expect(screen.getByText('Your Score:')).toBeInTheDocument()
  expect(screen.getByRole('button', {name: /Roll/i})).toBeInTheDocument()
  expect(screen.queryByText('You Win!')).not.toBeInTheDocument()
})

test('should toggle hold state of a die when clicked', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.3);

  render(<App />);
  const dice = screen.getAllByTestId('die');
  const firstDie = dice[0];

  expect(firstDie).toHaveClass('die');
  expect(firstDie).not.toHaveClass('die-held');

  fireEvent.click(firstDie);
  expect(firstDie).toHaveClass('die-held');

  fireEvent.click(firstDie);
  expect(firstDie).toHaveClass('die');
  expect(firstDie).not.toHaveClass('die-held');
  });

test('local storage score behavior', () => {

  const setItemMock = jest.fn();
  const getItemMock = jest.fn().mockReturnValueOnce(JSON.stringify([2, 4, 6, 8, 10]));
  global.localStorage.__proto__.setItem = setItemMock;
  global.localStorage.__proto__.getItem = getItemMock;

  render(<App />);
  expect(getItemMock).toHaveBeenCalledWith('score');
});

test('the game is over', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.3);

  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /Roll/i }));

  const dice = screen.getAllByTestId('die');
  const firstDieValue = dice[0].innerHTML;
  const allTheSame = dice.every(die => die.innerHTML === firstDieValue);

  dice.forEach(die => fireEvent.click(die));
  const allHeld = dice.every(die => die.classList.contains('die-held'));

  expect(allTheSame).toBe(true);
  expect(allHeld).toBe(true);
})

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  })
