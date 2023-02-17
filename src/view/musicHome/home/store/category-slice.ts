import {
  getCategory,
  getCategorySongList,
} from '@/services/musicHome/category';
import {
  CategoryData,
  ICategorySongList,
} from '@/services/musicHome/category/type';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CounterState } from './type';

const initialState: CounterState = {
  categories: {} as CategoryData,
  categorySong: {} as ICategorySongList,
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

export const getCategorySongListData = createAsyncThunk(
  'HOME/CATEGORYSONGLIST',
  async (id: string) => {
    const res = await getCategorySongList(id);
    return res;
  },
);

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
  },
});

export default categorySlice.reducer;
