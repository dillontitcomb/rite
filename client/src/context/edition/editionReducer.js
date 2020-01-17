import { ADD_EDITION_SUCCESS, ADD_EDITION_FAILURE, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_EDITION_SUCCESS:
      return { ...state, loading: true };
    case ADD_EDITION_FAILURE:
      return { ...state, loading: true };
    case SET_LOADING:
      return { ...state, loading: true };
  }
};
