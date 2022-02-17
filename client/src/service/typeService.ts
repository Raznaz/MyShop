import { AxiosResponse } from 'axios';
import api from '../http';
import { IType } from '../interfaces/IType';

export default class TypeService {
  static async getAllTypes(): Promise<AxiosResponse<IType>> {
    return api.get('/type');
  }
}
