import { makeAutoObservable } from 'mobx';
import { IType } from '../interfaces/IType';
import TypeService from '../service/typeService';

class TypeStore {
  types: IType[];
  selectType: any;
  constructor() {
    makeAutoObservable(this);
    this.selectType = {};
    this.types = [];
  }

  setTypes(types: IType[]) {
    this.types = types;
  }

  setSelectType(type: any) {
    this.selectType = type;
  }

  get mySelectType() {
    return this.selectType;
  }

  get myTypes() {
    return this.types;
  }

  async getAllTypes() {
    try {
      const { data }: any = await TypeService.getAllTypes();
      this.setTypes(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async createType(type: string) {
    try {
      const { data } = await TypeService.createType(type);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new TypeStore();
