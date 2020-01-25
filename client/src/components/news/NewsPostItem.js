import React from 'react';
import './NewsPostItem.css';

const NewsPostItem = ({ newsPost: { title, description, filePath } }) => {
  return (
    <div className="news-post-item">
      <p className="x-large my-2">{title}</p>
      <img className="news-post-image" src={filePath} alt="Some Image" />
      <p className="lead">{description}</p>
    </div>
  );
};

export default NewsPostItem;
