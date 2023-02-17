import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from '../view/musicHome/home/store/category-slice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(apiSlice.middleware);
  // },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
