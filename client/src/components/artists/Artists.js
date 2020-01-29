import React, { useContext, useEffect } from 'react';
import EditionContext from '../../context/edition/editionContext';
import './Artists.css';

const Artists = () => {
  const editionContext = useContext(EditionContext);
  const { getEditions, editions, getArtists, artists } = editionContext;

  const getEditionsByArtist = (artist) => {
    return editions.filter((edition) => edition.artists.includes(artist));
  };

  useEffect(() => {
    getEditions();
    getArtists();
    //eslint-disable-next-line
  }, []);

  const handleSelectArtist = async (e) => {
    e.preventDefault();
    let editions = getEditionsByArtist(e.target.value);
    displayEditions(editions);
  };

  // TODO: Replace with separate display component
  const displayEditions = (editions) => {
    const displayContainer = document.getElementById('artists-edition-display');
    displayContainer.innerHTML = `
      <img src=${editions[0].filePaths[0]} alt="Edition on display"></img>
    `;
    displayContainer.style.visibility = 'visible';
  };

  return (
    <div className="container">
      <p className="x-large text-center my-2">The Artists</p>
      <div className="artists-container text-center">
        {artists &&
          artists.map((artist, key) => (
            <button
              value={artist}
              className="btn artists-name"
              key={key}
              onClick={handleSelectArtist}
            >
              {artist}
            </button>
          ))}
      </div>
      <div id="artists-edition-display"></div>
    </div>
  );
};

export default Artists;
