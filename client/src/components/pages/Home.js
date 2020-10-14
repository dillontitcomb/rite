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
            src="/img/face_mask_project2.jpg"
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
        <p className="lead-sm my-1"><strong>Woody De Othello. <em>Jigsaw Puzzle.</em></strong> Available in December 2020.</p>
        <p>5 original color images by Woody De Othello (with 3 puzzles per image). Co-published by RITE Editions, Jessica Silverman Gallery, San Francisco, Karma Gallery, New York. In collaboration with Mark A. Rodriguez and Soulfrawg Puzzles. 2020. Maximum dimensions: 10 x 12”. </p>
        <p>Approximately 150 pieces.</p>
        <p>Edition of 15.</p>
        <p>*Pre-orders available. Submit your order on the <em>Inquiry</em> page.</p>
        <br/>
        <p>The limited edition jigsaw puzzle will have hand cut wooden pieces; each puzzle will be unique. The puzzles are intended to be challenging. They will be in the tradition of jigsaws that have no guiding images. </p>
        <p className="lead-sm my-1">
          <Link to="/editions">View Editions →</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
