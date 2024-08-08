class NetworkManager {
    constructor(baseURL) {
      this.baseURL = baseURL;
    }
  
    async get(endpoint, params = {}) {
      const url = new URL(`${this.baseURL}/${endpoint}`);
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error("Failed to fetch data: ", error);
        throw error;
      }
    }
  
    async post(endpoint, data = {}) {
      const url = `${this.baseURL}/${endpoint}`;
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error("Failed to post data: ", error);
        throw error;
      }
    }
  
    async put(endpoint, data = {}) {
      const url = `${this.baseURL}/${endpoint}`;
  
      try {
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error("Failed to update data: ", error);
        throw error;
      }
    }
  
    async delete(endpoint) {
      const url = `${this.baseURL}/${endpoint}`;
  
      try {
        const response = await fetch(url, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error("Failed to delete data: ", error);
        throw error;
      }
    }
  }
  
  export default NetworkManager;
  