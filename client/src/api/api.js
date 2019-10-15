import { API_ROOT } from './api.config';
import { axiosWithAuth } from './axiosWithAuth';

export const login = async (credentials, redirect) => {
  const responseObject = {
    response: null,
    error: null,
  };
  try {
    const data = await axiosWithAuth(API_ROOT).post('/login', credentials);
    responseObject.response = data;
    localStorage.setItem('token', data.data.payload);
    redirect();
  } catch (err) {
    console.log('Error logging in. Please check the error log for more information.');
    console.error(err);
    responseObject.error = err;
  } finally {
    return responseObject;
  }
};
