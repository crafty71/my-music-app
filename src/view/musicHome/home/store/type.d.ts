import {
  CategoryData,
  ICategorySongList,
} from '@/services/musicHome/category/type';

export interface CounterState {
  categories: CategoryData;
  categorySong: ICategorySongList;
}
