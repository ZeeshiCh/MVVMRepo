class ProductModel {
    constructor(id, name, price, description, category) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
      this.category = category;
    }
    getProductInfo() {
      return `Name: ${this.name}, Price: $${this.price}, Description: ${this.description}, Category: ${this.category}`;
    }
  
    static fromJson(json) {
      return new ProductModel(json.id, json.name, json.price, json.description, json.category);
    }
  }
  
  export default ProductModel;
  