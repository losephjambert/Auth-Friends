import React from 'react';

import Friends from './Friends';
import CreateFriendForm from './CreateFriendForm';

const FriendsContainer = () => {
  return (
    <>
      <CreateFriendForm />
      <Friends />
    </>
  );
};

export default FriendsContainer;
