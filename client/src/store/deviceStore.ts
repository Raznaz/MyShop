import { makeAutoObservable } from 'mobx';
import { IBrand } from '../interfaces/IBrand';
import { IDevice } from '../interfaces/IDevice';
import { IType } from '../interfaces/IType';

class DeviceStore {
  types: IType[];
  brands: IBrand[];
  devices: IDevice[];
  constructor() {
    makeAutoObservable(this);
    this.brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Xiaomi' },
    ];
    this.types = [
      { id: 1, name: 'Mobile phone' },
      { id: 2, name: 'Smartphone' },
    ];
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

  setTypes(types: IType[]) {
    this.types = types;
  }

  setBrands(brands: IBrand[]) {
    this.brands = brands;
  }

  setDevices(devices: IDevice[]) {
    this.devices = devices;
  }

  get allDevices() {
    return this.devices;
  }
}

export default new DeviceStore();
