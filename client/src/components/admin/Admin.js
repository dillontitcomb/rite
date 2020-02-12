import React, { useState } from 'react';
import AddArtist from '../forms/AddArtist';
import AddEdition from '../forms/AddEdition';
import AddNewsPost from '../forms/AddNewsPost';

const Admin = () => {
  const [selection, setSelection] = useState('artists');

  const activateSelections = () => {
    const selectionButtons = document.getElementsByClassName('admin-view-item');
    for (let i = 0; i < selectionButtons.length; i++) {
      selectionButtons[i].addEventListener('click', function() {
        let selectedButton = document.getElementsByClassName('selected');

        selectedButton[0].className = selectedButton[0].className.replace(
          'selected',
          ''
        );
        this.className += ' selected';
        setSelection(selectedButton[0].value);
      });
    }
  };

  activateSelections();

  return (
    <div className="container">
      <p className="x-large text-center my-2">Admin Page</p>
      <div className="text-center">
        <button value="artists" className="btn admin-view-item selected">
          Artists
        </button>
        <button value="editions" className="btn admin-view-item">
          Editions
        </button>
        <button value="newsposts" className="btn admin-view-item">
          Newsposts
        </button>
      </div>
      {selection === 'artists' ? (
        <p>Artists!</p>
      ) : selection === 'editions' ? (
        <p>Editions!</p>
      ) : (
        <p>NewsPosts!</p>
      )}
      <div className="form-container">
        <AddArtist></AddArtist>
      </div>
      <div className="form-container">
        <AddEdition></AddEdition>
      </div>
      <div className="form-container">
        <AddNewsPost></AddNewsPost>
      </div>
    </div>
  );
};

export default Admin;
