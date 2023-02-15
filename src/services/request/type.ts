/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: any) => any;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>;
}

export interface IResponseData<E> {
  code: number;
  subcode: number;
  message: string;
  default: number;
  data: E;
}
