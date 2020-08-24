import axios from 'axios';
import React, { useReducer } from 'react';
import {
  ADD_NEWSPOST_FAILURE,
  ADD_NEWSPOST_SUCCESS,
  GET_NEWSPOSTS_FAILURE,
  GET_NEWSPOSTS_SUCCESS,
  GET_NEWSPOST_FAILURE,
  GET_NEWSPOST_SUCCESS,
} from '../types';
import NewsPostContext from './newsPostContext';
import NewsPostReducer from './newsPostReducer';

const NewsPostState = (props) => {
  const initialState = {
    newsPosts: [],
    newsPost: {
      title: '',
      description: '',
      filePath: '',
    },
    loading: true,
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
      const payload = res.data.newsPosts.reverse();
      dispatch({ type: GET_NEWSPOSTS_SUCCESS, payload: payload });
    } catch (err) {
      console.log(
        'There was an error getting the collection of news posts: ',
        err
      );
      dispatch({ type: GET_NEWSPOSTS_FAILURE });
    }
  };

  const addNewsPost = async (newsPost) => {
    const { title, description, files } = newsPost;
    const imageFile = files[0];
    const formData = new FormData();
    formData.append('fileGroup', imageFile, imageFile.name.replace(' ', ''));
    formData.append('title', title);

    const uploadConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const addNewsPostConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/upload', formData, uploadConfig);
      const filePath = res.data.filePaths[0];

      const newsPostData = {
        title,
        description,
        filePath,
      };

      await axios.post('./api/newsPosts', newsPostData, addNewsPostConfig);
      dispatch({ type: ADD_NEWSPOST_SUCCESS });
    } catch (err) {
      console.log('There was an error adding a news post.', err);
      dispatch({ type: ADD_NEWSPOST_FAILURE });
    }
  };

  return (
    <NewsPostContext.Provider
      value={{
        newsPosts: state.newsPosts,
        newsPost: state.newsPost,
        loading: state.loading,
        getNewsPosts,
        getNewsPost,
        addNewsPost,
      }}
    >
      {props.children}
    </NewsPostContext.Provider>
  );
};

export default NewsPostState;
