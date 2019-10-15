import React, { useState } from 'react';
import { login } from '../../api';

const initialFormValues = {
  username: 'Lambda School',
  password: 'i<3Lambd4',
};

const Login = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleSubmit = e => {
    e.preventDefault();
    login(formValues);
  };

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const { username, password } = formValues;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' onChange={handleChange} defaultValue={username} />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' name='username' onChange={handleChange} defaultValue={password} />
      </div>
      <input type='submit' value='Login' />
    </form>
  );
};

export default Login;
