import PropTypes from 'prop-types';
import React from 'react';

// This is the full-page, detailed edition

const Edition = ({ edition: { author, title, date, imageLinks, blurb } }) => {
  return (
    <div>
      <p className="large">EXAMPLE EDITION:</p>
      <hr />
      <p className="lead my-1">
        {author}, <em>{title}</em>, {date}
      </p>
      <img src={imageLinks} alt={`${title}`} />
      <p>
        {blurb.split('\n').map((str, key) => {
          return (
            <p className="my-1" key={key}>
              {str}
            </p>
          );
        })}
      </p>
    </div>
  );
};

Edition.propTypes = {
  edition: PropTypes.object.isRequired
};

export default Edition;
