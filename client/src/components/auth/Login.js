import React, { useState } from 'react';

const initialFormValues = {
  username: '',
  password: '',
};

const Login = () => {
  const formValues = useState(initialFormValues);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    console.log(e.target.name, e.target.value);
  };

  const { username, password } = formValues;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' onChange={handleChange} defaultValue={username} />
      </div>
      <div>
        <label htmlFor='password'>Username</label>
        <input type='password' name='username' onChange={handleChange} defaultValue={password} />
      </div>
      <input type='button' value='Login' />
    </form>
  );
};

export default Login;
