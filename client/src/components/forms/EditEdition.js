import { Editor } from '@tinymce/tinymce-react';
import React, { useContext, useEffect, useState } from 'react';
import EditionContext from '../../context/edition/editionContext';
import AddArtist from '../forms/AddArtist';
import SelectArtist from '../forms/SelectArtist';

const EditEdition = () => {
  const editionContext = useContext(EditionContext);
  const { updateEdition, editions, getEditions } = editionContext;

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
    _id: '',
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

  const handleClearArtists = () => {
    setState({ ...state, editionArtists: [] });
  };

  const handleClearImages = () => {
    setState({ ...state, files: [], imgFilePaths: [] });
  };

  const onSelectArtist = (selectedArtist) => {
    setState({ ...state, artist: selectedArtist });
  };

  const onSelectEditionChange = (e) => {
    const index = e.target.options.selectedIndex;
    // If index < 1, the selected option is the placeholder, so reset state & form fields
    if (index < 1) {
      setState({
        editionArtists: [],
        artist: null,
        newsPosts: [],
        title: '',
        year: '',
        description: '',
        files: [],
        price: '',
        available: false,
        imgFilePaths: [],
        _id: '',
      });
    } else {
      const selectedEdition = editions[index - 1];
      console.log(selectedEdition);
      setState({
        editionArtists: selectedEdition.editionArtists || [],
        artist: selectedEdition.artist || null,
        newsPosts: selectedEdition.newsPosts || [],
        title: selectedEdition.title || '',
        year: selectedEdition.year || '',
        description: selectedEdition.description || '',
        files: selectedEdition.files || [],
        price: selectedEdition.price || '',
        available: selectedEdition.available || false,
        imgFilePaths: selectedEdition.filePaths || [],
        _id: selectedEdition._id,
      });
    }
  };

  const onChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const onCheckboxChange = (e) => {
    setState({ ...state, available: e.target.checked });
  };

  const onEditorChange = (description) => {
    setState({ ...state, description });
  };

  const onFileChange = (e) => {
    console.log(state);
    setState({
      ...state,
      files: [...state.files, ...e.target.files],
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(state.editionArtists);
    updateEdition({
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
    getEditions();
    //eslint-disable-next-line
  }, []);

  const selectArtistView = (
    <div className="my-1">
      <SelectArtist onSelectArtist={onSelectArtist}></SelectArtist>
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
  const selectEditionView = (
    <div className="my-1">
      <select onChange={onSelectEditionChange} id="editions">
        <option value="placeholder">Select an Edition</option>
        {editions.map((edition, key) => (
          <option key={key} value={edition._id}>
            {edition.title}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div>
      <p className="large">Edit an Edition</p>

      <p className="lead">Select an Edition to Edit</p>
      {selectEditionView}

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
      {state.editionArtists.length > 0 && (
        <button className="btn btn-danger" onClick={handleClearArtists}>
          Clear Artists
        </button>
      )}

      {state.imgFilePaths && (
        <div>
          <p className="lead my-1">Current Edition Images</p>
          {state.imgFilePaths.map((path, key) => (
            <img
              className="img-tiny"
              key={key}
              src={path}
              alt={`${state.title}`}
            />
          ))}
          {state.imgFilePaths.length > 0 || state.files.length > 0 ? (
            <button className="btn btn-danger my-1" onClick={handleClearImages}>
              Clear Images
            </button>
          ) : (
            ''
          )}
        </div>
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
        <Editor
          apiKey="qgf24zdv82ko9vchv3fio5j2kt4yckxr1w1a56tlpsa05wjo"
          value={state.description}
          onEditorChange={onEditorChange}
          outputFormat="html"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image',
              'charmap print preview anchor help',
              'searchreplace visualblocks code',
              'insertdatetime media table paste wordcount',
            ],
            toolbar:
              'undo redo | formatselect | bold italic | link image | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help',
            typeahead_urls: false,
          }}
        />
        <input
          type="checkbox"
          name="available"
          checked={state.available}
          onChange={onCheckboxChange}
        />
        <label htmlFor="available"> Available for purchase?</label>
        <br />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default EditEdition;
