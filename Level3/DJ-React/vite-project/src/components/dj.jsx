import React, {useState} from "react"
import Square from "./square";


function Dj() {
    const [colors, setColors] = useState(["white", "white", "white", "white"]);
  
    // const handleColorChange = (index) => {
    //   const newColors = [...colors];
    //   newColors[index] = newColors[index] === "white" ? "black" : "white";
    //   setColors(newColors);
    // };
  
 const handleSmallTimeDJ = () => {
    const newColors = colors.map((color) => (colors[0] === 'white' ? 'black' : 'white'));
    setColors(newColors);
  };

  const handlePartyDJ = () => {
    const newColors = [...colors];
    newColors[0] = newColors[1] = newColors[2] = newColors[3] = 'purple';
    setColors(newColors);
  };

  const handleProfessionalDJLeft = () => {
    const newColors = [...colors];
    newColors[2] = 'blue';
    setColors(newColors);
  };

  const handleProfessionalDJRight = () => {
    const newColors = [...colors];
    newColors[3] = 'blue';
    setColors(newColors);
  };

  const handleBigTimeDJ = (color) => {
    const newColors = [color, color, color, color];
    setColors(newColors);
  };

  const handleMakeNoise = () => {
    // Logic for playing sounds
    console.log("Making noise...");
  };

  
    return (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            {colors.map((color, index) => (
              <Square key={index} color={color} onClick={() => handleBigTimeDJ(index)} />
            ))}
          </div>
          <div>
            <button onClick={handleSmallTimeDJ}>Small Time DJ</button>
            <button onClick={handlePartyDJ}>Party DJ</button>
            <button onClick={handleProfessionalDJLeft}>Professional DJ (Left)</button>
            <button onClick={handleProfessionalDJRight}>Professional DJ (Right)</button>
            <button onClick={() => handleBigTimeDJ('green')}>Big Time DJ One</button>
            <button onClick={() => handleBigTimeDJ('red')}>Big Time DJ Two</button>
            <button onClick={() => handleBigTimeDJ('teal')}>Big Time DJ Three</button>
            <button onClick={() => handleBigTimeDJ('brown')}>Big Time DJ Four</button>
            <button onClick={handleMakeNoise}>Make Noise</button>
          </div>
        </div>
      );
    }
  
  
  export default Dj;


