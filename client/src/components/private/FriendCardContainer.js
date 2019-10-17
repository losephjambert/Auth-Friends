import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, useParams, useHistory } from 'react-router-dom';
import useForm from 'react-hook-form';

import { updateFriend } from '../../api';
import { FRIENDS_EDITING, FRIENDS_UPDATE_START, FRIENDS_UPDATE_SUCCESS, FRIENDS_UPDATE_FAILURE } from '../../actions';

const EditFriend = props => {
  const { id } = useParams();
  const { push } = useHistory();
  const { register, handleSubmit, errors } = useForm();

  // useEffect(() => {
  //   !props.editing && dispatch({ type: FRIENDS_EDITING_START, payload: id });
  // }, [dispatch, id, props.editing]);

  const onSubmit = formValues => {
    updateFriend(
      formValues,
      props.id,
      {
        start: payload => props.dispatch({ type: FRIENDS_UPDATE_START, payload }),
        success: payload => props.dispatch({ type: FRIENDS_UPDATE_SUCCESS, payload }),
        error: payload => props.dispatch({ type: FRIENDS_UPDATE_FAILURE, payload }),
      },
      () => push('/friends')
    );
  };

  const handleClick = () => {
    props.dispatch({ type: FRIENDS_EDITING, payload: { id: null, editing: false } });
  };

  return (
    <>
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
          <input
            type='number'
            placeholder='Age'
            name='age'
            ref={register({ required: true })}
            defaultValue={props.age}
          />
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
      <Link onClick={() => handleClick()} to={`/friends`}>
        Cancel Editing
      </Link>
    </>
  );
};

const FriendCard = props => {
  const editing = props.friend.editing && Number(props.friend.id) === props.id;
  const handleClick = () => {
    props.dispatch({ type: FRIENDS_EDITING, payload: { id: props.id, editing: true } });
  };
  return (
    <figure>
      {!editing && (
        <>
          <h3>{props.name}</h3>
          <ul>
            <li>{props.age}</li>
            <li>{props.email}</li>
          </ul>
          <Link onClick={() => handleClick()} to={`/friends/edit/${props.id}`}>
            Edit
          </Link>
        </>
      )}
      <div>
        <Route
          path='/friends/edit/:id'
          render={({ match: { params } }) => {
            return Number(params.id) === props.id && <EditFriend {...props} />;
          }}
        />
      </div>
    </figure>
  );
};

const FriendCardContainer = props => {
  const friend = useSelector(state => state.friends.updateFriend);
  const dispatch = useDispatch();
  // const editing = friend.editing && Number(friend.id) === props.id;
  // const handleClick = id => {
  //   dispatch({ type: FRIENDS_EDITING_START, payload: id });
  // };

  return (
    <>
      <FriendCard {...props} friend={friend} dispatch={dispatch} />
    </>
  );
};

export default FriendCardContainer;
