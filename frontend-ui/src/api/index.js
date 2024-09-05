import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change this to your backend URL

export const getProducts = () => axios.get(`${API_URL}/products`);
export const addProduct = (product) => axios.post(`${API_URL}/products`, product);
export const updateProduct = (id, product) => axios.put(`${API_URL}/products/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${API_URL}/products/${id}`);

export const getOrders = () => axios.get(`${API_URL}/orders`);
export const createOrder = (order) => axios.post(`${API_URL}/orders`, order);

export const getSuppliers = () => axios.get(`${API_URL}/suppliers`);
export const addSupplier = (supplier) => axios.post(`${API_URL}/suppliers`, supplier);

export const getInventoryReport = () => axios.get(`${API_URL}/reports/inventory`);
export const getOrderStatistics = () => axios.get(`${API_URL}/reports/orders`);
