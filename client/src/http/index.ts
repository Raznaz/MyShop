import axios from 'axios';
import { config } from 'process';
import { AuthResponse } from '../models/response/AuthResponse';

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

api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      try {
        const response = await axios.get<AuthResponse>(
          `${API_URL}api/user/refresh`,
          { withCredentials: true }
        );
        localStorage.setItem('token', response.data.accessToken);
        return api.request(originalRequest);
      } catch (error) {
        console.log('NOT AUTHORIZATION');
      }
    }
  }
);

export default api;
