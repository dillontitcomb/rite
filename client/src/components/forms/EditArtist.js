import { Editor } from '@tinymce/tinymce-react';
import React, { useContext, useState } from 'react';
import artistContext from '../../context/artist/artistContext';
import SelectArtist from '../forms/SelectArtist';

const EditArtist = () => {
  const ArtistContext = useContext(artistContext);
  const { updateArtist } = ArtistContext;

  const [state, setState] = useState({
    name: '',
    artistLink: '',
    bio: '',
    id: '',
  });

  const onChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(state);
    updateArtist({
      ...state,
    });
    setState({
      name: '',
      artistLink: '',
      bio: '',
      id: '',
    });
  };

  const onEditorChange = (bio) => {
    setState({ ...state, bio });
  };

  const selectArtist = (artist) => {
    setState({
      name: artist.name || '',
      artistLink: artist.artistLink || '',
      bio: artist.bio || '',
      id: artist._id || '',
    });
  };

  return (
    <div className="my-2">
      <p className="large">Edit Artist</p>
      <SelectArtist selectArtist={selectArtist}></SelectArtist>
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
        <Editor
          apiKey="qgf24zdv82ko9vchv3fio5j2kt4yckxr1w1a56tlpsa05wjo"
          value={state.bio}
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

export default EditArtist;
