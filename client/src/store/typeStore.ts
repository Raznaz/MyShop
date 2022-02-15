import { makeAutoObservable } from 'mobx';
import { IType } from '../interfaces/IType';

class TypeStore {
  types: IType[];
  selectType: any;
  constructor() {
    makeAutoObservable(this);
    this.selectType = {};
    this.types = [
      { id: 1, name: 'Mobile phones' },
      { id: 2, name: 'Laptop' },
      { id: 3, name: 'Books' },
      { id: 4, name: 'Monitors' },
      { id: 5, name: 'Headphones' },
    ];
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
}

export default new TypeStore();
