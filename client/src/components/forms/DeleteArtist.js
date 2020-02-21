import React, { useContext, useEffect, useState } from 'react';
import artistContext from '../../context/artist/artistContext';

const DeleteArtist = () => {
  const ArtistContext = useContext(artistContext);
  const { getArtists, artists, deleteArtist } = ArtistContext;

  const [state, setState] = useState({
    name: '',
    id: ''
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(`Trying to delete artist ${state.name}`);
    deleteArtist(state.id);
    setState({
      name: '',
      id: ''
    });
  };

  const onSelectChange = (e) => {
    const index = e.target.options.selectedIndex;
    // If index < 1, the selected option is the placeholder, so reset state & form fields
    if (index < 1) {
      setState({ name: '', id: '' });
    } else {
      const selectedArtist = artists[index - 1];
      setState({
        name: selectedArtist.name || '',
        id: selectedArtist._id || ''
      });
    }
  };

  useEffect(() => {
    getArtists();
    //eslint-disable-next-line
  }, []);

  const selectArtistView = (
    <select onChange={onSelectChange} id="artists">
      <option value="placeholder">Select an artist...</option>
      {artists.map((artist, key) => (
        <option key={key} value={artist._id}>
          {artist.name}
        </option>
      ))}
    </select>
  );

  return (
    <div className="my-2">
      <p className="large">Delete Artist</p>
      <p>
        <i>This option will delete an artist permanently. Use with caution!</i>
      </p>
      <form onSubmit={onSubmit} className="form">
        {artists.length > 0 && selectArtistView}
        <input
          type="submit"
          value="Delete Artist"
          className="btn btn-danger"
        ></input>
      </form>
    </div>
  );
};

export default DeleteArtist;
