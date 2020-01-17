import axios from 'axios';
import React, { useReducer } from 'react';
import { ADD_EDITION_FAILURE, ADD_EDITION_SUCCESS } from '../types';
import EditionContext from './editionContext';
import EditionReducer from './editionReducer';

const EditionState = (props) => {
  const initialState = {
    editions: [],
    edition: {},
    loading: false
  };

  const [state, dispatch] = useReducer(EditionReducer, initialState);

  const addEdition = async (edition) => {
    const { author, title, year, description, files } = edition;

    // Create POST request to /upload, returning filePaths
    const formData = new FormData();
    for (const file of files) {
      formData.append('fileGroup', file);
    }
    formData.append('title', title);

    const uploadConfig = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };

    const editionConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      console.log('Trying POST request to /upload');
      // Upload images and get their filepaths back
      const res = await axios.post('/api/upload', formData, uploadConfig);
      console.log(res);
      const { filePaths } = res.data;
      console.log(filePaths);
      // Upload remaining edition data with filepaths
      const editionData = { filePaths, title, author, year, description };
      const editionRes = await axios.post(
        '/api/editions',
        editionData,
        editionConfig
      );
      console.log(editionRes.data);

      dispatch({
        type: ADD_EDITION_SUCCESS
      });
    } catch (err) {
      console.log('Uh oh! Error found: ', err);
      dispatch({ type: ADD_EDITION_FAILURE });
    }
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
