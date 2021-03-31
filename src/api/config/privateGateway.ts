import axios, { AxiosInstance } from 'axios';

import { useIdToken } from './config';

const privateGateway = (apiGateway: string): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: apiGateway,
  });

  axiosInstance.interceptors.request.use(useIdToken);

  return axiosInstance;
};

export { privateGateway };
