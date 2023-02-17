export interface CategoryData {
  /**分类组 */
  categories: Category[];
}

export interface Category {
  /**分类数据 */
  categoryGroupName: string;
  /**分类组子组 */
  items: Item[];
  /**状态 */
  usable: number;
}

export interface Item {
  /**分类 */
  allsorts: Allsort[];
  /**分类id */
  categoryId: number;
  /**分类名 */
  categoryName: string;
  /**状态 */
  usable: number;
}

export interface Allsort {
  /**分类id */
  sortId: number;
  /**分类名 */
  sortName: string;
}

export interface ICategorySongList {
  uin: number;
  categoryId: number;
  sortId: number;
  sum: number;
  sin: number;
  ein: number;
  list: List[];
}

export interface List {
  dissid: string;
  createtime: string;
  commit_time: string;
  dissname: string;
  imgurl: string;
  introduction: string;
  listennum: number;
  score: number;
  version: number;
  creator: Creator;
}

export interface Creator {
  type: number;
  qq: number;
  encrypt_uin: string;
  name: string;
  isVip: number;
  avatarUrl: string;
  followflag: number;
}
