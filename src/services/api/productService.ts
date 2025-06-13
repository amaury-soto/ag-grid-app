// src/services/api/productService.ts
import axios from 'axios';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const getProducts = async (): Promise<IProduct[]> => {
  const response = await apiClient.get<IProduct[]>('/products');
  return response.data;
};