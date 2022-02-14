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
      const response = await UserService.getAllUsers();
      console.log(response.data);
      this.setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserStore();
