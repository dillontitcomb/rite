import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <Link to="/editions">
      <div class="home-header-backdrop"></div>
    </Link>
  );
};

export default Home;