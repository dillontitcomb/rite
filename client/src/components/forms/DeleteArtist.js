import React, { useContext, useEffect, useState } from 'react';
import artistContext from '../../context/artist/artistContext';

const DeleteArtist = () => {
  const ArtistContext = useContext(artistContext);
  const { getArtists, artists } = ArtistContext;

  const [state, setState] = useState({
    name: ''
  });

  const handleDeleteArtist = async (e) => {
    e.preventDefault();
    console.log(state.name);
    // TODO: Add context for deleteArtist
    // deleteArtist();
    setState({
      name: ''
    });
  };

  const onSelectChange = (e) => {
    const index = e.target.options.selectedIndex;
    // If index < 1, the selected option is the placeholder, so reset state & form fields
    if (index < 1) {
      setState({ name: '' });
    } else {
      const selectedArtist = artists[index - 1];
      setState({
        name: selectedArtist.name || ''
      });
    }
  };

  useEffect(() => {
    getArtists();
    //eslint-disable-next-line
  }, []);

  const selectArtistView = (
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

  return (
    <div className="my-2">
      <p className="large">Delete Artist</p>
      <p>
        <i>This option will delete an artist permanently. Use with caution!</i>
      </p>
      {artists.length > 0 && selectArtistView}
      <button onClick={handleDeleteArtist} className="btn btn-danger">
        Delete Artist
      </button>
    </div>
  );
};

export default DeleteArtist;
