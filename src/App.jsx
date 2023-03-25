import React, {useEffect, useState} from 'react'
import Confetti from 'react-confetti'
import Score from './components/Score'
import DiceContainer from './components/DiceContainer'
import GameTitle from './components/GameTitle'
import ScoreCount from './components/ScoreCount'
import RollButton from './components/RollButton'
import WinMessage from './components/WinMessage'

const DICE_FACES = 6;
const QUANTITY_DICES = 10;

function App() {


  const [dice, setDice] = useState(allNewDice)
  const [gameOver, setGameOver] = useState(false)
  const [count, setCount] = useState(0)
  const [score, setScore] = useState(() => {
    const storedScore = localStorage.getItem("score")
    return storedScore ? JSON.parse(storedScore) : []
  })

  useEffect(() => {
    const firstDieValue = dice[0].value
    const isAllHeld = dice.every(die => die.isHeld)
    const allTheSame = dice.every(die => die.value === firstDieValue)
    if(isAllHeld && allTheSame) {
      setGameOver(true)
    }
  }, [dice])

  useEffect(() => {
    if (gameOver) {
      trackingScore();
    }
  }, [gameOver]);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score))
  }, [score])

  function trackingScore() {
    const updateScore = (newScore) => {
      newScore.sort((a, b) => a - b);
      setScore(newScore);
    };

    if (score.length < 5 || score.some(existingScore => count < existingScore)) {
      const oldScore = score.slice(0, score.length < 5 ? score.length : -1);
      updateScore([...oldScore, count]);
    } else if (score.some(existingScore => count === existingScore)) {
      return score;
    }
  }

  function allNewDice() {
    return Array.from({length: QUANTITY_DICES}, () => ({
      value: Math.ceil(Math.random() * DICE_FACES),
      isHeld: false
    }))
  }

  function rollDice() {
    setCount(count + 1)
    setDice(dice.map(die => (
      die.isHeld
      ? die
      : {
          ...die,
          value: Math.ceil(Math.random() * DICE_FACES),
        }
    )))
  }

  function holdDice(id) {
    if(gameOver){
      return
    }

    setDice(dice.map((die, index) => {
      if(index === id) {
        return {
          ...die,
          isHeld: !die.isHeld
        }
      }
      return die
    }))
  }

  function newGame() {
    setDice(allNewDice())
    setGameOver(false)
    setCount(0)
  }

  return (
      <div className="container">
        <main>
          {gameOver && <Confetti />}
          <section className="main__section">
            <GameTitle />
          </section>
          <ScoreCount count={count} />
          <DiceContainer dice={dice} holdDice={holdDice}/>
          <RollButton gameOver={gameOver} onClick={gameOver ? newGame : rollDice}/>
          {gameOver && <WinMessage />}
        </main>
        <Score score={score}/>
      </div>
  )
}

export default App
