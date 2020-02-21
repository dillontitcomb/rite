import React from 'react';
import AddArtist from '../forms/AddArtist';
import DeleteArtist from '../forms/DeleteArtist';
import EditArtist from '../forms/EditArtist';

const AdminArtists = () => {
  return (
    <div>
      <AddArtist></AddArtist>
      <EditArtist></EditArtist>
      <DeleteArtist></DeleteArtist>
    </div>
  );
};

export default AdminArtists;
