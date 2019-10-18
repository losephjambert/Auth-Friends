import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector(state => state.user);

  const LogLink = user.isLoggedIn ? (
    <Link to="/">Logout</Link>
  ) : (
    <Link to="/login">Login</Link>
  );

  return (
    <header>
      <h1>Auth Friends</h1>
      <nav>
        {LogLink}
        <Link to="/friends">Friends</Link>
      </nav>
    </header>
  );
};

export default Header;
