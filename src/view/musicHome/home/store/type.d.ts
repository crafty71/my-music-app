import {
  CategoryData,
  ICategorySongList,
  IHomeRecommendResponse,
} from '@/services/musicHome/category/type';

export interface CounterState {
  categories: CategoryData;
  categorySong: ICategorySongList;
  recommend: IHomeRecommendResponse;
}
