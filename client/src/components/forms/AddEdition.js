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
    artist: null,
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

  const handleCreateArtist = () => {
    setState({ ...state, showAddArtist: true, showSelectArtist: false });
  };

  const handleSelectArtist = () => {
    console.log('Selecting artist!');
    setState({ ...state, showAddArtist: false, showSelectArtist: true });
  };

  const handleAddSelectedArtist = () => {
    console.log('Adding selected artist to edition');
    const newArtistsList = [...state.artists, state.artist];
    setState({ ...state, artist: [], artists: newArtistsList });
    console.log(state);
  };

  const onSelectArtistChange = (e) => {
    const index = e.target.options.selectedIndex;
    // If index < 1, the selected option is the placeholder, so reset state & form fields
    if (index < 1) {
      setState({ ...state, artist: [] });
    } else {
      const selectedArtist = artists[index - 1];
      setState({ ...state, artist: selectedArtist });
    }
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

  const selectArtistView = (
    <div className="my-1">
      <select onChange={onSelectArtistChange} id="artists">
        <option value="placeholder">Select an artist...</option>
        {artists.map((artist, key) => (
          <option key={key} value={artist._id}>
            {artist.name}
          </option>
        ))}
      </select>
      {state.artist && (
        <button
          className="btn btn-primary my-1"
          onClick={handleAddSelectedArtist}
        >
          Add
        </button>
      )}
    </div>
  );

  return (
    <div>
      <p className="x-large">Add an Edition</p>
      {state.artists.length > 0 && (
        <ul className="large">
          Selected Artists:{' '}
          {state.artists.map((artist, key) => (
            <li key={key}>
              <strong>{artist.name}</strong>
            </li>
          ))}
        </ul>
      )}
      {!state.showSelectArtist && (
        <button className="btn btn-primary" onClick={handleSelectArtist}>
          Select Artist
        </button>
      )}
      {state.showAddArtist && <AddArtist></AddArtist>}
      {state.showSelectArtist && selectArtistView}
      {!state.showAddArtist && (
        <button className="btn btn-primary" onClick={handleCreateArtist}>
          Create New Artist
        </button>
      )}
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
