import React, { useContext } from 'react';
import NewsPostContext from '../../context/newsPost/newsPostContext';

const News = () => {
  const newsPostContext = useContext(NewsPostContext);

  console.log(newsPostContext);

  return (
    <div className="container">
      <p className="x-large my-2">News Component!</p>
    </div>
  );
};

export default News;
