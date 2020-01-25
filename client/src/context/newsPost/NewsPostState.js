import React, { useReducer } from 'react';
import NewsPostReducer from './newsPostReducer';
import NewsPostContext from './newsPostContext'

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

  return (
    <NewsPostContext.Provider
      value={{
        newsPosts: state.newsPosts,
        newsPost: state.newsPost,
        loading: state.loading
      }}
    >
      {props.children}
    </NewsPostContext.Provider>
  );
};

export default NewsPostState;
