import React, { useContext, useState } from 'react';
import EditionContext from '../../context/edition/editionContext';

const AddEdition = () => {
  const editionContext = useContext(EditionContext);
  const { addEdition } = editionContext;

  const [state, setState] = useState({
    artists: [],
    title: '',
    year: '',
    description: '',
    files: []
  });

  const handleAddArtist = (e) => {
    e.preventDefault();
    setState({ ...state, artists: [...state.artists, ''] });
  };

  const onArtistsChange = (e, index) => {
    e.preventDefault();
    let artists = [...state.artists];
    artists[index] = e.target.value;
    setState({ ...state, artists: artists });
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
      title: '',
      year: '',
      description: '',
      files: []
    });
  };

  return (
    <div>
      <p className="large">Add an Edition</p>
      <form className="form" onSubmit={onSubmit}>
        <p>
          <strong>Edition Images:</strong>
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
        {state.artists.map((artist, index) => {
          return (
            <div key={index}>
              <input
                type="text"
                value={artist}
                onChange={(e) => onArtistsChange(e, index)}
                placeholder="Artist Name"
              />
            </div>
          );
        })}

        <button className="btn btn-primary" onClick={handleAddArtist}>
          Add Artist
        </button>

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
