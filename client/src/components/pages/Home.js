import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='container home-container'>
      <div className='home-showcase my-2'>
        <Link to='/editions'>
          <img
            className='home-image'
            src='/img/laskey_home.jpg'
            alt='Ruth Laskey Twill'
          />
        </Link>
        <p className='large my-2'>
          Ruth Laskey,
          <strong>
            {' '}
            <i>Twill Series, 2021</i>
          </strong>
        </p>
        <p>
          RITE Editions, in collaboration with Ratio 3, is proud to announce,
          Twill Series, the first monograph to be published on the work of Ruth
          Laskey. Produced in a limited edition of 500, every aspect of the
          book's design was overseen by the artist. The resulting publication is
          a tactile artifact that provides an immersive survey of a singular
          artistic practice.
        </p>
        <br />
        <p>
          Monograph. Designed by Ruth Laskey and Ben Tear. Co-published by RITE
          Editions and Ratio 3. Hard back. Full color. 9.75 x 9.75”.
        </p>
        <p>$75</p>
        <p>
          To order, <a href='/shop.html'>visit our shop.</a>
        </p>
        <p className='lead-sm my-1'>
          <Link to='/editions/60c79e994745b31b00fcf161'>Learn More →</Link>
        </p>
      </div>
      <div className='home-upcoming'>
        <p className='large my-2'>New Edition Addition</p>
        <p className='lead-sm my-1'>
          <strong>
            Hung Liu, Jeffry Mitchell, and Leah Rosenberg,{' '}
            <em>Face Mask Project, </em>2020-2021
          </strong>
        </p>
        <p className='lead-sm my-1'>Set of 3 Masks</p>
        <p className='my-1'>
          In response to the Covid-19 crisis, the Face Mask Project, 2020 was
          developed to benefit the Artist Relief Fund (artistrelief.org) and the
          World Central Kitchen (wck.org). Artists, Hung Liu, Jeffry Mitchell
          and Leah Rosenberg each created face covering designs. The
          compositions were digitally transposed onto cotton, then sewn into
          non-surgical face masks. The face masks are co-produced with RITE
          Editions and the Rena Bransten Gallery in collaboration with Stevie
          Howell.
        </p>
        <img
          className='home-additional-image'
          src='/img/masks_3.jpg'
          alt='Face Mask Project'
        />
        <p>
          To order, <a href='/shop.html'>visit our shop.</a>
        </p>
        <p className='lead-sm my-1'>
          <Link to='/editions'>View Editions →</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
