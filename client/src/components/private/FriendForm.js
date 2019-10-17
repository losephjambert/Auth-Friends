import React from 'react';
import useForm from 'react-hook-form';

const FriendForm = ({ submitHandler, defaultFormValues = {} }) => {
  const { register, handleSubmit, errors } = useForm();
  const { name, age, email, id } = defaultFormValues;

  const onSubmit = (formValues, e) => {
    submitHandler(formValues, id || null);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type='text'
          placeholder='Name'
          name='name'
          ref={register({ required: true })}
          defaultValue={name || ''}
        />
        <p>{errors.name && 'A name is required'}</p>
      </div>
      <div>
        <input type='number' placeholder='Age' name='age' ref={register({ required: true })} defaultValue={age || ''} />
        <p>{errors.age && 'An age is required'}</p>
      </div>
      <div>
        <input
          type='email'
          placeholder='Email'
          name='email'
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          defaultValue={email || ''}
        />
        <p>{errors.name && 'A valid email is required'}</p>
      </div>
      <div>
        <input type='submit' />
      </div>
    </form>
  );
};

export default FriendForm;
