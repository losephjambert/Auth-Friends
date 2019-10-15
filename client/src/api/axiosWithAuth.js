import axios from 'axios';

export const axiosWithAuth = (baseURL, url) => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL,
    url,
    headers: {
      Authorization: token,
    },
  });
};
