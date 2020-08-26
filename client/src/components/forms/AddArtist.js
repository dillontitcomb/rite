import { Editor } from '@tinymce/tinymce-react';
import React, { useContext, useState } from 'react';
import ArtistContext from '../../context/artist/artistContext';

const AddArtist = () => {
  const artistContext = useContext(ArtistContext);
  const { addArtist } = artistContext;

  const [state, setState] = useState({
    name: '',
    artistLink: '',
    bio: '',
  });

  const onChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const onEditorChange = (bio) => {
    setState({ ...state, bio });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    addArtist({
      ...state,
    });
    setState({
      name: '',
      artistLink: '',
      bio: '',
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

export default AddArtist;
