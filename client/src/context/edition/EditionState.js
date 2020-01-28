import axios from 'axios';
import React, { useReducer } from 'react';
import {
  ADD_EDITION_FAILURE,
  ADD_EDITION_SUCCESS,
  GET_EDITIONS_FAILURE,
  GET_EDITIONS_SUCCESS,
  GET_EDITION_FAILURE,
  GET_EDITION_SUCCESS
} from '../types';
import EditionContext from './editionContext';
import EditionReducer from './editionReducer';

const EditionState = (props) => {
  const initialState = {
    editions: [],
    edition: {
      artist: '',
      title: '',
      year: '',
      description: '',
      filePaths: []
    },
    loading: true
  };

  const [state, dispatch] = useReducer(EditionReducer, initialState);

  // Get All Editions
  const getEditions = async () => {
    try {
      const res = await axios.get('/api/editions');
      const payload = res.data.editions;
      dispatch({ type: GET_EDITIONS_SUCCESS, payload: payload });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_EDITIONS_FAILURE });
    }
  };

  // Get One Edition by ID
  const getEdition = async (id) => {
    const getEditionsRoute = `/api/editions/${id}`;
    try {
      const res = await axios.get(getEditionsRoute);
      const payload = res.data.edition;
      dispatch({ type: GET_EDITION_SUCCESS, payload: payload });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_EDITION_FAILURE });
    }
  };

  // Add New Edition
  const addEdition = async (edition) => {
    const { artist, title, year, description, files } = edition;
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
      console.log('Form Data being sent to /api/upload: ', formData);
      // Upload images and get their filepaths back
      const res = await axios.post('/api/upload', formData, uploadConfig);
      console.log('Response from /api/upload: ', res);
      const { filePaths } = res.data;
      console.log('Flepaths returned by /api/upload:', filePaths);
      // Upload remaining edition data with filepaths
      const editionData = { filePaths, title, artist, year, description };
      console.log('Data being sent to /api/editions: ', editionData);
      const editionRes = await axios.post(
        '/api/editions',
        editionData,
        editionConfig
      );
      console.log('Response from /api/editions: ', editionRes);

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
        addEdition,
        getEditions,
        getEdition
      }}
    >
      {props.children}
    </EditionContext.Provider>
  );
};

export default EditionState;
