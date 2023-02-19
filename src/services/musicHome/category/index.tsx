import request from '@/services';
import { IResponseData } from '@/services/request/type';
import {
  CategoryData,
  ICategorySongList,
  IHomeRecommendResponse,
  IImageCover,
} from './type';

/**
 * @description: 获取歌单分类
 * @return {*} Promise<IResponseData<CategoryData>>
 */
export const getCategory = (): Promise<IResponseData<CategoryData>> => {
  return request.get<IResponseData<CategoryData>>({
    url: '/getSongListCategories',
  });
};

/**
 * @description: 获取分类歌单
 * @return {*} Promise<IResponseData<ICategorySongList>>
 */
export const getCategorySongList = (
  id: string,
  page = '1',
  limit = '20',
  sortId = '5',
): Promise<IResponseData<ICategorySongList>> => {
  return request.get<IResponseData<ICategorySongList>>({
    url: `/getSongLists?categoryId=${id}?page=${page}?limit=${limit}?sortId=${sortId}`,
  });
};

/**
 * @description: 获取首页推荐
 * @return {*}
 */
export const getHomeRecommend = (): Promise<IHomeRecommendResponse> => {
  return request.get<IHomeRecommendResponse>({
    url: '/getRecommend',
  });
};

/**
 * @description: 获取歌曲 /专辑 图片
 * @param {string} id 专辑或者歌单请求结果的id
 * @return {*}
 */
export const getCoverPic = (
  id: string,
): Promise<IResponseData<IImageCover>> => {
  return request.get<IResponseData<IImageCover>>({
    url: `/getImageUrl?id=${id}`,
  });
};
