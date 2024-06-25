import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar'
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
