// service统一出口
import Request from './request';
import { BASE_URL, TIME_OUT } from './request/config';

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = '';
      if (token) {
        config.headers = {
          Authorization: token,
        };
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    },
  },
});

export default request;
