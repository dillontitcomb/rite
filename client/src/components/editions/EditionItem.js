import React from 'react';
import { Link } from 'react-router-dom';
import './EditionItem.css';

// Format Artist Names
const formatArtists = (artists) => {
  if (artists.length < 3) {
    return artists.join(' & ');
  } else {
    let last = artists[artists.length - 1];
    let rest = artists.slice(0, artists.length - 1);
    return rest.join(', ') + ', and ' + last;
  }
};

// This is the condensed edition, viewable in a gallery on The Editions page
const EditionItem = ({
  edition: { editionArtists, title, year, filePaths, _id },
}) => {
  const itemBackgroundStyle = {
    backgroundImage: `url(${filePaths[0]})`,
  };
  const editionRoute = `/editions/${_id}`;
  const artistNames = editionArtists.map((artist) => artist.name);

  return (
    <div className="edition-item" style={itemBackgroundStyle}>
      <Link to={editionRoute}>
        <div className="edition-item-overlay">
          <p className="edition-item-text">
            <u>
              {artistNames.length > 0 && formatArtists(artistNames) + ', '}
              <em>{title}</em>, {year}
            </u>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default EditionItem;
