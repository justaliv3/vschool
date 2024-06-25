import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import About from './Pages/About';
import History from './Pages/History';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const updateMovie = (updatedMovie) => {
    setMovies(movies.map(movie => (movie.id === updatedMovie.id ? updatedMovie : movie)));
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <h1>Movie Search and List</h1>
            <MovieSearch addMovie={addMovie} />
            <MovieList movies={movies} updateMovie={updateMovie} deleteMovie={deleteMovie} />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
