import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container home-container">
      <div className="home-showcase my-2">
        <Link to="/editions">
          <img
            className="home-image"
            src="/img/uploads/matriarchy/Manfredi_001.jpg"
            alt="Tucker Nichols Painting"
          />
        </Link>
        <p className="large my-2">
          <Link to="/editions/66a0571e6e1850176a61c2c8">
            Isabella Manfredi, <em>Matriarchy</em>, 2024
          </Link>
        </p>
        <p>
          I started printing on fabric when I attended UC Berkeley in 2017. The
          first images I printed on fabric were scans of calling cards my
          grandmother left me in an album that also contained stamps from the
          early 1900’s. The cards and the stamps were collected by my great
          grandmother’s on my mom’s side. “Matriarch” is the latest rendition of
          this textile that I have been developing since those first prints on
          fabric. The square image with the flowers in a vase is from the album
          and is a persistent calling card image that I continue to use in my
          work. When I took the card out of the album it tore, and my
          fingerprint smudged the image. I pieced it back together and scanned
          it. This image of the flower and the vase is the touchstone to all the
          other images; it is feminine and beautiful, broken and torn.
        </p>
        <br />
        <p>
          I am drawn to nature for image sourcing and find things in my everyday
          life to photograph and film for use in my fabric prints. A dead
          butterfly I found on the Market Street bike path or possibly on a rock
          at the Yuba River, a bouquet of flowers I picked at the farm I worked
          on over the summer, shells I found on the beach in Baja, a flower
          picture my sister sent me; these are all objects that I find deep
          connection with.
        </p>
        <br />
        <p>
          Over the years I've been progressively more interested in death and
          decay as an aspect of the original calling card images. For example, I
          took photos of skulls in the Capuchin Crypt while visiting Rome last
          spring. Candles I burn in my studio also remind me of the passing of
          time and the inevitable unraveling of life. Matriarch is a meditation
          on life and death and an effort to honor the women in my family who
          came before me.
        </p>
        <br />
        <p>RITE Editions</p>
        <p>Hand printed linen</p>
        <p>Edition of 40</p>
        <p>26 x 26”</p>
        <p>
          <strong>$75</strong>
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
          To order a recent edition, <a href="/shop.html">visit our shop.</a>
        </p>
      </div>
      <div className="home-upcoming">
        {/* <p className='large'>New and Upcoming 2022-2023</p> */}
        <p className="lead-sm">
          <Link to="/editions">View More Editions →</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
