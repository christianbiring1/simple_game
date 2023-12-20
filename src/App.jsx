import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

import Dice from './components/dice';

import './App.css'

function App() {

  const [dice, setDice] = useState(generateNumber());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log('You won')
    }
  }, [dice]);

  function generateNewDie() {
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
    } else {
      setTenzies(false);
      setDice(generateNumber());
    }
  }

  return (
    <main>
      {tenzies && <Confetti/>}
      <h1 className='title'>Dice Game</h1>
      <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
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
