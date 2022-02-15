import axios from 'axios';
import { config } from 'process';
import { AuthResponse } from '../models/response/AuthResponse';
import AuthService from '../service/AuthService';

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
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(
          `http://localhost:5000/api/user/refresh`,
          { withCredentials: true }
        );

        localStorage.setItem('access_token', response.data.accessToken);
        return api.request(originalRequest);
      } catch (error) {
        console.log('NOT AUTHORIZATION');
      }
    }
    throw error;
  }
);

export default api;
