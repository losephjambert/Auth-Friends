import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { StyledNavLink } from "../styles";
import Logout from "./auth/Logout";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 8vmin;
  }

  nav a {
    padding: 15px;
    padding-left: 0;
    margin: 15px;
    margin-left: 0;
    font-size: 2rem;
  }
`;

const Header = () => {
  const user = useSelector(state => state.user);

  const LogLink = user.isLoggedIn ? (
    <Logout />
  ) : (
    <StyledNavLink to="/login" activeClassName="active">
      Login
    </StyledNavLink>
  );

  return (
    <StyledHeader>
      <header>
        <h1 className="title">Auth Friends</h1>
        <nav>
          {LogLink}
          <StyledNavLink to="/friends" activeClassName="active">
            Friends
          </StyledNavLink>
        </nav>
      </header>
    </StyledHeader>
  );
};

export default Header;
