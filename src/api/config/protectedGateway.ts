import axios, { AxiosInstance } from 'axios';

import { useAccessToken } from './config';

const protectedGateway = (apiGateway: string): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: apiGateway,
  });

  axiosInstance.interceptors.request.use(useAccessToken);

  return axiosInstance;
};

export { protectedGateway };
