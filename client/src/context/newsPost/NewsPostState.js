import axios from 'axios';
import React, { useReducer } from 'react';
import {
  GET_NEWSPOSTS_FAILURE,
  GET_NEWSPOSTS_SUCCESS,
  GET_NEWSPOST_FAILURE,
  GET_NEWSPOST_SUCCESS
} from '../types';
import NewsPostContext from './newsPostContext';
import NewsPostReducer from './newsPostReducer';

const NewsPostState = (props) => {
  const initialState = {
    newsPosts: [],
    newsPost: {
      title: '',
      description: '',
      filePath: ''
    },
    loading: true
  };

  const [state, dispatch] = useReducer(NewsPostReducer, initialState);

  const getNewsPost = async (id) => {
    const newsPostRoute = `/api/newsPosts/${id}`;
    try {
      const res = await axios.get(newsPostRoute);
      const payload = res.data.newsPost;
      dispatch({ type: GET_NEWSPOST_SUCCESS, payload: payload });
    } catch (err) {
      console.log('There was an error getting the news post: ', err);
      dispatch({ type: GET_NEWSPOST_FAILURE });
    }
  };

  const getNewsPosts = async () => {
    try {
      const res = await axios.get('/api/newsPosts');
      const payload = res.data.newsPosts;
      dispatch({ type: GET_NEWSPOSTS_SUCCESS, payload: payload });
    } catch (err) {
      console.log(
        'There was an error getting the collection of news posts: ',
        err
      );
      dispatch({ type: GET_NEWSPOSTS_FAILURE });
    }
  };

  return (
    <NewsPostContext.Provider
      value={{
        newsPosts: state.newsPosts,
        newsPost: state.newsPost,
        loading: state.loading,
        getNewsPosts,
        getNewsPost
      }}
    >
      {props.children}
    </NewsPostContext.Provider>
  );
};

export default NewsPostState;
