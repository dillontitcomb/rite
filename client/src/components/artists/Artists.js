import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArtistContext from '../../context/artist/artistContext';
import './Artists.css';

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
            <Link key={artist._id} to={`/artists/${artist._id}`}>
              <p className="artist-list-item lead-sm" key={artist._id}>
                {artist.name}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Artists;
