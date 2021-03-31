import { AxiosRequestConfig } from 'axios';
// import { Auth } from '@aws-amplify/auth'; // should be used instead of 'aws-amplify'
import { Auth } from 'aws-amplify';

export const useIdToken = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const session = await Auth.currentSession();
  const idToken = session.getIdToken().getJwtToken();

  config.headers.Authorization = `Bearer ${idToken}`;

  return config;
};

export const useAccessToken = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const session = await Auth.currentSession();
  const accessToken = session.getAccessToken().getJwtToken();

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};
