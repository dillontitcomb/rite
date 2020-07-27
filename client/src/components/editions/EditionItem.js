import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import artistContext from '../../context/artist/artistContext';
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

// This is the condensed edition, viewable in a gallery on the Editions page
const EditionItem = ({
  edition: { artists, title, year, description, filePaths, _id },
}) => {
  const ArtistContext = useContext(artistContext);
  const { getArtist, artist } = ArtistContext;

  console.log(ArtistContext);

  useEffect(() => {
    getArtist('5f1f2ab67117bf3d385871c1');
    // eslint-disable-next-line
  }, []);

  const itemBackgroundStyle = {
    backgroundImage: `url(${filePaths[0]})`,
  };
  const editionRoute = `/editions/${_id}`;

  return (
    <div className="edition-item" style={itemBackgroundStyle}>
      <Link to={editionRoute}>
        <div className="edition-item-overlay">
          {/* <h1>{artist}</h1> */}
          <p className="edition-item-text">
            <u>
              {artists.length > 0 && formatArtists(artists) + ', '}
              <em>{title}</em>, {year}
            </u>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default EditionItem;
