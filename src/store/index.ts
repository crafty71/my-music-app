import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from '../view/musicHome/home/store/category-slice';

import singerListReducer from '../view/musicHome/singList/store/singList-slice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    singerList: singerListReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(apiSlice.middleware);
  // },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
