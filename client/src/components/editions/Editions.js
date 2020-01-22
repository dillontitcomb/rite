import React, { useContext, useEffect } from 'react';
import editionContext from '../../context/edition/editionContext';
import Edition from './Edition';

const Editions = () => {
  const EditionContext = useContext(editionContext);
  const { getEditions, editions, loading } = EditionContext;

  useEffect(() => {
    getEditions();
    // eslint-disable-next-line
  }, []);

  console.log(editions);

  return (
    <div className="editions my-1">
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          editions.map((edition, key) => (
            <Edition key={key} edition={edition}></Edition>
          ))
        )}
      </div>
    </div>
  );
};

export default Editions;
