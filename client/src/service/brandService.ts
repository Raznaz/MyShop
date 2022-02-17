import api from '../http';
import { AxiosResponse } from 'axios';
import { IBrand } from '../interfaces/IBrand';

export default class BrandService {
  static async getAllBrands(): Promise<AxiosResponse<IBrand[]>> {
    return api.get('/brand');
  }
}
