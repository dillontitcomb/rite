import React, { useContext, useEffect } from 'react';
import NewsPostContext from '../../context/newsPost/newsPostContext';
import NewsPostItem from './NewsPostItem';

const News = () => {
  const newsPostContext = useContext(NewsPostContext);
  const { getNewsPosts, newsPosts } = newsPostContext;

  useEffect(() => {
    getNewsPosts();
    // eslint-disable-next-line
  }, []);

  console.log(newsPostContext);

  return (
    <div className="container">
      {newsPosts.map((newsPost, key) => (
        <NewsPostItem newsPost={newsPost} key={key}></NewsPostItem>
      ))}
    </div>
  );
};

export default News;
