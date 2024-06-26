import React, { useState } from 'react';
import axios from 'axios';
import { useMovies } from './MovieContext';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const { addMovie } = useMovies();

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=6241d8c1&t=${query}`);
      if (response.data.Response === "True") {
        addMovie({
          id: response.data.imdbID,
          title: response.data.Title,
          year: response.data.Year,
          plot: response.data.Plot,
          rating: 0, // Initialize rating to 0
        });
        setError('');
      } else {
        setError(response.data.Error);
      }
    } catch (err) {
      setError('Error fetching data');
    }
  };

  return (
    <div>
      <form onSubmit={searchMovie}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default MovieSearch;
