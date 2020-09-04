import React, { useContext, useEffect } from 'react';
import ArtistContext from '../../context/artist/artistContext';
import './Artists.css';
import ArtistItem from './ArtistItem'

const Artists = () => {
  const artistContext = useContext(ArtistContext);
  const { getArtists, artists } = artistContext;

  useEffect(() => {
    getArtists();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <p className="x-large text-weight-light text-center my-3">THE ARTISTS</p>
      <div className="artists-container">
        {artists.length > 0 &&
          artists.map((artist, key) => (
            <ArtistItem artist={artist} key={key}></ArtistItem>
          ))}
      </div>
    </div>
  );
};

export default Artists;
