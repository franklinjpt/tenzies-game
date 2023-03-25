# Tenzies Game

Tenzies Game is a simple and entertaining game built using modern web development tools such as JavaScript, Vite, React, React Hooks, Jest, and Testing Library. The goal of the game is to roll the dice and get all the same numbers while holding the dice you want to keep. The game keeps track of your scores and stores your top 5 scores in local storage.

## Technologies Used

- JavaScript: The primary programming language for the project
- Vite: A build tool and development server that offers fast development and efficient build times
- React: A popular JavaScript library for building user interfaces
- React Hooks: Allows the use of state and other React features in functional components
- Jest: A JavaScript testing framework for writing and running tests
- Testing Library: A suite of testing utilities for working with React components

## Features

- Roll up to 10 dice at once
- Hold dice that you want to keep
- Game over when all dice have the same number and are held
- Display win message on game completion
- Store top 5 scores in local storage

## Screenshots

[![screen-tenzies.png](https://i.postimg.cc/cCqcLBKP/screen-tenzies.png)](https://postimg.cc/sQcWnS4J)
[![screen-tenzies2.png](https://i.postimg.cc/CMDN6XX0/screen-tenzies2.png)](https://postimg.cc/6TWn8jBb)
[![screen-tenzies3.png](https://i.postimg.cc/rsSN0Rxs/screen-tenzies3.png)](https://postimg.cc/fSR91LHQ)

## Installation

To get started with the app, follow these steps:

1. Clone the repository and change directory:

```sh
git clone https://github.com/your-username/dice-game.git
cd dice-game
```

2. Install the dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm run dev
```

This should open the Dice Game in your default browser.

## Usage

The application contains the following components:

- GameTitle: Displays the title of the game
- Score: Displays the top 5 scores stored in local storage
- DiceContainer: Container for the dice components
- GameTitle: Displays the title of the game
- ScoreCount: Displays the current score count (number of rolls)
- RollButton: A button to roll the dice or start a new game when the game is over
- WinMessage: Displays a message when the game is completed

To play the game:

1. Press the "Roll" button to roll the dice
2. Click on a die to hold its value
3. Continue rolling until all dice have the same number and are held
4. The game is over, and your score (number of rolls) will be saved if it's within the top 5 scores
5. Press the "New Game" button to start a new game

## Testing

To run tests using Jest and Testing Library, execute the following command:

```sh
npm test
```

This will run all tests and display the results in the terminal.

## License

This project is released under the [MIT License](https://opensource.org/licenses/MIT).