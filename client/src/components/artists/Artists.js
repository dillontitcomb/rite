import React, { useContext, useEffect } from 'react';
import EditionContext from '../../context/edition/editionContext';

const Artists = () => {
  const editionContext = useContext(EditionContext);
  const { getArtists, artists } = editionContext;

  useEffect(() => {
    getArtists();
    //eslint-disable-next-line
  }, []);
  console.log(editionContext);
  return (
    <div className="container">
      <p className="x-large text-center my-2">The Artists</p>
      <div className="artists-container text-center">
        {artists &&
          artists.map((artist, key) => (
            <span className="artists-name" key={key}>
              {artist}{' '}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Artists;
