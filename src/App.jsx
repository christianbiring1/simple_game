import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

import timer from './components/utils/timer';
import Dice from './components/dice';

import './App.css'

function App() {

  const [dice, setDice] = useState(generateNumber());
  const [tenzies, setTenzies] = useState(false);
  // number of rolls!
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      timer.stop();
      setDuration(timer.duration);
      timer.reset();
    }
  }, [dice]);

  function generateNewDie() {
    // let dots = "";
    // for(let j = 1; j < Math.ceil(Math.random() * 6); j += 1) {
    //   dots += ".";
    // }
    return {
      value:  Math.floor(Math.random() * 6),
      isHeld: false,
      id: Math.random()
    }
  }

  function generateNumber(){
    const arrNumber = [];
    for(let i = 0; i < 10; i += 1) {
      arrNumber.push(generateNewDie());
    }
    return arrNumber;
  }


  const holdDice = (id) => {
    // const newDice = [...dice];
    // const index = newDice.findIndex(dice => dice.id === id);
    // const updated = {...newDice[index], isHeld: !newDice[index].isHeld}
    // console.log(updated);

    setDice(prev => prev.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  const RollDice = () => {
    if (!tenzies) {
      setDice(prev => prev.map(die => {
        return die.isHeld ? die : generateNewDie()
      }));
      setCount(prev => prev + 1);

      timer.start();
    } else {
      setTenzies(false);
      setDice(generateNumber());
      setCount(0)
    }
  }

  // TO-DO
  // * CSS: Put real dots on the dice instead of numbers :ok
  // ** Track the number of rolls it tooks to win the game :0k
  // *** Track the time it took to win the game
  // **** Save the best time and/or the lowest number of rolls (try to beat your records)

  return (
    <main>
      {tenzies && <Confetti/>}
      <h1 className='title'>Dice Game</h1>
      <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <span>{count}</span>
      <span>{duration}</span>
      <div className='dice-container'>
        {dice.map(die => (
          <Dice
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            id={die.id}
            handleHold={holdDice}/>
        ))}
      </div>
      <button onClick={RollDice}
        className='roll-dice'
      >
        { tenzies ? "New Game" : "Roll" }
      </button>
    </main>
  )
}

export default App
