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
            src="/img/recent_publications/01_Nichols.jpg"
            alt="Tucker Nichols Painting"
          />
        </Link>
        <p className="large my-2">
          <Link to="/editions/66a0571e6e1850176a61c2c8">
            Tucker Nichols, <em>Untitled flowers</em>, 2024
          </Link>
        </p>
        <p>
          During the pandemic shutdowns in 2020, Nichols began to send flower
          paintings to sick people on behalf of their loved ones, eventually
          sending thousands of small paintings to those in need. The project,
          “Flowers for Sick People,” became an outlet that helped Nichols “stop
          scrolling and participate in our strange times.” This set of prints
          are based on small flower paintings from this project.
        </p>
        <br />
        <p>
          RITE Editions most recent edition, co-published with Gallery 16, is a
          visual celebration. The Tucker Nichols 2024 prints are a needed
          antidote for our complicated times. These works are joyous and
          gorgeous and restorative. Working with the artist, Troy Peters,
          Gallery 16 Master Printer, produced a special edition of 3 flower
          images. Retaining the subtle details and vibrant colors of Tucker’s
          paintings, these extraordinary prints are intimate and at the same
          time spectacular.{" "}
        </p>
        <br />
        <p>Co published by Gallery 16 and RITE Editions</p>
        <p>Pigment print</p>
        <p>On archival Optica 300gsm fine art stock.</p>
        <p>20 x 16”</p>
        <p>Edition of 50</p>
        <p>
          <strong>$100</strong>
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
