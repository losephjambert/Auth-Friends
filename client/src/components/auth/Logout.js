import React from "react";
import { useDispatch } from "react-redux";
import { StyledNavLink } from "../../styles";

import { USER_LOGOUT } from "../../actions";

const Logout = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: USER_LOGOUT });
  };
  return (
    <StyledNavLink to="/" onClick={handleClick}>
      Logout
    </StyledNavLink>
  );
};

export default Logout;
