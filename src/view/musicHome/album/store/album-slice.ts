import { getAlbumList } from '@/services/musicHome/album';
import { INewAlbumResponse } from '@/services/musicHome/album/type';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IAlbumListState } from './type';

const initialState: IAlbumListState = {
  albumList: {} as INewAlbumResponse,
};

// export const getSingerListData = createAsyncThunk(
//   'SINGER/SINGERLIST',
//   async (params?: IGetSingerListParams) => {
//     const res = await getSingerList(params);
//     return res;
//   },
// );

export const getAlbumListData = createAsyncThunk(
  'ALBUM/ALBUM-LIST',
  async () => {
    const res = await getAlbumList();
    return res;
  },
);

const albumListSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAlbumListData.fulfilled, (state, action) => {
      state.albumList = action.payload;
    });
  },
});

export default albumListSlice.reducer;
