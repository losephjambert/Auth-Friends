import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  FRIENDS_EDITING_START,
  FRIENDS_UPDATE_START,
  FRIENDS_UPDATE_SUCCESS,
  FRIENDS_UPDATE_FAILURE,
} from '../../actions';

const FriendCard = props => {
  const dispatch = useDispatch();

  const handleClick = id => {
    console.log('dispatch action to flip editing toggle and set editing id');
    dispatch({ type: FRIENDS_EDITING_START, payload: id });
  };

  if (props.friend.editing && props.friend.id === props.id) return <form>edit form goes here</form>;

  return (
    <figure>
      <h3>{props.name}</h3>
      <ul>
        <li>{props.age}</li>
        <li>{props.email}</li>
      </ul>
      <div>
        <button onClick={() => handleClick(props.id)}>Edit</button>
      </div>
    </figure>
  );
};

const FriendCardContainer = props => {
  // This component will display the Friend Card, rendered inside the FriendsContainer
  // const friend = useSelector(state => state.friends.friends.find(f => f.id === props.id));
  const friend = useSelector(state => state.friends.friend);
  // The Friend Card can be in one of two states:
  // 1. Editing
  // 2. Not Editing

  // We'll need to connect to the redux store to gain access to the above states
  // so that we can render the correct component depending on the state

  // pass the editing prop to a child
  return <FriendCard {...props} friend={friend} />;
};

export default FriendCardContainer;
