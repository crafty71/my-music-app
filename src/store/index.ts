import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from '../view/musicHome/home/store/category-slice';

import singerListReducer from '../view/musicHome/singList/store/singList-slice';

import albumListReducer from '../view/musicHome/album/store/album-slice';

import topListReducer from '../view/musicHome/toplist/store/topList-slice';

import radioReducer from '../view/musicHome/radio/store/radio-slice';

import MVReducer from '../view/musicHome/mvList/store/store-slice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    singerList: singerListReducer,
    albumList: albumListReducer,
    topList: topListReducer,
    radio: radioReducer,
    MV: MVReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
