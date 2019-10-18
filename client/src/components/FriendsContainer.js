import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchFriends, createFriend, updateFriend } from "../api";
import {
  FRIENDS_FETCH_START,
  FRIENDS_FETCH_SUCCESS,
  FRIENDS_FETCH_ERROR,
  FRIENDS_CREATE_START,
  FRIENDS_CREATE_SUCCESS,
  FRIENDS_CREATE_ERROR,
  FRIENDS_UPDATE_START,
  FRIENDS_UPDATE_SUCCESS,
  FRIENDS_UPDATE_ERROR
} from "../actions";

import {} from "../actions";

import FriendCard from "./FriendCard";
import FriendForm from "./FriendForm";

const FriendsContainer = props => {
  const friends = useSelector(state => state.friends);
  const dispatch = useDispatch();
  const { history, match } = props;

  useEffect(() => {
    fetchFriends({
      start: payload => dispatch({ type: FRIENDS_FETCH_START, payload }),
      success: payload => dispatch({ type: FRIENDS_FETCH_SUCCESS, payload }),
      error: payload => dispatch({ type: FRIENDS_FETCH_ERROR, payload })
    });
  }, [dispatch]);

  const createFriendHandler = formValues => {
    createFriend(formValues, {
      start: payload => dispatch({ type: FRIENDS_CREATE_START, payload }),
      success: payload => dispatch({ type: FRIENDS_CREATE_SUCCESS, payload }),
      error: payload => dispatch({ type: FRIENDS_CREATE_ERROR, payload })
    });
  };

  const updateFriendHandler = (formValues, id) => {
    updateFriend(
      formValues,
      id,
      {
        start: payload => dispatch({ type: FRIENDS_UPDATE_START, payload }),
        success: payload => dispatch({ type: FRIENDS_UPDATE_SUCCESS, payload }),
        error: payload => dispatch({ type: FRIENDS_UPDATE_ERROR, payload })
      },
      () => history.push("/friends")
    );
  };

  const Friends = friends.friends.map(friend => {
    let Friend;
    if (Number(match.params.id) === friend.id) {
      Friend = (
        <div key={friend.id}>
          <FriendForm
            submitHandler={updateFriendHandler}
            defaultFormValues={friend}
          />
          <Link to="/friends">Cancel Editing</Link>
        </div>
      );
    } else {
      Friend = (
        <div key={friend.id}>
          <FriendCard {...friend} />
          <Link to={`/friends/edit/${friend.id}`}>Edit</Link>
        </div>
      );
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
