import { Editor } from '@tinymce/tinymce-react';
import React, { useContext, useEffect, useState } from 'react';
import artistContext from '../../context/artist/artistContext';

const EditArtist = () => {
  const ArtistContext = useContext(artistContext);
  const { getArtists, artists, updateArtist } = ArtistContext;

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

  const onSelectChange = (e) => {
    const index = e.target.options.selectedIndex;
    // If index < 1, the selected option is the placeholder, so reset state & form fields
    if (index < 1) {
      setState({ name: '', artistLink: '', bio: '', id: '' });
    } else {
      const selectedArtist = artists[index - 1];
      setState({
        name: selectedArtist.name || '',
        artistLink: selectedArtist.artistLink || '',
        bio: selectedArtist.bio || '',
        id: selectedArtist._id || '',
      });
    }
  };

  useEffect(() => {
    getArtists();
    //eslint-disable-next-line
  }, []);

  const selectArtistView = (
    <div className="my-1">
      <select onChange={onSelectChange} id="artists">
        <option value="placeholder">Select an artist...</option>
        {artists.map((artist, key) => (
          <option key={key} value={artist._id}>
            {artist.name}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="my-2">
      <p className="large">Edit Artist</p>
      {artists.length > 0 && selectArtistView}
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
