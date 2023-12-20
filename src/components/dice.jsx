import React from 'react';

function Dice(props) {
  const { value, isHeld, id, handleHold } = props;
  const styles = {
    backgroundColor: isHeld ? "#59e391" : "white",
  };

  return (
    <div
      style={styles}
      className='dice-face'
      onClick={() => handleHold(id)}
    >
      <h2 className='die-num' >{value}</h2>
    </div>
  );
}

export default Dice;