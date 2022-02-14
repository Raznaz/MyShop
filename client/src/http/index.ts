import axios from 'axios';
import { config } from 'process';

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL + '/api',
});

api.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    'access_token'
  )}`;
  return config;
});

export default api;
