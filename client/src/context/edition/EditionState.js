import axios from 'axios';
import React, { useReducer } from 'react';
import {
  ADD_EDITION_FAILURE,
  ADD_EDITION_SUCCESS,
  GET_EDITIONS_FAILURE,
  GET_EDITIONS_SUCCESS,
  GET_EDITION_FAILURE,
  GET_EDITION_SUCCESS,
} from '../types';
import EditionContext from './editionContext';
import EditionReducer from './editionReducer';

const EditionState = (props) => {
  const initialState = {
    editions: [],
    edition: {
      editionArtists: [],
      newsPosts: [],
      title: '',
      year: '',
      description: '',
      filePaths: [],
      price: -1,
      available: false,
    },
    loading: true,
  };

  const [state, dispatch] = useReducer(EditionReducer, initialState);

  // Get All Editions
  const getEditions = async () => {
    try {
      const res = await axios.get('/api/editions');
      const payload = res.data.editions.reverse();
      dispatch({ type: GET_EDITIONS_SUCCESS, payload: payload });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_EDITIONS_FAILURE });
    }
  };

  // Get All Editions and their associated Artists data
  const getEditionsWithArtistData = async () => {
    try {
      const res = await axios.get('/api/editions');
      let editions = res.data.editions;

      // For each edition, get artist data for each associated artist
      const addArtistsData = async (editions) => {
        for (let edition of editions) {
          for (let i = 0; i < edition.editionArtists.length; i++) {
            let artistRes = await axios.get(
              `/api/artists/${edition.editionArtists[i]}`
            );
            let artistData = artistRes.data.artist;
            edition.editionArtists[i] = artistData;
          }
        }
      };
      await addArtistsData(editions);
      let payload = editions.reverse();
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

  // Get One Edition by ID with Artist Data
  const getEditionWithArtistData = async (id) => {
    const getEditionsRoute = `/api/editions/${id}`;
    try {
      const res = await axios.get(getEditionsRoute);
      let edition = res.data.edition;
      for (let i = 0; i < edition.editionArtists.length; i++) {
        let artistRes = await axios.get(
          `/api/artists/${edition.editionArtists[i]}`
        );
        let artistData = artistRes.data.artist;
        edition.editionArtists[i] = artistData;
      }
      const payload = edition;
      dispatch({ type: GET_EDITION_SUCCESS, payload: payload });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_EDITION_FAILURE });
    }
  };

  // Add New Edition
  const addEdition = async (edition) => {
    const {
      editionArtists,
      newsPosts,
      title,
      year,
      description,
      files,
      price,
      available,
    } = edition;
    const formData = new FormData();
    for (const file of files) {
      formData.append('fileGroup', file, file.name.replace(' ', ''));
    }
    formData.append('title', title);

    const uploadConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const editionConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      console.log('Form Data being sent to /api/upload: ', formData);
      // Upload images and get their filepaths back
      const res = await axios.post('/api/upload', formData, uploadConfig);
      console.log('Response from /api/upload: ', res);
      const { filePaths } = res.data;
      console.log('Flepaths returned by /api/upload:', filePaths);
      // Upload remaining edition data with filepaths
      const editionData = {
        editionArtists,
        newsPosts,
        title,
        year,
        description,
        filePaths,
        price,
        available,
      };
      console.log('Data being sent to /api/editions: ', editionData);
      const editionRes = await axios.post(
        '/api/editions',
        editionData,
        editionConfig
      );
      console.log('Response from /api/editions: ', editionRes);

      dispatch({
        type: ADD_EDITION_SUCCESS,
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
        getEditionsWithArtistData,
        getEditionWithArtistData,
        addEdition,
        getEditions,
        getEdition,
      }}
    >
      {props.children}
    </EditionContext.Provider>
  );
};

export default EditionState;
