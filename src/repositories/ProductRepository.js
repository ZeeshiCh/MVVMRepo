import NetworkManager from '../network/NetworkManager';
import ProductModel from '../models/ProductModel';
import CONFIG from '../services/utils/config'; 

class ProductRepository {
  constructor() {
    this.networkManager = new NetworkManager(CONFIG.API_BASE_URL);
  }

  async getProductById(productId) {
    try {
      const data = await this.networkManager.get(`products/${productId}`);
      return ProductModel.fromJson(data);
    } catch (error) {
      console.error("Failed to fetch product data: ", error);
      throw error;
    }
  }

  async createProduct(product) {
    try {
      const data = await this.networkManager.post('products', product);
      return ProductModel.fromJson(data);
    } catch (error) {
      console.error("Failed to create product: ", error);
      throw error;
    }
  }

  async getAllProducts() {
    try {
      const data = await this.networkManager.get('products');
      return data.map(ProductModel.fromJson);
    } catch (error) {
      console.error("Failed to fetch products: ", error);
      throw error;
    }
  }

  async updateProduct(productId, product) {
    try {
      const data = await this.networkManager.put(`products/${productId}`, product);
      return ProductModel.fromJson(data);
    } catch (error) {
      console.error("Failed to update product: ", error);
      throw error;
    }
  }

  async deleteProduct(productId) {
    try {
      const data = await this.networkManager.delete(`products/${productId}`);
      return data;
    } catch (error) {
      console.error("Failed to delete product: ", error);
      throw error;
    }
  }
}

export default ProductRepository;
