import NetworkManager from '../network/NetworkManager';
import UserModel from '../models/UserModel';
import CONFIG from '../utils/Config/config';

class UserRepository {
  constructor() {
    this.networkManager = new NetworkManager("https://jsonplaceholder.typicode.com/");
  }

  async getUserById(userId) {
    try {
      const data = await this.networkManager.get(`users/${userId}`);
      return UserModel.fromJson(data);
    } catch (error) {
      console.error("Failed to fetch user data: ", error);
      throw error;
    }
  }

  async getUsers() {
    try {
      const data = await this.networkManager.get(`users`);
      return data.map(user=>UserModel.fromJson(user));
    } catch (error) {
      console.error("Failed to fetch user data: ", error);
      throw error;
    }
  }

  async createUser(user) {
    try {
      const data = await this.networkManager.post('users', user);
      return UserModel.fromJson(data);
    } catch (error) {
      console.error("Failed to create user: ", error);
      throw error;
    }
  }

  async updateUser(userId, user) {
    try {
      const data = await this.networkManager.put(`users/${userId}`, user);
      return UserModel.fromJson(data);
    } catch (error) {
      console.error("Failed to update user: ", error);
      throw error;
    }
  }

  async deleteUser(userId) {
    try {
      const data = await this.networkManager.delete(`users/${userId}`);
      return data;
    } catch (error) {
      console.error("Failed to delete user: ", error);
      throw error;
    }
  }
}

export default UserRepository;
