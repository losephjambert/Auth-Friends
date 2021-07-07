import { API_ROOT } from './api.config';
import { axiosWithAuth } from './axiosWithAuth';

export const login = async (credentials, actions) => {
  const { start, success, error } = actions;
  start();
  try {
    const response = await axiosWithAuth(API_ROOT).post('/login', credentials);
    success();
    localStorage.setItem('token', response.data.payload);
  } catch (err) {
    error(err);
    console.log('Error logging in. Please check the error log for more information.');
    console.error(err);
  }
};

export const fetchFriends = async actions => {
  const { start, success, error } = actions;
  start();
  try {
    const friendsResponse = await axiosWithAuth(API_ROOT).get('/friends');
    success(friendsResponse.data);
  } catch (err) {
    error(err);
    console.log('Error logging in. Please check the error log for more information.');
    console.error(err);
  }
};

export const createFriend = async (formValues, actions) => {
  const { start, success, error } = actions;
  start();
  try {
    const createFriendResponse = await axiosWithAuth(API_ROOT).post('/friends', formValues);
    success(createFriendResponse.data);
  } catch (err) {
    error(err);
    console.log('Error logging in. Please check the error log for more information.');
    console.error(err);
  }
};

export const updateFriend = async (formValues, id, actions, redirect = null) => {
  const { start, success, error } = actions;
  start();
  try {
    const updateFriendResponse = await axiosWithAuth(API_ROOT).put(`/friends/${id}`, formValues, { id });
    success(updateFriendResponse.data);
    redirect && redirect();
  } catch (err) {
    error(err);
    console.log('Error editing friend. Please check the error log for more information.');
    console.error(err);
  }
};
