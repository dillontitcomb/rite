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
            src='/img/recent_publications/editions.jpg'
            alt='Ruth Laskey Twill'
          />
        </Link>
        <p className='large my-2'>Recent RITE Editions Publications</p>
        <p>Publications clockwise: </p>
        <br />
        <p>
          Jenny Monick, <em>Spiral</em>. Ruth Laskey, <em>Twill Series</em>.
          <em>Steven Leiber Catalogs</em>. Elisheva Biernoff, <em>One Day</em>.
          Veronica De Jesus, <em>People are a light to Love</em>. Laeh Glenn,
          <em>MUM</em>. Media Burn, <em>Ant Farm and the Making of an Image</em>
          .
        </p>
        <br />
        <p>
          RE publications will be available at the SFABF 2022,{' '}
          <strong>July 14-17th</strong> at Minnesota Street Projects.
        </p>
        <p className='lead-sm my-1'>
          <a href='https://sfartbookfair.com/'>
            Click here for more information.
          </a>
        </p>
        <p>
          To order a recent edition, <a href='/shop.html'>visit our shop.</a>
        </p>
      </div>
      <div className='home-upcoming'>
        <p className='large my-2'>Upcoming Editions 2022-2023</p>
        <p>
          Three new RITE Editions are in progress and will be launched in early
          2023.
        </p>
        <Link to='/newsPosts/62b270aa3e83240018325eec'>Learn More →</Link>
        <p className='lead-sm my-1'>
          <Link to='/editions'>View Editions →</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
