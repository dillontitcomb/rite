import { Editor } from '@tinymce/tinymce-react';
import React, { useContext, useState } from 'react';
import NewsPostContext from '../../context/newsPost/newsPostContext';
import { isEmpty } from '../../utils/helpers';
import SelectArtist from './SelectArtist';
import SelectEdition from './SelectEdition';

// TODO: Create forms to add newsPosts, newsPosts, and artworks, break them into separate components

const AddNewsPost = () => {
  const newsPostContext = useContext(NewsPostContext);
  const { addNewsPost } = newsPostContext;

  const [state, setState] = useState({
    title: '',
    description: '',
    files: [],
    editions: [],
    edition: {},
    artists: [],
    artist: {},
  });

  const onChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const onEditorChange = (description) => {
    setState({ ...state, description });
  };

  const onFileChange = (e) => {
    setState({
      ...state,
      files: [...state.files, ...e.target.files],
    });
  };

  const onSelectEdition = (edition) => {
    setState({ ...state, edition: edition });
  };

  const onSelectArtist = (artist) => {
    setState({ ...state, artist: artist });
  };

  const onAddEdition = () => {
    setState({
      ...state,
      editions: [...state.editions, state.edition],
      edition: {},
    });
  };

  const onClearEditions = () => {
    setState({
      ...state,
      editions: [],
    });
  };

  const onAddArtist = (e) => {
    setState({
      ...state,
      artists: [...state.artists, state.artist],
      artist: {},
    });
  };

  const onClearArtists = (e) => {
    setState({ ...state, artists: [] });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    addNewsPost({
      ...state,
    });
    setState({
      title: '',
      description: '',
      files: [],
      editions: [],
      edition: {},
      artists: [],
      artist: {},
    });
  };

  return (
    <div>
      <p className="large">Add a News Post</p>
      <p className="lead">Select an Edition</p>
      <SelectEdition onSelectEdition={onSelectEdition}></SelectEdition>
      {!isEmpty(state.edition) && (
        <button className="btn btn-primary" onClick={onAddEdition}>
          Add Edition
        </button>
      )}
      {state.editions.length > 0 &&
        state.editions.map((edition, key) => (
          <p className="large" key={key}>
            {edition.title}
          </p>
        ))}
      {state.editions.length > 0 && (
        <button className="btn btn-danger" onClick={onClearEditions}>
          Clear Editions
        </button>
      )}
      <p className="lead">Add Artists</p>
      <SelectArtist onSelectArtist={onSelectArtist}></SelectArtist>
      {!isEmpty(state.artist) && (
        <button className="btn btn-primary" onClick={onAddArtist}>
          Add Artist
        </button>
      )}
      {state.artists.length > 0 &&
        state.artists.map((artist, key) => (
          <p className="large" key={key}>
            {artist.name}
          </p>
        ))}
      {state.artists.length > 0 && (
        <button className="btn btn-danger" onClick={onClearArtists}>
          Clear Artists
        </button>
      )}
      <form className="form my-2" onSubmit={onSubmit}>
        <p>
          <strong>Upload an Image</strong>
        </p>
        <input type="file" name="fileGroup" multiple onChange={onFileChange} />
        {state.files.length > 0 && (
          <p>
            <strong>Files set to upload:</strong>
          </p>
        )}
        {state.files.length > 0 && <p>{state.files[0].name}</p>}
        <input
          type="text"
          name="title"
          placeholder="News Post Title"
          value={state.title}
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
              'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help',
          }}
        />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddNewsPost;
