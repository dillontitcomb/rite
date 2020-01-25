import { GET_NEWSPOST_FAILURE, GET_NEWSPOST_SUCCESS } from '../types';

export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case GET_NEWSPOST_SUCCESS:
      return { ...state, newsPost: action.payload, loading: false };
    case GET_NEWSPOST_FAILURE:
      return { ...state, loading: false };
  }
};
