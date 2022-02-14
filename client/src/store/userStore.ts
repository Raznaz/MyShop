import { makeAutoObservable } from 'mobx';
import { IUser } from '../interfaces/IUser';
import UserService from '../service/UserService';

class UserStore {
  users: IUser[];
  constructor() {
    makeAutoObservable(this);
    this.users = [];
  }

  setUsers(users: IUser[]) {
    this.users = users;
  }

  async getAllUsers() {
    try {
      const response: any = await UserService.getAllUsers();
      console.log(response.data.rows);
      this.setUsers(response.data.rows);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserStore();
