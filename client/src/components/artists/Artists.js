import React, { useContext, useEffect } from 'react';
import EditionContext from '../../context/edition/editionContext';
import './Artists.css';

const Artists = () => {
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
    displayEditions(artistEditions);
  };

  // TODO: Replace with separate display component
  const displayEditions = (editions) => {
    const displayContainer = document.getElementById('artists-edition-display');
    displayContainer.innerHTML = `
      <img src=${editions[0].filePaths[0]} alt="Edition on display"></img>
    `;
    displayContainer.style.visibility = 'visible';
  };

  console.log(artists);

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
