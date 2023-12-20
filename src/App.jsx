import { useState } from 'react';
import Dice from './components/dice';

import './App.css'

function App() {

  const generateNumber = () => {
    const arrNumber = [];
    for(let i = 0; i < 10; i += 1) {
      const num = Math.floor(Math.random() * 6)
      arrNumber.push(num);
    }
    console.log(arrNumber);
    return arrNumber;
  }

  generateNumber()

  return (
    <main>
      <div className='dice-container'>
        <Dice value={1} />
        <Dice value={2} />
        <Dice value={3} />
        <Dice value={4} />
        <Dice value={5} />
        <Dice value={6} />
        <Dice value={7} />
        <Dice value={8} />
        <Dice value={1} />
        <Dice value={1} />
      </div>
    </main>
  )
}

export default App
