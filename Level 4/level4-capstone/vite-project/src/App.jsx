import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import About from './Pages/About';
import History from './Pages/History';
import { MovieProvider } from './components/MovieContext';
import './App.css';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <h1>Movie Search and List</h1>
              <MovieSearch />
              <MovieList />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </MovieProvider>
  );
}

export default App;
