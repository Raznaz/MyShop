import { makeAutoObservable } from 'mobx';
import { IDevice } from '../interfaces/IDevice';

class DeviceStore {
  devices: IDevice[];
  constructor() {
    makeAutoObservable(this);

    this.devices = [
      {
        id: 1,
        name: 'Iphone12',
        price: 10000,
        rating: 5,
        img: 'https://www.img',
      },
      {
        id: 2,
        name: 'Samsung 21',
        price: 10000,
        rating: 5,
        img: 'https://www.img',
      },
      {
        id: 3,
        name: 'Xiaomi 11T',
        price: 10000,
        rating: 5,
        img: 'https://www.img',
      },
    ];
  }

  setDevices(devices: IDevice[]) {
    this.devices = devices;
  }

  get allDevices() {
    return this.devices;
  }
}

export default new DeviceStore();
