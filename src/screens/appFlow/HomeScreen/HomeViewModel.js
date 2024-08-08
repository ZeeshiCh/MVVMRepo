import { makeAutoObservable } from 'mobx';
import ProductRepository from '../../../repositories/ProductRepository';

class HomeViewModel {
  products = [];
  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
    this.productRepository = new ProductRepository();
  }

  async fetchProducts() {
    this.isLoading = true;
    this.error = null;

    try {
      this.products = await this.productRepository.getAllProducts();
    } catch (error) {
      this.error = error;
    } finally {
      this.isLoading = false;
    }
  }

  async addProduct(productData) {
    this.isLoading = true;
    this.error = null;

    try {
      const newProduct = await this.productRepository.createProduct(productData);
      this.products.push(newProduct);
    } catch (error) {
      this.error = error;
    } finally {
      this.isLoading = false;
    }
  }
}

export default HomeViewModel;
