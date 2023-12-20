import { useState } from 'react';
import Dice from './components/dice';

import './App.css'

function App() {

  const [dice, setDice] = useState(generateNumber());

  function generateNumber(){
    const arrNumber = [];
    for(let i = 0; i < 10; i += 1) {
      const num = Math.floor(Math.random() * 6)
      arrNumber.push({
        value: num,
        isHeld: false,
        id: Math.random()
      });
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
    setDice(generateNumber());
  }

  return (
    <main>
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
      <button onClick={RollDice} className='roll-dice'>Roll</button>
    </main>
  )
}

export default App
