import api from '../http';
import { AxiosResponse } from 'axios';
import { IDevice } from '../interfaces/IDevice';
export default class DeviceService {
  static async getAllDevice(
    typeId?: number | null,
    brandId?: number | null,
    page?: number | null,
    limit?: number | null
  ) {
    return api.get('/device', { params: { typeId, brandId, page, limit } });
  }

  static async getOneDevice(id: number): Promise<AxiosResponse<IDevice>> {
    return api.get(`device/${id}`);
  }

  static async createDevice({ name, price, brandId, typeId, info }: any) {
    console.log('info', info);
    return api.post('/device', {
      name,
      price,
      info,
      brandId,
      typeId,
    });
  }
}
