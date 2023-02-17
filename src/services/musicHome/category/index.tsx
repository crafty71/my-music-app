import request from '@/services';
import { IResponseData } from '@/services/request/type';
import { CategoryData, ICategorySongList } from './type';

/**
 * @description: 获取歌单分类
 * @return {*} Promise<IResponseData<CategoryData>>
 */
export const getCategory = (): Promise<IResponseData<CategoryData>> => {
  return request.get<IResponseData<CategoryData>>({
    url: '/getSongListCategories',
  });
};

export const getCategorySongList = (
  id: string,
  page = '1',
  limit = '20',
  sortId = '5',
) => {
  return request.get<IResponseData<ICategorySongList>>({
    url: `/getSongLists?categoryId=${id}?page=${page}?limit=${limit}?sortId=${sortId}`,
  });
};
