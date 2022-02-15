import { makeAutoObservable } from 'mobx';
import { IBrand } from '../interfaces/IBrand';

class BrandStore {
  brands: IBrand[];
  selectBrand: any;
  constructor() {
    makeAutoObservable(this);
    this.selectBrand = {};
    this.brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Xiaomi' },
      { id: 3, name: 'Lenovo' },
      { id: 4, name: 'Asus' },
    ];
  }

  setBrands(brands: IBrand[]) {
    this.brands = brands;
  }

  setSelectBrand(brand: any) {
    this.selectBrand = brand;
  }

  get myBrands() {
    return this.brands;
  }

  get mySelectBrand() {
    return this.selectBrand;
  }
}

export default new BrandStore();
