import React, { useState } from 'react';

const ArtistItem = ({ artist }) => {
  const [state, setState] = useState({
    showMore: false,
  });

  const onClickArtist = () => {
    setState({ showMore: !state.showMore });
  };

  return (
    <div>
      <p>
        <span className="lead-sm artist-list-item" onClick={onClickArtist}>
          {artist.name}
        </span>
      </p>
      {state.showMore && (
        <div className="my-1">
          <p className="lead-sm">{artist.bio}</p>
        </div>
      )}
    </div>
  );
};

export default ArtistItem;
