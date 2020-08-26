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
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="my-2">
          <p className="large my-1">{title}</p>
          <img src={filePath} alt="coolpix" />
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
      )}
    </div>
  );
};

export default NewsPost;
