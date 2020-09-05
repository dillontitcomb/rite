import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container home-container">
      <div className="home-showcase my-2">
        <Link to="/editions">
          <img
            className="home-image"
            src="/img/face_mask_project.jpg"
            alt="Face Mask Project"
          />
        </Link>
        <p className="large my-2">
          Jeffry Mitchell & Leah Rosenberg,
          <strong>
            {' '}
            <i>Face Mask Project,</i> 2020
          </strong>
        </p>
        <p>
          In response to the Covid-19 crisis, the Face Mask Project, 2020 was
          developed to benefit the Artist Relief Fund (artistrelief.org) and the
          World Central Kitchen (wck.org). Artists, Leah Rosenberg and Jeffry
          Mitchell each created face covering designs. The compositions were
          digitally transposed onto cotton, then sewn into non-surgical face
          masks. The face masks are co-produced with RITE Editions and the Rena
          Bransten Gallery in collaboration with Stevie Howell.
        </p>
        <Link to="/editions/5f444110e8240b0c04a77a69" className="lead-sm">
          Learn More →
        </Link>
      </div>
      <div className="home-upcoming my-2">
        <p className="large my-2">Upcoming Editions & Fairs</p>
        <p className="lead-sm my-1">
          <strong>
            <i>Media Burn: Ant Farm and the Making of an Image</i>
          </strong>{' '}
          - available end of October
        </p>
        <p>Steve Seid</p>
        <p>Introduction by Chip Lord</p>
        <p>Paperback</p>
        <p>Color throughout</p>
        <p>9 x 12 inches</p>
        <p>128 pages</p>
        <p>
          Design by <a href="http://in-fo.co/">IN-FO.CO</a>
        </p>
        <p>Co-published by Inventory Press and RITE Editions</p>
        <p>2020</p>
        <p>$35</p>
        <p className="lead-sm my-1">
          <strong>
            <i>MUM</i>
          </strong>{' '}
          - available end of September
        </p>
        <p>Laeh Glenn</p>
        <p>Co-published by Apogee Graphics and RITE Editions</p>
        <p>In collaboration with Altman Siegel Gallery</p>
        <p>Fall 2020</p>
        <p>Designed by Apogee Graphics</p>
        <p>Digital printing</p>
        <p>56 pages</p>
        <p>Softbound. Perfect Bind.</p>
        <p>6 x 9.5&rdquo;</p>
        <p>Edition of 100</p>
        <p>Sales price (TBD)</p>
      </div>
    </div>
  );
};

export default Home;
