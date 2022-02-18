import { makeAutoObservable } from 'mobx';
import { IDevice } from '../interfaces/IDevice';
import DeviceService from '../service/deviceService';

class DeviceStore {
  devices: IDevice[];
  oneDevice: any;

  page: number;
  totalCount: number;
  limit: number;

  constructor() {
    makeAutoObservable(this);

    this.devices = [];
    this.oneDevice = { info: [] };

    this.page = 1;
    this.totalCount = 0;
    this.limit = 5;
  }

  setDevices(devices: IDevice[]) {
    this.devices = devices;
  }

  setOneDevice(device: IDevice) {
    this.oneDevice = device;
  }

  setPage(page: number) {
    this.page = page;
  }

  setTotalCount(count: number) {
    this.totalCount = count;
  }

  setLimit(limit: number) {
    this.limit = limit;
  }

  get allDevices() {
    return this.devices;
  }

  async getAllDevice(
    typeId?: number | null,
    brandId?: number | null,
    page?: number | null,
    limit?: number | null
  ) {
    try {
      const { data } = await DeviceService.getAllDevice(
        typeId,
        brandId,
        page,
        limit
      );
      console.log('store devices', data);
      this.setDevices(data.rows);
      this.setTotalCount(data.count);
      console.log(this.totalCount);
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
