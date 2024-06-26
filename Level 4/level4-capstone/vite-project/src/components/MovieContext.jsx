import React, { createContext, useContext, useReducer } from 'react';

const MovieContext = createContext();

const movieReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [...state, action.payload];
    case 'UPDATE_MOVIE':
      return state.map(movie =>
        movie.id === action.payload.id ? action.payload : movie
      );
    case 'DELETE_MOVIE':
      return state.filter(movie => movie.id !== action.payload);
    default:
      return state;
  }
};

export const MovieProvider = ({ children }) => {
  const [movies, dispatch] = useReducer(movieReducer, []);

  const addMovie = movie => {
    dispatch({ type: 'ADD_MOVIE', payload: movie });
  };

  const updateMovie = updatedMovie => {
    dispatch({ type: 'UPDATE_MOVIE', payload: updatedMovie });
  };

  const deleteMovie = id => {
    dispatch({ type: 'DELETE_MOVIE', payload: id });
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie, updateMovie, deleteMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);
