import axios from 'axios';
import React, { useReducer } from 'react';
import {
  ADD_ARTIST_FAILURE,
  ADD_ARTIST_SUCCESS,
  DELETE_ARTIST_FAILURE,
  DELETE_ARTIST_SUCCESS,
  GET_ARTISTS_FAILURE,
  GET_ARTISTS_SUCCESS,
  GET_ARTIST_FAILURE,
  GET_ARTIST_SUCCESS,
  UPDATE_ARTIST_FAILURE,
  UPDATE_ARTIST_SUCCESS,
} from '../types';
import ArtistContext from './artistContext';
import ArtistReducer from './artistReducer';

const ArtistState = (props) => {
  const initialState = {
    artists: [],
    artist: {},
    loading: true,
  };

  const [state, dispatch] = useReducer(ArtistReducer, initialState);

  // Get All Artists
  const getArtists = async () => {
    try {
      const res = await axios.get('/api/artists');
      const payload = res.data.artists;
      dispatch({ type: GET_ARTISTS_SUCCESS, payload: payload });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_ARTISTS_FAILURE });
    }
  };

  // Get Artist by ID
  const getArtist = async (id) => {
    const getArtistsRoute = `/api/artists/${id}`;
    try {
      const res = await axios.get(getArtistsRoute);
      const payload = res.data.artist;
      dispatch({ type: GET_ARTIST_SUCCESS, payload: payload });
    } catch (err) {
      console.log(err);
      dispatch({ type: GET_ARTIST_FAILURE });
    }
  };

  // Add New Artist
  const addArtist = async (artist) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axios.post('/api/artists', artist, config);
      dispatch({ type: ADD_ARTIST_SUCCESS });
    } catch (err) {
      console.log('There was an error adding an artist', err);
      dispatch({ type: ADD_ARTIST_FAILURE });
    }
  };

  // Update Artist
  const updateArtist = async (artist) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axios.put(`/api/artists/${artist.id}`, artist, config);
      const res = await axios.get('/api/artists');
      const payload = res.data.artists;
      dispatch({ type: UPDATE_ARTIST_SUCCESS, payload: payload });
    } catch (err) {
      console.log('There was an error updating an artist');
      dispatch({ type: UPDATE_ARTIST_FAILURE });
    }
  };

  // Delete Artist
  const deleteArtist = async (id) => {
    try {
      await axios.delete(`/api/artists/${id}`);
      const res = await axios.get('/api/artists');
      const payload = res.data.artists;
      dispatch({ type: DELETE_ARTIST_SUCCESS, payload: payload });
    } catch (err) {
      console.log('There was an error deleting an artist');
      dispatch({ type: DELETE_ARTIST_FAILURE });
    }
  };

  return (
    <ArtistContext.Provider
      value={{
        artists: state.artists,
        artist: state.artist,
        loading: state.loading,
        getArtists,
        getArtist,
        addArtist,
        deleteArtist,
        updateArtist,
      }}
    >
      {props.children}
    </ArtistContext.Provider>
  );
};

export default ArtistState;
