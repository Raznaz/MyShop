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
      console.log(data);
      this.setTypes(data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new TypeStore();
