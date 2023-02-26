import request from '@/services';
import { INewAlbumResponse } from './type';

/**
 * @description: 获取新专辑列表
 * @return {*}
 */
export const getAlbumList = (): Promise<INewAlbumResponse> => {
  return request.get<INewAlbumResponse>({
    url: '/getNewDisks',
  });
};
