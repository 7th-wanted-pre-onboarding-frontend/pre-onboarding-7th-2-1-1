import axios from 'axios';

const request = axios.create({
  baseURL: 'https://preonboarding.platdev.net/'
});

export default request;
