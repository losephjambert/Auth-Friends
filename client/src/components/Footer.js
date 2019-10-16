import React from "react";

const date = new Date();

const Footer = () => {
  return (
    <footer>
      <p>&copy; {date.getFullYear()} Friends of Friends</p>
    </footer>
  );
};

export default Footer;
