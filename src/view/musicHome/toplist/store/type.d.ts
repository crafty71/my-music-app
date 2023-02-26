import {
  ITopListResponse,
  ITopListSongResponse,
} from '@/services/musicHome/topList/type';

export interface ITopListState {
  topList: ITopListResponse;
  rankSong: ITopListSongResponse;
}
