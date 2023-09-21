import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Home = () => {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />

      <h2>Signup</h2>
      <SignupForm />
    </div>
  );
};

export default Home;
