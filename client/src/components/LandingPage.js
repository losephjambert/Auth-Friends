import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <section>
      <h2>
        Welcome to Auth Friends, brought to you by Friends of Friends, your favorite neighborhood friend factory.{' '}
        <Link to='/login'>Login</Link>
        to make some friends 😉
      </h2>
    </section>
  );
};

export default LandingPage;
