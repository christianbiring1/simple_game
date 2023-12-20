import React from 'react';

function Dice(props) {
  return (
    <div className='dice-face'>
      <h2 className='die-num'>{props.value}</h2>
    </div>
  );
}

export default Dice;