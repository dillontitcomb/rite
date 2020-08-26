import axios from 'axios';
import React, { useReducer } from 'react';
import {
  ADD_EDITION_FAILURE,
  ADD_EDITION_SUCCESS,
  GET_EDITIONS_FAILURE,
  GET_EDITIONS_SUCCESS,
  GET_EDITION_FAILURE,
  GET_EDITION_SUCCESS,
  UPDATE_EDITION_FAILURE,
  UPDATE_EDITION_SUCCESS,
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
      dispatch({
        type: GET_EDITIONS_SUCCESS,
        payload: payload,
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_EDITIONS_FAILURE });
    }
  };

  // Get All Editions and their associated Artists data
  // const getEditionsWithArtistData = async () => {
  //   try {
  //     const res = await axios.get('/api/editions');
  //     let editions = res.data.editions;

  //     // For each edition, get artist data for each associated artist
  //     const addArtistsData = async (editions) => {
  //       for (let edition of editions) {
  //         for (let i = 0; i < edition.editionArtists.length; i++) {
  //           let artistRes = await axios.get(
  //             `/api/artists/${edition.editionArtists[i]}`
  //           );
  //           let artistData = artistRes.data.artist;
  //           edition.editionArtists[i] = artistData;
  //         }
  //       }
  //     };
  //     await addArtistsData(editions);
  //     let payload = editions.reverse();
  //     dispatch({
  //       type: GET_EDITIONS_SUCCESS,
  //       payload: payload,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     dispatch({ type: GET_EDITIONS_FAILURE });
  //   }
  // };

  // Get all editions with associated artist data
  const getEditionsWithArtistData = async () => {
    try {
      // Get all editions
      const editionsRes = await axios.get('/api/editions');
      let { editions } = editionsRes.data;
      // Get all artists
      const artistsRes = await axios.get('/api/artists');
      let { artists } = artistsRes.data;
      let artistIds = artists.map((artist) => artist._id);
      // Match them up
      const editionsWithArtists = editions.map((edition) => {
        let artistsWithData = edition.editionArtists.map((artistId) => {
          let artistIdIndex = artistIds.indexOf(artistId);
          return artists[artistIdIndex];
        });
        edition.editionArtists = artistsWithData;
        return edition;
      });
      let payload = editionsWithArtists.reverse();
      dispatch({
        type: GET_EDITIONS_SUCCESS,
        payload: payload,
      });
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
      dispatch({
        type: GET_EDITION_SUCCESS,
        payload: payload,
      });
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
      dispatch({
        type: GET_EDITION_SUCCESS,
        payload: payload,
      });
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
      console.log('Filepaths returned by /api/upload:', filePaths);
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

  // Update existing Edition, replacing images if new images are available
  const updateEdition = async (edition) => {
    console.log('Trying to update edition without losing images!');
    console.log(edition);
    const {
      editionArtists,
      newsPosts,
      title,
      year,
      description,
      files,
      price,
      available,
      imgFilePaths,
      _id,
    } = edition;

    const formData = new FormData();

    if (files.length > 0) {
      console.log('Files found!');
      for (const file of files) {
        formData.append('fileGroup', file, file.name.replace(' ', ''));
      }
      formData.append('title', title);
    }

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
      let filePaths = imgFilePaths || [];
      if (files.length > 0) {
        const res = await axios.post('/api/upload', formData, uploadConfig);
        filePaths = filePaths.concat(res.data.filePaths);
      }
      const editionData = {
        editionArtists,
        newsPosts,
        title,
        year,
        description,
        filePaths,
        price,
        available,
        _id,
      };
      console.log('Data being sent to /api/editions: ', editionData);
      const editionRes = await axios.put(
        `/api/editions/${editionData._id}`,
        editionData,
        editionConfig
      );
      console.log('Response from /api/editions: ', editionRes);

      dispatch({
        type: UPDATE_EDITION_SUCCESS,
      });
    } catch (err) {
      console.log('Uh oh! Error found: ', err);
      dispatch({ type: UPDATE_EDITION_FAILURE });
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
        updateEdition,
      }}
    >
      {props.children}
    </EditionContext.Provider>
  );
};

export default EditionState;
