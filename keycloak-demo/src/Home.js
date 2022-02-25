import React from 'react';
import UserService from './UserService';

const Home = () => {
  return (
    <div>
      <h3>Welcome {UserService.getUserProfile().name || null}</h3>
    </div>
  );
};

export default Home;
