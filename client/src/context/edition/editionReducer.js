import {
  ADD_EDITION_FAILURE,
  ADD_EDITION_SUCCESS,
  GET_EDITIONS_FAILURE,
  GET_EDITIONS_SUCCESS,
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
    case SET_LOADING:
      return { ...state, loading: true };
  }
};
