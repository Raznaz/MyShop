import { AxiosResponse } from 'axios';
import api from '../http';
import { AuthResponse } from '../models/response/AuthResponse';

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    console.log(email, password);
    return api.post<AuthResponse>('user/login', { email, password });
  }

  static async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post('user/register', { email, password, role: 'admin' });
  }

  static async logout(): Promise<void> {
    return api.post('/user/logout');
  }

  static async refresh(): Promise<void> {
    return api.get('/user/refresh');
  }
}
