import React, { useContext, useState } from 'react';
import EditionContext from '../../context/edition/editionContext';

// TODO: Create artist context, render this form, test adding artist.
const AddEdition = () => {
  const editionContext = useContext(EditionContext);
  const { addEdition } = editionContext;

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
    addEdition({
      ...state
    });
    setState({
      name: '',
      artistLink: '',
      bio: ''
    });
  };

  console.log(state);

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

export default AddEdition;
