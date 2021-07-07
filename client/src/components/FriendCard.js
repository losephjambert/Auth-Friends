import React from 'react';
import { Link } from 'react-router-dom';

const FriendCard = ({ age, name, email, id }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{email}</p>
      {/* <Link to={`/friends/edit/${id}`}>Edit</Link> */}
    </div>
  );
};

export default FriendCard;
