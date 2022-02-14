import { makeAutoObservable } from 'mobx';
import { IUser } from '../interfaces/IUser';
import AuthService from '../service/AuthService';

class AuthStore {
  user = {} as IUser;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      console.log('login===', response);
      localStorage.setItem('access_token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }

  async registration(email: string, password: string) {
    try {
      const response = await AuthService.registration(email, password);

      console.log('registration===', response);

      localStorage.setItem('access_token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      const response: any = await AuthService.logout();
      console.log(response.data);
      localStorage.removeItem('access_token');
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AuthStore();
