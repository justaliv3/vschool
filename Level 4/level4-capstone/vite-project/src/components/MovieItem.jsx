import React, { useState } from 'react';
import EditMovie from './EditMovie';
import Rating from './Rating';
import { useMovies } from './MovieContext';

function MovieItem({ movie }) {
  const [isEditing, setIsEditing] = useState(false);
  const { updateMovie, deleteMovie } = useMovies();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (updatedMovie) => {
    updateMovie(updatedMovie);
    setIsEditing(false);
  };

  const handleRatingChange = (newRating) => {
    updateMovie({ ...movie, rating: newRating });
  };

  return (
    <div>
      {isEditing ? (
        <EditMovie movie={movie} handleUpdate={handleUpdate} />
      ) : (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <p>{movie.plot}</p>
          <Rating rating={movie.rating} onChange={handleRatingChange} />
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteMovie(movie.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default MovieItem;

