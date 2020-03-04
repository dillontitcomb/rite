import React, { useContext, useEffect, useState } from 'react';
import ArtistContext from '../../context/artist/artistContext';
import EditionContext from '../../context/edition/editionContext';
import AddArtist from '../forms/AddArtist';

const AddEdition = () => {
  const editionContext = useContext(EditionContext);
  const { addEdition } = editionContext;

  const artistContext = useContext(ArtistContext);
  const { getArtists, artists } = artistContext;

  const [state, setState] = useState({
    artists: [],
    newsPosts: [],
    title: '',
    year: '',
    description: '',
    files: [],
    price: -1,
    available: '',
    showAddArtist: false,
    showSelectArtist: false
  });

  const handleAddArtist = () => {
    setState({ ...state, showAddArtist: true, showSelectArtist: false });
  };

  const handleSelectArtist = () => {
    console.log('Selecting artist!');
  };

  const onChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const onFileChange = (e) => {
    setState({
      ...state,
      files: [...state.files, ...e.target.files]
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    addEdition({
      ...state
    });
    setState({
      artists: [],
      newsPosts: [],
      title: '',
      year: '',
      description: '',
      files: [],
      price: -1,
      available: ''
    });
  };

  useEffect(() => {
    getArtists();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <p className="large">Add an Edition</p>
      {state.showAddArtist && <AddArtist></AddArtist>}
      {!state.showAddArtist && (
        <button className="btn btn-primary" onClick={handleAddArtist}>
          Add New Artist
        </button>
      )}
      <button className="btn btn-dark" onClick={handleSelectArtist}>
        Select Existing Artist
      </button>
      <form className="form my-2" onSubmit={onSubmit}>
        <p>
          <strong>Select Edition Images:</strong>
        </p>
        <input type="file" name="fileGroup" multiple onChange={onFileChange} />

        {state.files.length > 0 && (
          <p>
            <strong>Files set to upload:</strong>
          </p>
        )}
        {state.files.map((file, key) => (
          <p key={key}>
            <em>{file.name}</em>
          </p>
        ))}
        <br />

        <input
          type="text"
          name="title"
          placeholder="Edition Title"
          value={state.title}
          onChange={onChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Edition Year"
          value={state.year}
          onChange={onChange}
        />
        <textarea
          type="text"
          name="description"
          placeholder="Edition Description"
          value={state.description}
          onChange={onChange}
        />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddEdition;
