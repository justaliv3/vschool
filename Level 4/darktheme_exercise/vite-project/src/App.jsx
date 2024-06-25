
import React from 'react';
import { ThemeProvider } from './Component/themecontext';
import Navbar from './Component/navbar';
import Main from './Component/main';
import Footer from './Component/footer';
import './index.css';

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
