import React, { useContext, useEffect } from 'react';
import editionContext from '../../context/edition/editionContext';

const SelectEdition = ({ onSelectEdition }) => {
  const EditionContext = useContext(editionContext);
  const { getEditions, editions } = EditionContext;

  const onSelectChange = (e) => {
    const index = e.target.options.selectedIndex;
    if (index < 1) {
      let emptyEdition = {
        editionArtists: [],
        newsPosts: [],
        title: '',
        year: '',
        description: '',
        files: [],
        price: '',
        available: false,
        _id: '',
      };
      onSelectEdition(emptyEdition);
    } else {
      const selection = editions[index - 1];
      onSelectEdition(selection);
    }
  };

  useEffect(() => {
    getEditions();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="my-1">
      <select onChange={onSelectChange} id="editions">
        <option value="placeholder">Select an edition...</option>
        {editions.map((edition, key) => (
          <option key={key} value={edition._id}>
            {edition.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectEdition;
