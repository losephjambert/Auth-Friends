import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, useParams, Redirect } from 'react-router-dom';
import useForm from 'react-hook-form';

import { updateFriend } from '../../api';
import {
  FRIENDS_EDITING_START,
  FRIENDS_UPDATE_START,
  FRIENDS_UPDATE_SUCCESS,
  FRIENDS_UPDATE_FAILURE,
} from '../../actions';

const EditFriend = props => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, watch } = useForm();

  // useEffect(() => {
  //   console.log('edit friend useEffect');
  //   dispatch({ type: FRIENDS_EDITING_START, payload: id });
  // }, [dispatch, id]);

  if (Number(id) !== props.id) return null;

  const onSubmit = formValues => {
    console.log('form values ', formValues);
    updateFriend(formValues, props.id, {
      start: payload => dispatch({ type: FRIENDS_UPDATE_START, payload }),
      success: payload => dispatch({ type: FRIENDS_UPDATE_SUCCESS, payload }),
      error: payload => dispatch({ type: FRIENDS_UPDATE_FAILURE, payload }),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type='text'
          placeholder='Name'
          name='name'
          ref={register({ required: true })}
          defaultValue={props.name}
        />
        <p>{errors.name && 'A name is required'}</p>
      </div>
      <div>
        <input type='number' placeholder='Age' name='age' ref={register({ required: true })} defaultValue={props.age} />
        <p>{errors.age && 'An age is required'}</p>
      </div>
      <div>
        <input
          type='email'
          placeholder='Email'
          name='email'
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          defaultValue={props.email}
        />
        <p>{errors.name && 'A valid email is required'}</p>
      </div>
      <div>
        <input type='submit' />
      </div>
    </form>
  );
};

const FriendCard = props => {
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
  const friend = useSelector(state => state.friends.updateFriend);
  // The Friend Card can be in one of two states:
  // 1. Editing
  // 2. Not Editing

  // We'll need to connect to the redux store to gain access to the above states
  // so that we can render the correct component depending on the state

  // pass the editing prop to a child
  return <FriendCard {...props} friend={friend} />;
};

export default FriendCardContainer;
