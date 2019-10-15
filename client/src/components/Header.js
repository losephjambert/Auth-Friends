import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  <header>
    <h1>Auth Friends</h1>
    <nav>
      <Link to='login'>Login</Link>
      <Link to='friends'>Friends</Link>
    </nav>
  </header>;
};

export default Header;
