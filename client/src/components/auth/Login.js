import React, { useState, useEffect } from "react";
import { login } from "../../api";

import { useSelector, useDispatch } from "react-redux";
import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} from "../../actions";

const initialFormValues = {
  username: "Lambda School",
  password: "i<3Lambd4"
};

const Login = props => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (user.isLoggedIn) {
      props.history.push("/friends");
    }
  }, [user.isLoggedIn, props.history]);

  const handleSubmit = e => {
    e.preventDefault();
    login(formValues, {
      start: payload => dispatch({ type: USER_LOGIN_START, payload }),
      success: payload => dispatch({ type: USER_LOGIN_SUCCESS, payload }),
      error: payload => dispatch({ type: USER_LOGIN_FAILURE, payload })
    });
  };

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const { username, password } = formValues;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={username}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="username"
          onChange={handleChange}
          value={password}
        />
      </div>
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
