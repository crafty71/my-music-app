import request from '..';
import { IResponseData } from '../request/type';

export interface CategoryData {
  categories: Category[];
}

export interface Category {
  categoryGroupName: string;
  items: Item[];
  usable: number;
}

export interface Item {
  allsorts: Allsort[];
  categoryId: number;
  categoryName: string;
  usable: number;
}

export interface Allsort {
  sortId: number;
  sortName: string;
}
export const testAxios = () => {
  return request.get<IResponseData<CategoryData>>({
    url: '/getSongListCategories',
  });
};
