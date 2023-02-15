<div align="center"><img src = "https://user-images.githubusercontent.com/31413093/197097625-5b3bd3cf-2bd6-4a3a-8059-a1fe9f28100b.svg" height="100px" alt="My Happy SVG"/></div>

<h2 align="center">my-music-app</h2>

<div align="center">
<a href="https://reactjs.org/"><image src="https://img.shields.io/static/v1?label=React&message=^18&style=for-the-badge&labelColor=FFFFFF&logo=react&color=61DAFB"/></a> <a href="https://www.typescriptlang.org/"><image src="https://img.shields.io/static/v1?label=TypeScript&message=^4.9&style=for-the-badge&labelColor=FFFFFF&logo=typescript&color=3178C6"/></a> <a href="https://www.typescriptlang.org/"><image src="https://img.shields.io/static/v1?label=Tailwind%20CSS&message=^3&style=for-the-badge&labelColor=FFFFFF&logo=tailwindcss&color=06B6D4"/></a> <a href="https://cn.vitejs.dev/"><image src="https://img.shields.io/static/v1?label=Vite&message=^4&style=for-the-badge&labelColor=FFFFFF&logo=vite&color=646CFF"/></a>
</div>

## Introduction

A starter [vite](https://vitejs.dev/) template having:

- React
- TypeScript
- Vite
- Tailwind CSS
- Multiple eslint & prettier plugins installed

## 1.axios封装

###        1. 项目中使用了类对axios 进行了封装，具体代码如下：

```typescript
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
```

2. ### 所有的网络请求都放在 redux 里面，数据由redux去管理，redux结合redux/toolkit 一起使用，实际项目中，建议将异步thunk 单独拆封模块

​       

```typescript
import { CategoryData, testAxios } from '@/services/test';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface CounterState {
  categories: CategoryData;
}

const initialState: CounterState = {
  categories: {} as CategoryData,
};
// 创建异步thunk
export const getCategoryData = createAsyncThunk('TEST/CATEGORY', async () => {
  const res = await testAxios();
  return res.data;
});

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCategoryData.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categorySlice.reducer;

```

