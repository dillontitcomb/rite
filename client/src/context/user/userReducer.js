import { SET_LOADING, REGISTER_SUCCESS, REGISTER_FAILURE } from '../types';

export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case SET_LOADING:
      return { ...state, loading: true };
  }
};
