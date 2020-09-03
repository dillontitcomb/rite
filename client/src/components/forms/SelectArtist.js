import React, { useContext, useEffect } from 'react';
import artistContext from '../../context/artist/artistContext';

const SelectArtist = ({ onSelectArtist }) => {
  const ArtistContext = useContext(artistContext);
  const { getArtists, artists } = ArtistContext;

  const onSelectChange = (e) => {
    const index = e.target.options.selectedIndex;
    if (index < 1) {
      let emptyArtist = {};
      onSelectArtist(emptyArtist);
    } else {
      const selectedArtist = artists[index - 1];
      onSelectArtist(selectedArtist);
    }
  };

  useEffect(() => {
    getArtists();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="my-1">
      <select onChange={onSelectChange} id="artists">
        <option value="placeholder">Select an artist...</option>
        {artists.map((artist, key) => (
          <option key={key} value={artist._id}>
            {artist.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectArtist;
