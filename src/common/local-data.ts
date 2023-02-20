export interface IHeaderLinks {
  title?: string;
  link?: string;
}

export const headerLinks: IHeaderLinks[] = [
  {
    title: '音乐馆',
    link: '/',
  },
  {
    title: '我的音乐',
    link: '/app/mine',
  },
];

export const footerLinks: IHeaderLinks[] = [
  {
    title: '服务条款',
    link: 'https://st.music.163.com/official-terms/service',
  },
  {
    title: '隐私政策',
    link: 'https://st.music.163.com/official-terms/privacy',
  },
  {
    title: '儿童隐私政策',
    link: 'https://st.music.163.com/official-terms/children',
  },
  {
    title: '版权投诉指引',
    link: 'https://music.163.com/st/staticdeal/complaints.html',
  },
  {
    title: '意见反馈',
    link: '#',
  },
];

export const footerImages: IHeaderLinks[] = [
  {
    link: 'https://music.163.com/st/userbasic#/auth',
  },
  {
    link: 'https://music.163.com/recruit',
  },
  {
    link: 'https://music.163.com/web/reward',
  },
  {
    link: 'https://music.163.com/uservideo#/plan',
  },
];

// discover中的数据
export const Menu = [
  {
    title: '首页',
    link: '/app/music-home/home',
  },
  {
    title: '歌手',
    link: '/app/music-home/singer-list',
  },
  {
    title: '新碟',
    link: '/app/music-home/album',
  },
  {
    title: '排行榜',
    link: '/app/music-home/top-list',
  },
  {
    title: '分类歌单',
    link: '/app/music-home/category',
  },
  {
    title: '电台',
    link: '/app/music-home/radio',
  },
  {
    title: 'MV',
    link: '/app/music-home/mv-list',
  },
  {
    title: '数字专辑',
    link: '/app/music-home/album-mall',
  },
];

export const sortByRegion = [
  { id: -100, name: '全部' },
  { id: 200, name: '内地' },
  { id: 2, name: '港台' },
  { id: 5, name: '欧美' },
  { id: 4, name: '日本' },
  { id: 3, name: '韩国' },
  { id: 6, name: '其他' },
];

export const sortByType = [
  { id: -100, name: '全部' },
  { id: 1, name: '流行' },
  { id: 6, name: '嘻哈' },
  { id: 2, name: '摇滚' },
  { id: 4, name: '电子' },
  { id: 3, name: '民谣' },
  { id: 8, name: 'R&B' },
  { id: 10, name: '民歌' },
  { id: 9, name: '轻音乐' },
  { id: 5, name: '爵士' },
  { id: 14, name: '古典' },
  { id: 25, name: '乡村' },
  { id: 20, name: '蓝调' },
];

export const sortByHeaderLetter = [
  { id: -100, name: '热门' },
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' },
  { id: 4, name: 'D' },
  { id: 5, name: 'E' },
  { id: 6, name: 'F' },
  { id: 7, name: 'G' },
  { id: 8, name: 'H' },
  { id: 9, name: 'I' },
  { id: 10, name: 'J' },
  { id: 11, name: 'K' },
  { id: 12, name: 'L' },
  { id: 13, name: 'M' },
  { id: 14, name: 'N' },
  { id: 15, name: 'O' },
  { id: 16, name: 'P' },
  { id: 17, name: 'Q' },
  { id: 18, name: 'R' },
  { id: 19, name: 'S' },
  { id: 20, name: 'T' },
  { id: 21, name: 'U' },
  { id: 22, name: 'V' },
  { id: 23, name: 'W' },
  { id: 24, name: 'X' },
  { id: 25, name: 'Y' },
  { id: 26, name: 'Z' },
  { id: 27, name: '#' },
];

export const sortBySex = [
  { id: -100, name: '全部' },
  { id: 0, name: '男' },
  { id: 1, name: '女' },
  { id: 2, name: '组合' },
];
