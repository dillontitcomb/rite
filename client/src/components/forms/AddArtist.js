import React, { useContext, useState } from 'react';
import ArtistContext from '../../context/artist/artistContext';

const AddArtist = () => {
  const artistContext = useContext(ArtistContext);
  const { addArtist } = artistContext;

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
    addArtist({
      ...state
    });
    setState({
      name: '',
      artistLink: '',
      bio: ''
    });
  };

  return (
    <div>
      <p className="large">Add an Artist</p>
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

export default AddArtist;
