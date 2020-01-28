import React from 'react';
import AddEdition from '../forms/AddEdition';
import AddNewsPost from '../forms/AddNewsPost';

const Admin = () => {
  return (
    <div className="container">
      <p className="x-large text-center my-2">Admin Page</p>
      <div className="my-2">
        <AddEdition></AddEdition>
        <AddNewsPost></AddNewsPost>
      </div>
    </div>
  );
};

export default Admin;
