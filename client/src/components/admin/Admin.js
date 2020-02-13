import React, { useState } from 'react';
import AddEdition from '../forms/AddEdition';
import AddNewsPost from '../forms/AddNewsPost';
import AdminArtists from './AdminArtists';

const editionsView = (
  <div>
    <AddEdition></AddEdition>
    {/* TODO: Edit Edition, Delete Edition */}
  </div>
);

const newsPostView = (
  <div>
    <AddNewsPost></AddNewsPost>
    {/* TODO: Edit NewsPost, Delete NewsPost */}
  </div>
);

const clearSelections = () => {
  const selectionButtons = document.getElementsByClassName('admin-view-item');
  for (let i = 0; i < selectionButtons.length; i++) {
    selectionButtons[i].className = selectionButtons[i].className.replace(
      'selected',
      ''
    );
  }
};

const Admin = () => {
  const [selection, setSelection] = useState('artists');

  const onSelectionClick = (e) => {
    const selection = e.target;
    clearSelections();
    selection.className += ' selected';
    setSelection(selection.value);
  };

  return (
    <div className="container">
      <p className="x-large text-center my-2">Admin Page</p>
      <div className="text-center">
        <button
          value="artists"
          className="btn admin-view-item selected"
          onClick={onSelectionClick}
        >
          Artists
        </button>
        <button
          value="editions"
          className="btn admin-view-item"
          onClick={onSelectionClick}
        >
          Editions
        </button>
        <button
          value="newsposts"
          className="btn admin-view-item"
          onClick={onSelectionClick}
        >
          Newsposts
        </button>
      </div>
      {selection === 'artists' ? (
        <AdminArtists></AdminArtists>
      ) : selection === 'editions' ? (
        editionsView
      ) : (
        newsPostView
      )}
    </div>
  );
};

export default Admin;
