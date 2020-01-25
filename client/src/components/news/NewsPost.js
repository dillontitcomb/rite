import React, { useContext, useEffect } from 'react';
import NewsPostContext from '../../context/newsPost/newsPostContext';

const NewsPost = ({ match }) => {
  const newsPostContext = useContext(NewsPostContext);
  const { getNewsPost, newsPost, loading } = newsPostContext;

  useEffect(() => {
    getNewsPost(match.params.id);
    //eslint-disable-next-line
  }, []);

  const { title, description, filePath } = newsPost;

  return (
    <div>
      <p className="x-large">{title}</p>
      <p className="lead">{description}</p>
      <p>{filePath}</p>
    </div>
  );
};

export default NewsPost;
