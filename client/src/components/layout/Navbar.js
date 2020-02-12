import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const activateNavLinks = () => {
  const links = document.getElementsByClassName('nav-item');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
      let activeLink = document.getElementsByClassName('nav-active');
      activeLink[0].className = activeLink[0].className.replace(
        ' nav-active',
        ''
      );
      this.className += ' nav-active';
    });
  }
};

const Navbar = () => {
  activateNavLinks();
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout } = authContext;

  const onClick = () => {
    console.log('Loggin Out!');
    logout();
  };
  return (
    <div>
      <nav className="navbar">
        <div>
          <Link to="/">
            <img
              className="rite-logo"
              src="/img/logo-on-white.png"
              alt="RITE Editions Logo"
            />
          </Link>
        </div>
        <ul>
          <Link className="nav-item nav-active" to="/">
            Home
          </Link>
          <Link className="nav-item" to="/artists">
            Artists
          </Link>
          <Link className="nav-item" to="/editions">
            Editions
          </Link>
          <Link className="nav-item" to="/news">
            News
          </Link>
          <Link className="nav-item" to="/about">
            About
          </Link>
          {!isAuthenticated ? (
            <>
              <Link className="nav-item" to="/register">
                Register
              </Link>
              <Link className="nav-item" to="/login">
                Log In
              </Link>
            </>
          ) : (
            <>
              <Link to="/admin" className="nav-item">
                Admin
              </Link>
              <Link to="/" className="nav-item" onClick={onClick}>
                Logout
              </Link>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
