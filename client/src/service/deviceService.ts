import api from '../http';
import { AxiosResponse } from 'axios';
import { IDevice } from '../interfaces/IDevice';
export default class DeviceService {
  static async getAllDevice() {
    return api.get('/device');
  }

  static async getOneDevice(id: number): Promise<AxiosResponse<IDevice>> {
    return api.get(`device/${id}`);
  }

  static async createDevice(device: IDevice) {
    return api.post('/device', { ...device });
  }
}
