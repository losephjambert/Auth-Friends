import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, useParams, Redirect } from 'react-router-dom';

import {
  FRIENDS_EDITING_START,
  FRIENDS_UPDATE_START,
  FRIENDS_UPDATE_SUCCESS,
  FRIENDS_UPDATE_FAILURE,
} from '../../actions';

const EditFriend = props => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('edit friend useEffect');
    dispatch({ type: FRIENDS_EDITING_START, payload: id });
  }, [dispatch, id]);

  if (Number(id) !== props.id) return null;

  return (
    <form>
      <div>
        <input type='text' placeholder='Name' name='name' defaultValue={props.name} />
      </div>
      <div>
        <input type='number' placeholder='Age' name='age' defaultValue={props.age} />
      </div>
      <div>
        <input type='email' placeholder='Email' name='email' defaultValue={props.email} />
      </div>
      <div>
        <input type='submit' />
      </div>
    </form>
  );
};

const FriendCard = props => {
  const dispatch = useDispatch();

  // const handleClick = id => {
  //   console.log('dispatch action to flip editing toggle and set editing id');
  //   dispatch({ type: FRIENDS_EDITING_START, payload: id });
  // };

  // if (props.friend.editing && props.friend.id === props.id)
  //   return <Route path='/friends/edit/:id' render={() => <EditFriend {...props} />} />;
  // console.log(`Are we editing? --> ${props.friend.editing && Number(props.friend.id) === props.id ? 'yes' : 'no'}`);
  const editing = props.friend.editing && Number(props.friend.id) === props.id;

  let Card = (
    <>
      <h3>{props.name}</h3>
      <ul>
        <li>{props.age}</li>
        <li>{props.email}</li>
      </ul>
      <Link to={`/friends/edit/${props.id}`}>Edit Link</Link>
    </>
  );
  if (editing) Card = null;

  return (
    <figure>
      <div>{Card}</div>
      <div>
        <Route path='/friends/edit/:id' render={() => <EditFriend {...props} />} />
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
