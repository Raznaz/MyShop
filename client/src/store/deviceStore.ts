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
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsupport.apple.com%2Fru-ru%2FHT204031&psig=AOvVaw0n6dWhBl0YnkzDgw8abHq5&ust=1645091582263000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMj3y-75g_YCFQAAAAAdAAAAABAD',
      },
      {
        id: 2,
        name: 'Samsung 21',
        price: 10000,
        rating: 5,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsupport.apple.com%2Fru-ru%2FHT204031&psig=AOvVaw0n6dWhBl0YnkzDgw8abHq5&ust=1645091582263000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMj3y-75g_YCFQAAAAAdAAAAABAD',
      },
      {
        id: 3,
        name: 'Xiaomi 11T',
        price: 10000,
        rating: 5,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsupport.apple.com%2Fru-ru%2FHT204031&psig=AOvVaw0n6dWhBl0YnkzDgw8abHq5&ust=1645091582263000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMj3y-75g_YCFQAAAAAdAAAAABAD',
      },
      {
        id: 4,
        name: 'Meizu 11T',
        price: 10000,
        rating: 5,
        img: 'https://www.google.com',
      },
      {
        id: 5,
        name: 'Alcatel 11T',
        price: 10000,
        rating: 5,
        img: 'https://www.google.com',
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
