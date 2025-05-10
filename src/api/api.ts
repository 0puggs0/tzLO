import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios';
import {Storage} from '../storage/storage';
const api: AxiosInstance = axios.create({
  baseURL: 'https://api.lo.ink/v1',
});

api.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = Storage.get('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config as InternalAxiosRequestConfig;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  },
);

export const get = async (url: string, params?: any) => {
  try {
    const response = await api.get(url, {params});
    return response.data;
  } catch (error) {
    console.error('GET error:', error);
    throw error;
  }
};
export const post = async (
  url: string,
  data: any,
  headers?: RawAxiosRequestHeaders,
) => {
  try {
    const response = await api.post(url, data, {
      headers: headers,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
