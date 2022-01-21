import axios from 'axios';
import constants from '../constants';

export const axiosSetup = () => {
  axios.interceptors.request.use((request) => {
    request.baseURL = constants.apiUrl;
    request.headers.common['x-rapidapi-host'] = constants.apiHost;
    request.headers.common['x-rapidapi-key'] = constants.apiKey;

    return request;
  });
};
