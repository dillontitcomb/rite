import React from 'react';
import { Link } from 'react-router-dom';
import './NewsPostItem.css';

const NewsPostItem = ({ newsPost: { title, description, filePath, _id } }) => {
  const newsPostRoute = `/newsPosts/${_id}`;

  return (
    <div>
      <div className="news-post-item">
        <Link to={newsPostRoute}>
          <p className="large my-2">{title}</p>
        </Link>
        <img className="news-post-image" src={filePath} alt="coool thing" />
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    </div>
  );
};

export default NewsPostItem;
