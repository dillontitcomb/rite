import React, { useContext, useEffect } from 'react';
import ArtistContext from '../../context/artist/artistContext';
import EditionContext from '../../context/edition/editionContext';
import EditionItem from '../editions/EditionItem';

const Artist = ({ match }) => {
  const artistContext = useContext(ArtistContext);
  const { getArtist, artist } = artistContext;

  const editionContext = useContext(EditionContext);
  const { getEditionsByArtist, editions, loading } = editionContext;

  useEffect(() => {
    getArtist(match.params.id);
    getEditionsByArtist(match.params.id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p className="text-center lead">Loading...</p>
      ) : (
        <div>
          <p className="x-large text-weight-light text-center my-3">
            {artist.name ? artist.name.toUpperCase() : ''}
          </p>
          <div
            className="artist-bio text-center"
            dangerouslySetInnerHTML={{ __html: artist.bio }}
          ></div>
          <p className="x-large text-weight-light text-center my-3">
            RITE EDITIONS
          </p>
          {editions.length > 0 ? (
            <div className="editions-grid">
              {editions.length > 0 &&
                editions.map((edition, key) => (
                  <EditionItem
                    key={edition._id}
                    edition={edition}
                  ></EditionItem>
                ))}
            </div>
          ) : (
            <p className="text-center">New Edition Coming Soon</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Artist;
