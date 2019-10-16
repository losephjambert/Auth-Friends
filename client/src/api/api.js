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
    console.log(friendsResponse);
    success(friendsResponse.data);
  } catch (err) {
    error(err);
    console.log('Error logging in. Please check the error log for more information.');
    console.error(err);
  }
};

export const createFriend = async (payload, actions) => {
  // const { start, success, error } = actions;
  // start();
  try {
    const createFriendResponse = await axiosWithAuth(API_ROOT).post('/friends');
    console.log(createFriendResponse);
    // success(createFriendResponse.data);
  } catch (err) {
    // error(err);
    console.log('Error logging in. Please check the error log for more information.');
    console.error(err);
  }
};
