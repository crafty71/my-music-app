import { CategoryData, testAxios } from '@/services/test';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface CounterState {
  categories: CategoryData;
}

const initialState: CounterState = {
  categories: {} as CategoryData,
};

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
