import api from '../http';
import { AxiosResponse } from 'axios';
import { IDevice } from '../interfaces/IDevice';
export default class DeviceService {
  static async getAllDevice() {
    return api.get('/device');
  }

  static async createDevice(device: IDevice) {
    return api.post('/device', { ...device });
  }
}
