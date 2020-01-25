import {
  ADD_NEWSPOST_FAILURE,
  ADD_NEWSPOST_SUCCESS,
  GET_NEWSPOSTS_FAILURE,
  GET_NEWSPOSTS_SUCCESS,
  GET_NEWSPOST_FAILURE,
  GET_NEWSPOST_SUCCESS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case GET_NEWSPOSTS_SUCCESS:
      return { ...state, newsPosts: action.payload, loading: false };
    case GET_NEWSPOSTS_FAILURE:
      return { ...state, loading: false };
    case GET_NEWSPOST_SUCCESS:
      return { ...state, newsPost: action.payload, loading: false };
    case GET_NEWSPOST_FAILURE:
      return { ...state, loading: false };
    case ADD_NEWSPOST_SUCCESS:
      return { ...state, loading: false };
    case ADD_NEWSPOST_FAILURE:
      return { ...state, loading: false };
  }
};
