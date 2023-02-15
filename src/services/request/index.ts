import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { RequestInterceptors, RequestConfig } from './type';
import { SUCCESS_REQUEST_CODE } from './config';

class Request {
  instance: AxiosInstance;
  interceptors?: RequestInterceptors;

  constructor(config: RequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);

    this.interceptors = config.interceptors;

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch,
    );

    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      },
    );

    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data;
        if (res.status !== SUCCESS_REQUEST_CODE) {
          console.log('请求失败~, 错误信息');
        } else {
          return data.response;
        }
      },
      (err) => {
        // 例子: 判断不同的HttpErrorCode显示不同的错误信息
        return err;
      },
    );
  }

  request<T = unknown>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      this.instance
        .request<unknown, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }

          // 3.将结果resolve返回出去
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          return err;
        });
    });
  }

  get<T = unknown>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }

  post<T = unknown>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }

  delete<T = unknown>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }

  patch<T = unknown>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
}

export default Request;
