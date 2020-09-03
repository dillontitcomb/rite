import { Editor } from '@tinymce/tinymce-react';
import React, { useContext, useState } from 'react';
import NewsPostContext from '../../context/newsPost/newsPostContext';
import SelectEdition from './SelectEdition';

// TODO: Create forms to add newsPosts, newsPosts, and artworks, break them into separate components

const AddNewsPost = () => {
  const newsPostContext = useContext(NewsPostContext);
  const { addNewsPost } = newsPostContext;

  const [state, setState] = useState({
    title: '',
    description: '',
    files: [],
    edition: {},
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

  const onSubmit = async (e) => {
    e.preventDefault();
    addNewsPost({
      ...state,
    });
    setState({
      title: '',
      description: '',
      files: [],
    });
  };

  return (
    <div>
      <p className="large">Add a News Post</p>
      <p className="lead">Attach an Edition</p>
      <SelectEdition onSelectEdition={onSelectEdition}></SelectEdition>
      <form className="form" onSubmit={onSubmit}>
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
