import { SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case SET_LOADING:
      return { ...state, loading: true };
  }
};
