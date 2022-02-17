import { AxiosResponse } from 'axios';
import { IUser } from '../interfaces/IUser';
import api from '../http';

export default class UserService {
  static async getAllUsers(): Promise<AxiosResponse<IUser[]>> {
    return api.get<IUser[]>('/user/users');
  }
}
