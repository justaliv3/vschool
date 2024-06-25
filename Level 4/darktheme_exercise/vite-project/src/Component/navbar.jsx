import React from 'react';
import { useTheme } from './themecontext';

const Navbar = () => {
  const { toggleTheme } = useTheme();

  return (
    <nav>
      <h1>Home</h1>
      <h1>My App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Contact</h1>
    </nav>
  );
};

export default Navbar;
