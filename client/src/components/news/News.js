import React, { useContext } from 'react';
import NewsPostContext from '../../context/newsPost/newsPostContext';
import NewsPostItem from './NewsPostItem';

const News = () => {
  const newsPostContext = useContext(NewsPostContext);

  const newsPost = {
    title: 'Hellow',
    description: 'Description',
    filePath: '/img/fb-logo.jpg'
  };
  console.log(newsPostContext);

  return (
    <div className="container">
      <NewsPostItem newsPost={newsPost}></NewsPostItem>
    </div>
  );
};

export default News;
