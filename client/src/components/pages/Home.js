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
            src="/img/othello_1.jpg"
            alt="Face Mask Project"
          />
        </Link>
        <p className="large my-2">
          Woody De Othello,
          <strong>
            {' '}
            <i>Jigsaw Puzzle, 2020-21</i> 
          </strong>
        </p>
        <p>
          The limited-edition jigsaw puzzles are hand cut by Mark A. Rodriquez and Soulfrawg Puzzles. Each puzzle varies in the number of pieces and the configuration. The puzzles are intended to be challenging. There are no images or straight edges to guide the user. Woody De Othello’s design will be revealed when the owner completes the puzzle. 
        </p>
        <p className="lead-sm my-1">
          <Link to="/editions/6035c4373a86003d60a914ed">Learn More →</Link>
        </p>
      </div>
      <div className="home-upcoming">
        <p className="large my-2">New Edition Addition</p>
        <p className="lead-sm my-1"><strong>Hung Liu, Jeffry Mitchell, and Leah Rosenberg, <em>Face Mask Project, </em>2020-2021</strong></p>
        <p className="lead-sm my-1">Set of 3 Masks</p>
        <p>In response to the Covid-19 crisis, the Face Mask Project, 2020 was developed to benefit the Artist Relief Fund (artistrelief.org) and the World Central Kitchen (wck.org). Artists, Hung Liu, Jeffry Mitchell and Leah Rosenberg each created face covering designs. The compositions were digitally transposed onto cotton, then sewn into non-surgical face masks. The face masks are co-produced with RITE Editions and the Rena Bransten Gallery in collaboration with Stevie Howell.</p>
        <p className="my-1"><i>*For purchase, navigate to the Buy RITE tab.</i></p>
        <p className="lead-sm my-1">
          <Link to="/editions">View Editions →</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
