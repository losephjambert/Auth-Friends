import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { createFriend } from '../../api';

import { useSelector, useDispatch } from 'react-redux';
import { FRIENDS_CREATE_START, FRIENDS_CREATE_SUCCESS, FRIENDS_CREATE_FAILURE } from '../../actions';

const CreateFriendForm = props => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (user.isLoggedIn) {
  //     props.history.push('/friends');
  //   }
  // }, [user.isLoggedIn, props.history]);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   // createFriend()
  //   // login(formValues, {
  //   //   start: payload => dispatch({ type: USER_LOGIN_START, payload }),
  //   //   success: payload => dispatch({ type: USER_LOGIN_SUCCESS, payload }),
  //   //   error: payload => dispatch({ type: USER_LOGIN_FAILURE, payload }),
  //   // });
  // };

  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmit = formValues => {
    console.log('form values ', formValues);
    createFriend(formValues, {
      start: payload => dispatch({ type: FRIENDS_CREATE_START, payload }),
      success: payload => dispatch({ type: FRIENDS_CREATE_SUCCESS, payload }),
      error: payload => dispatch({ type: FRIENDS_CREATE_FAILURE, payload }),
    });
  };
  console.log(errors);
  // console.log(watch());

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type='text' placeholder='Name' name='name' ref={register({ required: true })} />
        <p>{errors.name && 'A name is required'}</p>
      </div>
      <div>
        <input type='number' placeholder='Age' name='age' ref={register({ required: true })} />
        <p>{errors.age && 'An age is required'}</p>
      </div>
      <div>
        <input
          type='email'
          placeholder='Email'
          name='email'
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <p>{errors.name && 'A valid email is required'}</p>
      </div>
      <div>
        <input type='submit' />
      </div>
    </form>
  );
};

export default CreateFriendForm;
