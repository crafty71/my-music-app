import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './test/counter-slice';
import categoryReducer from './test/async-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categoryReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(apiSlice.middleware);
  // },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
