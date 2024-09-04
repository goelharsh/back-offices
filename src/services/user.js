import axios from "axios";
const apiUrl = import.meta.env.VITE_APP_BASE_URL

export const getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(`${apiUrl}/allUsers`);
        console.log("Users retrieved successfully:", response.data);
        resolve(response.data);
      } catch (error) {
        console.error("Error fetching users:", error.message);
        reject(error);
      }
    });
  };
  
  export const updateUser = (id, data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(`${apiUrl}/updateUser/${id}`, data);
        console.log("User updated successfully:", response.data);
        resolve(response.data);
      } catch (error) {
        console.error("Error updating user:", error.message);
        reject(error);
      }
    });
  };
  
  export const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.delete(`${apiUrl}/deleteUser/${id}`);
        console.log("User deleted successfully:", response.data);
        resolve(response.data);
      } catch (error) {
        console.error("Error deleting user:", error.message);
        reject(error);
      }
    });
  };