import React from 'react';
import Edition from './Edition';

const editionObject = {
  author: 'Jeffry Mitchell',
  title: 'Gold Key',
  date: '2017',
  imageLinks: `img/slc.jpg`,
  blurb:
    "Jeffry Mitchell, Gold Key, RITE Edition, Seattle, 2017. \nCeramic glazed gold. Edition of 13. Approximately 7.5 × 2.75 × 0.5'.Sits inside of artist- made box, 8.25 × 3.75 × 1.5'.\n $425.\n Each key comes with an authenticity certificate signed and dated by Jeffry Mitchell."
};

const Editions = () => {
  return (
    <div className="editions my-2">
      <div className="container">
        <p className="x-large">Editions page!</p>
        <Edition edition={editionObject}></Edition>
      </div>
    </div>
  );
};

export default Editions;
