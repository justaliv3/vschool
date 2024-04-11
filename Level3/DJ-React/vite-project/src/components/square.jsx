import React from 'react';

function Square({ color, onClick }) {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: color,
        border: '1px solid black',
      }}
      onClick={onClick}
    ></div>
  );
}

export default Square;
