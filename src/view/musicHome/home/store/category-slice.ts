import {
  getCategory,
  getCategorySongList,
  getHomeRecommend,
} from '@/services/musicHome/category';
import {
  CategoryData,
  ICategorySongList,
  IHomeRecommendResponse,
} from '@/services/musicHome/category/type';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CounterState } from './type';

const initialState: CounterState = {
  categories: {} as CategoryData,
  categorySong: {} as ICategorySongList,
  recommend: {} as IHomeRecommendResponse,
};

/**
 * @description: 获取分类数据
 * @param {*} createAsyncThunk
 * @return {*} AsyncThunk<CategoryData, void, AsyncThunkConfig>
 */
export const getCategoryData = createAsyncThunk('HOME/CATEGORY', async () => {
  const res = await getCategory();
  return res.data;
});

/**
 * @description: 获取推荐歌单
 * @return {*}
 */
export const getCategorySongListData = createAsyncThunk(
  'HOME/CATEGORYSONGLIST',
  async (id: string) => {
    return await getCategorySongList(id);
  },
);

/**
 * @description: 获取推荐数据
 * @param {*} createAsyncThunk
 * @return {*}
 */
export const getRecommendData = createAsyncThunk('HOME/RECOMMEND', async () => {
  const res = await getHomeRecommend();
  return res;
});
const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCategoryData.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(getCategorySongListData.fulfilled, (state, action) => {
      state.categorySong = action.payload.data;
    });
    builder.addCase(getRecommendData.fulfilled, (state, actions) => {
      state.recommend = actions.payload;
    });
  },
});

export default categorySlice.reducer;
