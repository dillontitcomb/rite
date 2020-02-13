import React from 'react';
import AddArtist from '../forms/AddArtist';
import EditArtist from '../forms/EditArtist';

const AdminArtists = () => {
  return (
    <div>
      <EditArtist></EditArtist>
      <AddArtist></AddArtist>
    </div>
  );
};

export default AdminArtists;
