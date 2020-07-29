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
    editionArtists: [],
    artist: null,
    newsPosts: [],
    title: '',
    year: '',
    description: '',
    files: [],
    price: '',
    available: false,
    showAddArtist: false,
    showSelectArtist: false,
  });

  const handleCreateArtist = () => {
    setState({ ...state, showAddArtist: true, showSelectArtist: false });
  };

  const handleSelectArtist = () => {
    console.log('Selecting artist!');
    setState({ ...state, showAddArtist: false, showSelectArtist: true });
    console.log(state);
  };

  const handleAddSelectedArtist = () => {
    console.log('Adding selected artist to edition');
    const newArtistsList = [...state.editionArtists, state.artist];
    setState({ ...state, artist: [], editionArtists: newArtistsList });
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
      [e.target.name]: value,
    });
  };

  const onFileChange = (e) => {
    setState({
      ...state,
      files: [...state.files, ...e.target.files],
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(state.editionArtists);
    addEdition({
      ...state,
      editionArtists: state.editionArtists.map((obj) => obj._id),
    });
    setState({
      editionArtists: [],
      newsPosts: [],
      title: '',
      year: '',
      description: '',
      files: [],
      price: '',
      available: false,
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
      <p className="large">Add an Edition</p>
      {state.editionArtists.length > 0 && (
        <ul className="large">
          Selected Artists:{' '}
          {state.editionArtists.map((artist, key) => (
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
        <button className="btn btn-white" onClick={handleCreateArtist}>
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
        <label htmlFor="price">Edition Price: </label>
        <input
          type="text"
          name="price"
          placeholder="$"
          value={state.price}
          onChange={onChange}
        />
        <textarea
          type="text"
          name="description"
          placeholder="Edition Description"
          value={state.description}
          onChange={onChange}
        />
        <input
          type="checkbox"
          name="available"
          value={state.available}
          onChange={onChange}
        />
        <label htmlFor="available"> Available for purchase?</label>
        <br />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddEdition;
