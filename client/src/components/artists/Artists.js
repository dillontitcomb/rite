import React, { useContext, useEffect } from 'react';
import ArtistContext from '../../context/artist/artistContext';
import './Artists.css';

const Artists = () => {
  const artistContext = useContext(ArtistContext);
  const { getArtists, artists, getArtist } = artistContext;

  useEffect(() => {
    getArtists();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <p className="x-large text-weight-light text-center my-3">THE ARTISTS</p>
      <div className="artists-container text-center">
        {artists &&
          artists.map((artist, key) => (
            // TODO: Create ArtistItem component and use here
            <div className="card" key={key}>
              <p className="lead">{artist.name}</p>
              <p>{artist.bio}</p>
              <p>
                Check out their work at{' '}
                <a
                  href={artist.artistLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {artist.artistLink}
                </a>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Artists;
