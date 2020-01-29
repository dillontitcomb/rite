import React, { useContext, useEffect, useState } from 'react';
import EditionContext from '../../context/edition/editionContext';
import EditionItem from '../editions/EditionItem';
import './Artists.css';

const Artists = () => {
  const [state, setState] = useState({
    displayEditions: false,
    artistEditions: []
  });

  const editionContext = useContext(EditionContext);
  const { getEditions, editions } = editionContext;

  useEffect(() => {
    getEditions();
    //eslint-disable-next-line
  }, []);

  const artists = editions.reduce((acc, val) => {
    acc.push(...val.artists);
    return acc;
  }, []);

  // Show artist's editions when artist name is selected
  const handleSelectArtist = (e) => {
    e.preventDefault();
    let artistEditions = editions.filter((edition) =>
      edition.artists.includes(e.target.value)
    );
    setState({ displayEditions: true, artistEditions: artistEditions });
  };

  return (
    <div className="container">
      <p className="x-large text-weight-light text-center my-3">THE ARTISTS</p>
      <div className="artists-container text-center">
        {artists &&
          artists.map((artist, key) => (
            <button
              value={artist}
              className="btn btn-sm artists-name"
              key={key}
              onClick={handleSelectArtist}
            >
              {artist}
            </button>
          ))}
      </div>
      <div className="artists-edition-display my-2">
        {state.displayEditions &&
          state.artistEditions.map((edition, key) => (
            <EditionItem edition={edition} key={key}></EditionItem>
          ))}
      </div>
    </div>
  );
};

export default Artists;
