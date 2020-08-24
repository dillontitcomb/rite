import React, { useContext, useEffect } from 'react';
import NewsPostContext from '../../context/newsPost/newsPostContext';
import './News.css';
import NewsPostItem from './NewsPostItem';

const News = () => {
  const newsPostContext = useContext(NewsPostContext);
  const { getNewsPosts, newsPosts } = newsPostContext;

  useEffect(() => {
    getNewsPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <p className="x-large text-weight-light text-center my-3">NEWS</p>
      <div className="news-post-grid">
        {newsPosts.map((newsPost, key) => (
          <NewsPostItem newsPost={newsPost} key={key}></NewsPostItem>
        ))}
      </div>
    </div>
  );
};

export default News;
