import React from 'react';
import { Link } from 'react-router-dom';
import './NewsPostItem.css';

const NewsPostItem = ({ newsPost: { title, description, filePath, _id } }) => {
  const newsPostRoute = `/newsPosts/${_id}`;

  return (
    <div>
      <Link to={newsPostRoute}>
        <div className="news-post-item">
          <p className="x-large my-2">{title}</p>
          <img className="news-post-image" src={filePath} alt="coool thing" />
          <p className="lead">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default NewsPostItem;
