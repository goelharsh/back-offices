import axios from "axios";
const apiUrl = import.meta.env.VITE_APP_BASE_URL
// console.log(apiUrl)  
export const addSignup = (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(apiUrl, "while singing app", data)
        const response = await axios.post(`${apiUrl}/signup`, data);
        console.log(response)
        console.log("Data posted successfully:", response.data);
        resolve(response);
      } catch (error) {
        console.error("Error posting data:", error.message);
        reject(error);
      }
    });
  };
  
  export const addLogin = (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(`${apiUrl}/login`, data);
        console.log("Data posted successfully:", response.data);
        resolve(response);
      } catch (error) {
        console.error("Error posting data:", error.message);
        reject(error);
      }
    });
  };