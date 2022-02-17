import { makeAutoObservable } from 'mobx';
import { IDevice } from '../interfaces/IDevice';
import DeviceService from '../service/deviceService';

class DeviceStore {
  devices: IDevice[];
  constructor() {
    makeAutoObservable(this);

    this.devices = [];
  }

  setDevices(devices: IDevice[]) {
    this.devices = devices;
  }

  get allDevices() {
    return this.devices;
  }

  async getAllDevice() {
    try {
      const { data } = await DeviceService.getAllDevice();
      console.log('store devices', data);
      this.setDevices(data.rows);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async createDevice(device: IDevice) {
    try {
      const { data } = await DeviceService.createDevice(device);
      console.log('store createDevice', data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new DeviceStore();
