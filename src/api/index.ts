import axios from 'axios';
import { VehicleData } from './types';

const instance = axios.create({
  baseURL: 'https://6157228e8f7ea600179850e4.mockapi.io',
});

export const getVehicles = () => {
  return instance.get<VehicleData[]>('/api/vehicles');
};
