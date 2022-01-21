import axios from 'axios';

export const fetchGames = (params) => {
  return axios.get('/games', { params });
};
