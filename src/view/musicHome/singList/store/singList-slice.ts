import { getSingerList } from '@/services/musicHome/singerList';
import {
  IGetSingerListParams,
  SingerList,
} from '@/services/musicHome/singerList/type';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { singerListState } from './type';

const initialState: singerListState = {
  singerList: {} as SingerList,
};

export const getSingerListData = createAsyncThunk(
  'SINGER/SINGERLIST',
  async (params?: IGetSingerListParams) => {
    const res = await getSingerList(params);
    return res;
  },
);

const singerListSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSingerListData.fulfilled, (state, action) => {
      state.singerList = action.payload.singerList;
    });
  },
});

export default singerListSlice.reducer;
