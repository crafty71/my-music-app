import { getRadioList } from '@/services/musicHome/radio';
import { IRadioResponse } from '@/services/musicHome/radio/type';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IRadioListState } from './type';

const initialState: IRadioListState = {
  radioList: {} as IRadioResponse,
};

export const getRadioListData = createAsyncThunk(
  'RADIO/RADIO-LIST',
  async () => {
    const res = await getRadioList();
    return res.data;
  },
);

const albumListSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getRadioListData.fulfilled, (state, action) => {
      state.radioList = action.payload;
    });
  },
});

export default albumListSlice.reducer;
