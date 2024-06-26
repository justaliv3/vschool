import React from 'react';
import MovieItem from './MovieItem';
import { useMovies } from './MovieContext';

function MovieList() {
  const { movies, updateMovie, deleteMovie } = useMovies();

  return (
    <div>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          updateMovie={updateMovie}
          deleteMovie={deleteMovie}
        />
      ))}
    </div>
  );
}

export default MovieList;
