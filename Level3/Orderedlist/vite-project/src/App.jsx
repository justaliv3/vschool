import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [names, setNames] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== '') {
      setNames([...names, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{inputValue}</h1>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Enter a name" 
        />
        <button onClick={handleButtonClick}>Add Name</button>
        <ol>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ol>
      </header>
    </div>
  );
}

export default App
