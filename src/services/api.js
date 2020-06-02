import axios from 'axios';

const api = axios.create({
  baseURL: 'https://shop-list-items.herokuapp.com',
});

export default api;
