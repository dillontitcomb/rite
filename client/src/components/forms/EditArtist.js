import React, { useContext, useEffect, useState } from 'react';
import artistContext from '../../context/artist/artistContext';

const EditArtist = () => {
  const ArtistContext = useContext(artistContext);
  const { getArtists, artists, loading } = ArtistContext;

  const [state, setState] = useState({
    name: '',
    artistLink: '',
    bio: ''
  });

  const onChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // TODO: Add updateArtist function to artistState
    // updateArtist({
    //   ...state
    // });
    setState({
      name: '',
      artistLink: '',
      bio: ''
    });
  };

  const onSelectChange = (e) => {
    const index = e.target.options.selectedIndex;
    // If index < 1, the selected option is the placeholder, so reset state & form fields
    if (index < 1) {
      setState({ name: '', artistLink: '', bio: '' });
    } else {
      const selectedArtist = artists[index - 1];
      setState({
        name: selectedArtist.name || '',
        artistLink: selectedArtist.artistLink || '',
        bio: selectedArtist.bio || ''
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
  console.log(artists[0]);

  return (
    <div className="my-2">
      <p className="large">Edit Artist</p>
      {artists.length > 0 && selectArtistView}
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Artist Name"
          value={state.name}
          onChange={onChange}
        />
        <input
          type="text"
          name="artistLink"
          placeholder="Link to artist's work"
          value={state.artistLink}
          onChange={onChange}
        />
        <textarea
          type="text"
          name="bio"
          placeholder="Artist's bio"
          value={state.bio}
          onChange={onChange}
        />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default EditArtist;
