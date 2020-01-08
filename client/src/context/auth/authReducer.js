import { REGISTER_FAILURE, REGISTER_SUCCESS } from '../types';

export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAILURE:
      localStorage.removeItem('token');
      return { ...state, token: null, isAuthenticated: false, loading: false };
  }
};
