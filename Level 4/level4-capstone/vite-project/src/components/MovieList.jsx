import React from 'react';
import MovieItem from './MovieItem';

function MovieList({ movies, updateMovie, deleteMovie }) {
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
