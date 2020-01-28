import React, { useContext, useEffect } from 'react';
import EditionContext from '../../context/edition/editionContext';

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

// This is the full-page, detailed edition

const Edition = ({ match }) => {
  const editionContext = useContext(EditionContext);
  const { getEdition, edition, loading } = editionContext;

  useEffect(() => {
    getEdition(match.params.id);
    // eslint-disable-next-line
  }, []);

  const { artists, title, year, description, filePaths } = edition;

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p className="x-large my-1">
            {artists.length > 0 && formatArtists(artists) + ', '}
            <em>{title}</em>, {year}
          </p>
          <img src={filePaths[0]} alt={`${title}`} />
          <p className="large my-1">{artists && formatArtists(artists)}</p>
          <p className="lead">
            <em>
              <strong>
                {title}, {year}
              </strong>
            </em>
          </p>
          {description.split('\n').map((str, key) => {
            return (
              <p className="my-1" key={key}>
                {str}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Edition;
