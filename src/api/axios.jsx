import axios from 'axios';

export const apiUrl =import.meta.env.BASE_URL
export const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,                
  headers: {
    'Content-Type': 'application/json', 
   

  
  }
});