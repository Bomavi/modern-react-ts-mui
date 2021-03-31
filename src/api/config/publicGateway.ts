import axios, { AxiosInstance } from 'axios';

const publicGateway = (apiGateway: string): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: apiGateway,
  });

  return axiosInstance;
};

export { publicGateway };
