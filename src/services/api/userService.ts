import apiClient from './apiClient';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}

export const getUsers = async (): Promise<IUser[]> => {
  const response = await apiClient.get<IUser[]>('/users');
  return response.data;
};