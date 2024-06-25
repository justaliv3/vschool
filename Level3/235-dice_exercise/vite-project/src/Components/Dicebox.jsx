import React from 'react';
import {useState} from 'react'


function DiceBox() {
    const [count, setCount] = useState([null, null, null, null, null]);
  
    function rollDice() {
      const numbers = [...count]; // Make a copy of the existing array
      for (let i = 0; i < 5; i++) {
        numbers[i] = Math.floor(Math.random() * 6) + 1; // Generate random numbers
      }
      setCount(numbers); // Update the state with the new array
    }
  
    return (
      <div>
        <h2>Dice Box</h2>
        <div>
          {count.map((number, index) => (
            <span key={index}>{number}</span>
          ))}
        </div>
        <button onClick={rollDice}>Roll Dice</button>
      </div>
    );
  }
  
  export default DiceBox;