import React from 'react';
import '../style/Navbar.css';

const Navbar = () => {
  const navigateToHome = () => {
    window.location.href = '/';
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span className="navbar__logo-text" onClick={navigateToHome}>
          🤡 Joke.py 🤡
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
