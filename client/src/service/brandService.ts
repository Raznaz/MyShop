import api from '../http';

export default class BrandService {
  static async getAllBrands() {
    return api.get('/brand');
  }
}
