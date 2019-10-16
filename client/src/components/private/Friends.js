import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFriends } from '../../api';
import { FRIENDS_FETCH_START, FRIENDS_FETCH_SUCCESS, FRIENDS_FETCH_FAILURE } from '../../actions';

const Friends = () => {
  const friends = useSelector(state => state.friends);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchFriends({
      start: payload => dispatch({ type: FRIENDS_FETCH_START, payload }),
      success: payload => dispatch({ type: FRIENDS_FETCH_SUCCESS, payload }),
      error: payload => dispatch({ type: FRIENDS_FETCH_FAILURE, payload }),
    });
  }, [dispatch]);

  return (
    <div>
      <h2>This is the super secret friends page, only for ~~authenticated~~ friends</h2>
      <section>
        {friends.friends.map(friend => {
          return (
            <figure key={friend.id}>
              <h3>{friend.name}</h3>
              <ul>
                <li>{friend.age}</li>
                <li>{friend.email}</li>
              </ul>
            </figure>
          );
        })}
      </section>
    </div>
  );
};

export default Friends;
