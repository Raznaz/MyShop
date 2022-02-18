import { makeAutoObservable } from 'mobx';
import { IDevice } from '../interfaces/IDevice';
import DeviceService from '../service/deviceService';

class DeviceStore {
  devices: IDevice[];
  oneDevice: any;
  constructor() {
    makeAutoObservable(this);

    this.devices = [];
    this.oneDevice = { info: [] };
  }

  setDevices(devices: IDevice[]) {
    this.devices = devices;
  }

  setOneDevice(device: IDevice) {
    this.oneDevice = device;
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

  async getOneDevice(id: number) {
    try {
      const { data } = await DeviceService.getOneDevice(id);
      console.log('One device store', data);
      this.setOneDevice(data);
    } catch (error) {
      console.log(error);
    }
  }

  async createDevice(device: any) {
    try {
      console.log('device', device);
      const { data } = await DeviceService.createDevice(device);
      console.log('store createDevice', data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new DeviceStore();
