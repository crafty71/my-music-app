import request from '@/services';
import { IGetSingerListParams, ISingerListResponse } from './type';

export const getSingerList = (params?: IGetSingerListParams) => {
  return request.get<ISingerListResponse>({
    url: '/getSingerList',
    params,
  });
};
