import { getRanks, getTopList } from '@/services/musicHome/topList';
import {
  ITopListResponse,
  ITopListSongResponse,
} from '@/services/musicHome/topList/type';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ITopListState } from './type';

const initialState: ITopListState = {
  topList: {} as ITopListResponse,
  rankSong: {} as ITopListSongResponse,
};

export const getTopListData = createAsyncThunk(
  'TOP-LIST/TOP-LIST-DATA',
  async () => {
    const res = await getTopList();
    return res;
  },
);

export const getRankSing = createAsyncThunk(
  'TOP-LIST/RANK-SONG',
  async (id: string) => {
    const res = await getRanks(id);
    return res;
  },
);

const topListSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTopListData.fulfilled, (state, action) => {
      state.topList = action.payload;
    });
    builder.addCase(getRankSing.fulfilled, (state, action) => {
      state.rankSong = action.payload;
    });
  },
});

export default topListSlice.reducer;
