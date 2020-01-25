import React, { useContext, useState } from 'react';
import NewsPostContext from '../../context/newsPost/newsPostContext';

// TODO: Create forms to add newsPosts, newsPosts, and artworks, break them into separate components

const AddNewsPost = () => {
  const newsPostContext = useContext(NewsPostContext);
  const { addNewsPost } = newsPostContext;
  console.log(newsPostContext);

  const [state, setState] = useState({
    title: '',
    description: '',
    files: []
  });

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
    console.log(state);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    addNewsPost({
      ...state
    });
    setState({
      title: '',
      description: '',
      files: []
    });
  };

  return (
    <div className="container">
      <p className="x-large text-center my-2">Add A News Post</p>
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
        <textarea
          type="text"
          name="description"
          placeholder="News Post Description"
          value={state.description}
          onChange={onChange}
        />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddNewsPost;
