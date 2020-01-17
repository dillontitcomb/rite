import axios from 'axios';
import React, { useContext, useState } from 'react';
import EditionContext from '../../context/edition/editionContext';

// TODO: Create forms to add editions, newsPosts, and artworks, break them into separate components

const Admin = () => {
  const editionContext = useContext(EditionContext);
  const { addEdition } = editionContext;

  const [state, setState] = useState({
    author: '',
    title: '',
    year: '',
    description: '',
    files: []
  });

  const onChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
    console.log(state);
  };

  const onFileChange = (e) => {
    setState({
      ...state,
      files: [...state.files, ...e.target.files]
    });
    console.log(state);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addEdition({ ...state, files: ['fileOne', 'fileTwo'] });

    // Create form data to be sent via POST request
    const formData = new FormData();
    for (const file of state.files) {
      formData.append('fileGroup', file);
    }
    formData.append('author', state.author);
    formData.append('title', state.title);
    formData.append('year', state.year);
    formData.append('description', state.description);

    // TODO: Add POST request to /upload
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };

    axios
      .post('/api/upload', formData, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <p className="x-large text-center my-2">Admin Page</p>
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

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={state.author}
          onChange={onChange}
        />

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

export default Admin;
