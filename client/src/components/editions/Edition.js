import PropTypes from 'prop-types';
import React from 'react';

// This is the full-page, detailed edition

const Edition = ({
  edition: { author, title, year, description, filePaths }
}) => {
  return (
    <div>
      <p className="x-large my-1">
        {author}, <em>{title}</em>, {year}
      </p>
      <img src={filePaths[0]} alt={`${title}`} />
      <p className="large my-1">{author.toUpperCase()}</p>
      <p className="lead">
        <em>
          <strong>
            {title}, {year}
          </strong>
        </em>
      </p>
      {description.split('\n').map((str, key) => {
        return (
          <p className="my-1" key={key}>
            {str}
          </p>
        );
      })}
    </div>
  );
};

Edition.propTypes = {
  edition: PropTypes.object.isRequired
};

export default Edition;
