import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomColorComponent = () => {
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    const fetchRandomColor = async () => {
      try {
        const response = await axios.get('https://random-color.onrender.com/colors/random');
        const randomColor = response.data.hex;
        console.log (response.data.hex)
        setColor(randomColor);
        document.body.style.backgroundColor = randomColor;
      } catch (error) {
        console.error('Error fetching the random color:', error);
      }
    };

    fetchRandomColor();
  }, []);

  return (
    <div style={{ color: color }}>
      <h1>Random Background Color</h1>
      <p>The background color of this page is set to a random color on load.</p>
      {/* <button onClick={fetchRandomColor}>Change Background Color</button> */}
    </div>
  );
};

export default RandomColorComponent;



