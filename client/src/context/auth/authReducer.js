import {
  AUTH_ERROR,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  USER_LOADED
} from '../types';

export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };

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

    case AUTH_ERROR:
      localStorage.removeItem('token');
      return { ...state, token: null, isAuthenticated: false, loading: false };
  }
};
