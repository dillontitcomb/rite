import React from 'react';
import { Link } from 'react-router-dom';

//Don't use <a> tags for client-side routing (clears app state!)

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <Link className="rite-logo" to="/home">
          <img src="/img/rite_logo.png" alt="RITE Editions Logo" />
        </Link>
        <ul>
          <Link className="nav-item" to="/">
            Home
          </Link>
          <Link className="nav-item" to="/about">
            About
          </Link>
          <Link className="nav-item" to="/editions">
            Editions
          </Link>
          <Link className="nav-item" to="/artworks">
            Related Artwork
          </Link>
          <Link className="nav-item" to="/news">
            News
          </Link>
          <Link className="nav-item" to="/shop">
            Buy Rite
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
