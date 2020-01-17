import React, { useReducer } from 'react';
import EditionContext from './editionContext';
import EditionReducer from './editionReducer';
import { ADD_EDITION_SUCCESS } from '../types';

const EditionState = (props) => {
  const initialState = {
    editions: [],
    edition: {},
    loading: false
  };

  const [state, dispatch] = useReducer(EditionReducer, initialState);

  const addEdition = (edition) => {
    // Create POST request to /editions, which returns ID
    console.log(edition);
    // Create 2nd POST request to /upload
    dispatch({type: ADD_EDITION_SUCCESS})
    // On completion of both, dispatch ADD_EDITION_SUCCESS
  };

  return (
    <EditionContext.Provider
      value={{
        editions: state.editions,
        edition: state.edition,
        loading: state.loading,
        addEdition
      }}
    >
      {props.children}
    </EditionContext.Provider>
  );
};

export default EditionState;
