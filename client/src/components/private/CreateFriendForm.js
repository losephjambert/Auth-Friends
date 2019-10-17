import React from 'react';
import useForm from 'react-hook-form';
import { createFriend } from '../../api';

import { useDispatch } from 'react-redux';
import { FRIENDS_CREATE_START, FRIENDS_CREATE_SUCCESS, FRIENDS_CREATE_FAILURE } from '../../actions';

const CreateFriendForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = formValues => {
    createFriend(formValues, {
      start: payload => dispatch({ type: FRIENDS_CREATE_START, payload }),
      success: payload => dispatch({ type: FRIENDS_CREATE_SUCCESS, payload }),
      error: payload => dispatch({ type: FRIENDS_CREATE_FAILURE, payload }),
    });
  };

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
