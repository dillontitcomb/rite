import React from 'react';
import { Link } from 'react-router-dom';
import './EditionItem.css';

// This is the condensed edition, viewable in a gallery on the Editions page

const EditionItem = ({
  edition: { artist, title, year, description, filePaths, _id }
}) => {
  const itemBackgroundStyle = {
    backgroundImage: `url(${filePaths[0]})`
  };

  const editionRoute = `/editions/${_id}`;

  return (
    <div className="edition-item nav-brand" style={itemBackgroundStyle}>
      <Link to={editionRoute}>
        <div className="edition-item-overlay">
          <p className="edition-item-text">
            <u>
              {artist},<em>{title}</em>, {year}
            </u>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default EditionItem;
