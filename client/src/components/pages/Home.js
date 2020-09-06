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
        <p className="lead-sm my-1">
          <Link to="/editions/5f444110e8240b0c04a77a69">Learn More →</Link>
        </p>
      </div>
      <div className="home-upcoming">
        <p className="large my-2">Upcoming Editions</p>
        <p className="lead-sm my-1">
          <strong>
            <i>Media Burn: Ant Farm and the Making of an Image</i>
          </strong>{' '}
          - available Fall 2020
        </p>
        <p>
          Steve Said. Monograph. Introduction by Chip Lord. Co-published by RITE
          Editions and Inventory Press 2020. Design by{' '}
          <a href="http://in-fo.co/">IN-FO.CO</a>. Paperback. Full color. 9
          x12”. 128 pages. $35.
        </p>

        <p className="lead-sm my-1">
          <strong>
            <i>MUM</i>
          </strong>{' '}
          - available September 2020
        </p>
        <p>
          Laeh Glenn. Artist’s book. Co-published by Apogee Graphics and RITE
          Editions in collaboration with Altman Siegel Gallery, 2020. Designed
          by Apogee Graphics. Limited edition. Paperback. Digital printing. Full
          color. 6 x 9.5”. 56 pages. Sales price tbd.
        </p>
        <p className="lead-sm my-1">
          <Link to="/editions/5f444110e8240b0c04a77a69">View Editions →</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
