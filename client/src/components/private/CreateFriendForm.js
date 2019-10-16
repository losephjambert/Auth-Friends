import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { createFriend } from '../../api';

// import { useSelector, useDispatch } from 'react-redux';
// import {
//   USER_CREATE_START,
//   USER_CREATE_SUCCESS,
//   USER_CREATE_FAILURE
// } from "../../actions";

// const initialFormValues = {
//   name: '',
//   age: '',
//   email: '',
// };

const CreateFriendForm = props => {
  // const [formValues, setFormValues] = useState(initialFormValues);
  // const dispatch = useDispatch();
  // const user = useSelector(state => state.user);

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
    createFriend(formValues);
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
