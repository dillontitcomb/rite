import React, { useContext, useEffect } from 'react';
import editionContext from '../../context/edition/editionContext';
import EditionItem from './EditionItem';
import './Editions.css';

const Editions = () => {
  const EditionContext = useContext(editionContext);
  const { getEditions, editions, loading } = EditionContext;

  useEffect(() => {
    getEditions();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="container">
        <p className="x-large my-1">The Editions</p>
        <hr className="my-1" />
        <div className="editions-grid">
          {loading ? (
            <p>Loading...</p>
          ) : (
            editions.map((edition, key) => (
              <EditionItem key={key} edition={edition}></EditionItem>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Editions;
