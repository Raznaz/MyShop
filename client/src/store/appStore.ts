import { makeAutoObservable } from 'mobx';

class AppStore {
  isLoading = false;
  constructor() {
    makeAutoObservable(this);
  }

  setLoading(status: boolean) {
    this.isLoading = status;
  }
}
