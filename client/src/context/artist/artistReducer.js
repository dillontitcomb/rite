import {
  ADD_ARTIST_FAILURE,
  ADD_ARTIST_SUCCESS,
  DELETE_ARTIST_FAILURE,
  DELETE_ARTIST_SUCCESS,
  GET_ARTISTS_BY_IDS_FAILURE,
  GET_ARTISTS_BY_IDS_SUCCESS,
  GET_ARTISTS_FAILURE,
  GET_ARTISTS_SUCCESS,
  GET_ARTIST_FAILURE,
  GET_ARTIST_SUCCESS,
  UPDATE_ARTIST_FAILURE,
  UPDATE_ARTIST_SUCCESS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ARTISTS_SUCCESS:
      return { ...state, artists: action.payload, loading: false };
    case GET_ARTISTS_FAILURE:
      return { ...state, artists: [], loading: false };
    case GET_ARTIST_SUCCESS:
      return { ...state, artist: action.payload, loading: false };
    case GET_ARTIST_FAILURE:
      return { ...state, artist: {}, loading: false };
    case GET_ARTISTS_BY_IDS_SUCCESS:
      return { ...state, artists: action.payload, loading: false };
    case GET_ARTISTS_BY_IDS_FAILURE:
      return { ...state, artists: [], loading: false };
    case ADD_ARTIST_SUCCESS:
      return { ...state, loading: false };
    case ADD_ARTIST_FAILURE:
      return { ...state, loading: false };
    case DELETE_ARTIST_SUCCESS:
      return { ...state, artists: action.payload, loading: false };
    case DELETE_ARTIST_FAILURE:
      return { ...state, loading: false };
    case UPDATE_ARTIST_SUCCESS:
      return { ...state, artists: action.payload, loading: false };
    case UPDATE_ARTIST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
