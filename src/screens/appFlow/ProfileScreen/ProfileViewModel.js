import { makeAutoObservable, action } from 'mobx';
import UserRepository from '../../../repositories/UserRepository';

class ProfileViewModel {
  user = null;  
  users = []; 
  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this, {
      fetchUser: action,
      fetchUsers: action,
      updateUser: action,
      setLoading: action,
      setError: action,
      setUser: action,
      setUsers: action,
    });
  }

  setLoading(isLoading) {
    this.isLoading = isLoading;
  }

  setError(error) {
    this.error = error;
  }

  setUser(user) {
    this.user = user;
  }

  setUsers(users) {
    this.users = users;
  }

  async fetchUser(userId) {
    this.setLoading(true);
    this.setError(null);

    try {
      const user = await new UserRepository().getUserById(userId);
      this.setUser(user);
    } catch (error) {
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  }

  async fetchUsers() {
    this.setLoading(true);
    this.setError(null);

    try {
      const users = await new UserRepository().getUsers();
      this.setUsers(users);
    } catch (error) {
      console.error('Error in fetchUsers:', error);
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  }

  async updateUser(userId, userData) {
    this.setLoading(true);
    this.setError(null);

    try {
      const user = await new UserRepository().updateUser(userId, userData);
      this.setUser(user);
    } catch (error) {
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  }
}

export const profileViewModel = new ProfileViewModel();
