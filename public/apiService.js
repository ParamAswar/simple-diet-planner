// src/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Adjust the URL based on your backend

export const fetchProducts = () => {
  return axios.get(`${API_URL}/products`);
};

// You can add more functions here for creating, updating, and deleting products