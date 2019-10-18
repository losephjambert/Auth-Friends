import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledHeader = styled.div`
  h1 {
  }
`;

const Header = () => {
  const user = useSelector(state => state.user);

  const LogLink = user.isLoggedIn ? (
    <Link to="/">Logout</Link>
  ) : (
    <Link to="/login">Login</Link>
  );

  return (
    <header>
      <StyledHeader>
        <h1 className="title">Auth Friends</h1>
        <nav>
          {LogLink}
          <Link to="/friends">Friends</Link>
        </nav>
      </StyledHeader>
    </header>
  );
};

export default Header;
