import {
  ADD_EDITION_FAILURE,
  ADD_EDITION_SUCCESS,
  GET_ARTISTS_FAILURE,
  GET_ARTISTS_SUCCESS,
  GET_EDITIONS_BY_ARTIST_FAILURE,
  GET_EDITIONS_BY_ARTIST_SUCCESS,
  GET_EDITIONS_FAILURE,
  GET_EDITIONS_SUCCESS,
  GET_EDITION_FAILURE,
  GET_EDITION_SUCCESS,
  SET_LOADING
} from '../types';

export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_EDITION_SUCCESS:
      return { ...state, loading: false };
    case ADD_EDITION_FAILURE:
      return { ...state, loading: false };
    case GET_EDITIONS_SUCCESS:
      return { ...state, editions: action.payload, loading: false };
    case GET_EDITIONS_FAILURE:
      return { ...state, editions: [], loading: false };
    case GET_EDITION_SUCCESS:
      return { ...state, edition: action.payload, loading: false };
    case GET_EDITION_FAILURE:
      return { ...state, loading: false };
    case GET_ARTISTS_SUCCESS:
      return { ...state, artists: action.payload, loading: false };
    case GET_ARTISTS_FAILURE:
      return { ...state, artists: [], loading: false };
    case GET_EDITIONS_BY_ARTIST_SUCCESS:
      return { ...state, artists: action.payload, loading: false };
    case GET_EDITIONS_BY_ARTIST_FAILURE:
      return { ...state, artists: [], loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
  }
};
