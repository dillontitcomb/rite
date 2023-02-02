import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='container home-container'>
      <div className='home-showcase my-2'>
        <Link to='/editions'>
          <img className='home-image' src='/img/recent_publications/gv002.jpeg' alt='Ruth Laskey Twill' />
        </Link>
        <p className='large my-2'>
          <Link to='/editions/63730f77f0421e8c949ddfb2'>
            Gabriel Sierra, <em>The Fingerprints of Bruce Nauman</em>, 2018-2022
          </Link>
        </p>
        <p>Published by RITE Editions</p>
        <p>Curated by Apsara DiQuinzio</p>
        <p>Cast iron, painted paper with fluor paint</p>
        <p>3.5 x 2.5” (8.8 x 6.4 cm)</p>
        <p>1.1 lbs </p>
        <p>Limited edition of 20</p>
        <p>Signed and numbered by the artist</p>
        <p>
          <strong>$700</strong>
        </p>

        {/* <p className='lead-sm'>
          RE publications will be available at the SFMOMA Small Press Book Bazaar,
          <strong> December 1st, 2022</strong>, 1–8 p.m.
        </p> */}
        {/* <p className='lead-sm my-1'>
          <a href='https://www.sfmoma.org/event/2022-small-press-book-bazaar/'>Click here for more information.</a>
        </p> */}

        <br />
        <p>
          To order a recent edition, <a href='/shop.html'>visit our shop.</a>
        </p>
      </div>
      <div className='home-upcoming'>
        {/* <p className='large'>New and Upcoming 2022-2023</p> */}
        <p className='lead-sm'>
          <Link to='/editions'>View More Editions →</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
