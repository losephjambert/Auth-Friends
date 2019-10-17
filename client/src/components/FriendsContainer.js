import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchFriends, createFriend, updateFriend } from '../api';
import {
  FRIENDS_FETCH_START,
  FRIENDS_FETCH_SUCCESS,
  FRIENDS_FETCH_FAILURE,
  FRIENDS_CREATE_START,
  FRIENDS_CREATE_SUCCESS,
  FRIENDS_CREATE_FAILURE,
  FRIENDS_UPDATE_START,
  FRIENDS_UPDATE_SUCCESS,
  FRIENDS_UPDATE_FAILURE,
} from '../actions';

import {} from '../actions';

import FriendCard from './FriendCard';
import FriendForm from './FriendForm';

const FriendsContainer = props => {
  const friends = useSelector(state => state.friends);
  const dispatch = useDispatch();
  const { history, match } = props;

  useEffect(() => {
    fetchFriends({
      start: payload => dispatch({ type: FRIENDS_FETCH_START, payload }),
      success: payload => dispatch({ type: FRIENDS_FETCH_SUCCESS, payload }),
      error: payload => dispatch({ type: FRIENDS_FETCH_FAILURE, payload }),
    });
  }, [dispatch]);

  const createFriendHandler = formValues => {
    createFriend(formValues, {
      start: payload => dispatch({ type: FRIENDS_CREATE_START, payload }),
      success: payload => dispatch({ type: FRIENDS_CREATE_SUCCESS, payload }),
      error: payload => dispatch({ type: FRIENDS_CREATE_FAILURE, payload }),
    });
  };

  const updateFriendHandler = (formValues, id) => {
    updateFriend(
      formValues,
      id,
      {
        start: payload => dispatch({ type: FRIENDS_UPDATE_START, payload }),
        success: payload => dispatch({ type: FRIENDS_UPDATE_SUCCESS, payload }),
        error: payload => dispatch({ type: FRIENDS_UPDATE_FAILURE, payload }),
      },
      () => history.push('/friends')
    );
  };

  const Friends = friends.friends.map(friend => {
    let Friend;
    if (Number(match.params.id) === friend.id) {
      Friend = <FriendForm submitHandler={updateFriendHandler} key={friend.id} defaultFormValues={friend} />;
    } else {
      Friend = <FriendCard {...friend} key={friend.id} />;
    }
    return Friend;
  });

  return (
    <>
      {Friends}
      <FriendForm submitHandler={createFriendHandler} />
    </>
  );
};

export default FriendsContainer;
