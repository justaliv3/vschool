import React, { createContext, useReducer, useContext, useEffect } from 'react';
import axios from 'axios';

const UglyThingsContext = createContext();

const initialState = {
  uglyThings: [],
  loading: true,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        uglyThings: action.payload,
        loading: false
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case 'ADD_UGLY_THING':
      return {
        ...state,
        uglyThings: [...state.uglyThings, action.payload]
      };
    case 'DELETE_UGLY_THING':
      return {
        ...state,
        uglyThings: state.uglyThings.filter(thing => thing._id !== action.payload)
      };
    case 'EDIT_UGLY_THING':
      return {
        ...state,
        uglyThings: state.uglyThings.map(thing => thing._id === action.payload._id ? action.payload : thing)
      };
    default:
      return state;
  }
};

export const UglyThingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('https://api.vschool.io/justinbrown/thing')
      .then(response => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR', payload: error });
      });
  }, []);

  const addUglyThing = (thing) => {
    axios.post('https://api.vschool.io/justinbrown/thing', { ...thing, sessionId: 'your-session-id' })
      .then(response => {
        dispatch({ type: 'ADD_UGLY_THING', payload: response.data });
      });
  };

  const deleteUglyThing = (id) => {
    axios.delete(`https://api.vschool.io/justinbrown/thing/${id}`)
      .then(() => {
        dispatch({ type: 'DELETE_UGLY_THING', payload: id });
      });
  };

  const editUglyThing = (id, updates) => {
    axios.put(`https://api.vschool.io/justinbrown/thing/${id}`, { ...updates, sessionId: 'your-session-id' })
      .then(response => {
        dispatch({ type: 'EDIT_UGLY_THING', payload: response.data });
      });
  };

  return (
    <UglyThingsContext.Provider value={{ state, addUglyThing, deleteUglyThing, editUglyThing }}>
      {children}
    </UglyThingsContext.Provider>
  );
};

export const useUglyThings = () => useContext(UglyThingsContext);
