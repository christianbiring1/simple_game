import React from 'react';

function Dice(props) {
  const { value, isHeld } = props;
  return (
    <div style={{backgroundColor: isHeld ? "#59e391 " : "white"}} className='dice-face'>
      <h2 className='die-num' >{value}</h2>
    </div>
  );
}

export default Dice;