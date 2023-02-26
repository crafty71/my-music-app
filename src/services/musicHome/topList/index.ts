import request from '@/services';
import { ITopListResponse, ITopListSongResponse } from './type';

/**
 * @description: 获取排行榜标签
 * @return {*} Promise<ITopListResponse>
 */
export const getTopList = (): Promise<ITopListResponse> => {
  return request.get<ITopListResponse>({
    url: '/getTopLists',
  });
};

/**
 * @description: 获取排行榜歌单
 * @param {string} id
 * @return {*} Promise<ITopListSongResponse>
 */
export const getRanks = (id: string): Promise<ITopListSongResponse> => {
  return request.get<ITopListSongResponse>({
    url: `/getRanks?topId=${id}`,
  });
};
