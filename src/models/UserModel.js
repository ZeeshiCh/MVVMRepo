class UserModel {
    constructor(id, name, username, email, phone,website, city,company) {
      this.id = id;
      this.name = name;
      this.username = username;
      this.email = email;
      this.phone = phone;
      this.website = website;
      this.city = city;
      this.company = company;
    }
  
    getUserInfo() {
      return `Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`;
    }
  
    // Example static method to create a user from a JSON object
    static fromJson(json) {
      return new UserModel(json.id, json.name, json.username, json.email, json.phone, json.website, json.address.city, json.company.name);
    }
  }
  
  export default UserModel;
  