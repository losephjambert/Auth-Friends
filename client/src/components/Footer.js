import React from 'react';
import { Link } from 'react-router-dom';

const date = new Date();

const Footer = () => {
  <footer>
    <p>&copy; {date.getFullYear()} Friends of Friends</p>
  </footer>;
};

export default Footer;
