import { getMVList } from '@/services/musicHome/mv';
import { IMVResponse } from '@/services/musicHome/mv/type';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMVListState } from './type';

const initialState: IMVListState = {
  MVList: {} as IMVResponse,
};

export const getMVListData = createAsyncThunk('MV/MV-LIST', async () => {
  const res = await getMVList();
  return res.data;
});

const MVListSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMVListData.fulfilled, (state, action) => {
      state.MVList = action.payload;
    });
  },
});

export default MVListSlice.reducer;
