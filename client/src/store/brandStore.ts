import { makeAutoObservable } from 'mobx';
import { IBrand } from '../interfaces/IBrand';
import BrandService from '../service/brandService';

class BrandStore {
  brands: IBrand[];
  selectBrand: any;
  constructor() {
    makeAutoObservable(this);
    this.selectBrand = {};
    this.brands = [];
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

  async getAllBrands() {
    try {
      const { data } = await BrandService.getAllBrands();
      this.setBrands(data);
    } catch (error) {
      console.log(error);
    }
  }

  async crateBrand(name: string) {
    try {
      const { data } = await BrandService.createBrand(name);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new BrandStore();
