import React, { useContext, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import EditionContext from '../../context/edition/editionContext';

// Format Artist Names
const formatArtists = (artists) => {
  if (artists.length < 3) {
    return artists.join(' & ');
  } else {
    let last = artists[artists.length - 1];
    let rest = artists.slice(0, artists.length - 1);
    return rest.join(', ') + ', and ' + last;
  }
};

// This is the full-page, detailed edition

const Edition = ({ match }) => {
  const editionContext = useContext(EditionContext);
  const { getEditionWithArtistData, edition, loading } = editionContext;

  useEffect(() => {
    getEditionWithArtistData(match.params.id);
    // eslint-disable-next-line
  }, []);

  const { editionArtists, title, year, description, filePaths } = edition;
  const artistNames = editionArtists.map((artist) => artist.name);

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p className="x-large my-1">
            {artistNames.length > 0 && formatArtists(artistNames) + ', '}
            <em>{title}</em>, {year}
          </p>

          <Carousel autoplay>
            {filePaths.map((file, key) => (
              <img key={key} alt={title} src={filePaths[key]}></img>
            ))}
          </Carousel>

          <p className="large my-1">
            {artistNames && formatArtists(artistNames)}
          </p>
          <p className="lead">
            <em>
              <strong>
                {title}, {year}
              </strong>
            </em>
          </p>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
      )}
    </div>
  );
};

export default Edition;
