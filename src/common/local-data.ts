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
