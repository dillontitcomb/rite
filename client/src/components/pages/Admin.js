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

  const onSubmit = async (e) => {
    e.preventDefault();
    addEdition({
      ...state
    });
    setState({
      author: '',
      title: '',
      year: '',
      description: '',
      files: []
    });
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
