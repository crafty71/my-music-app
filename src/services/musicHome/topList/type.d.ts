/** 排行榜返回数据类型 */
export interface ITopListResponse {
  code: number;
  subcode: number;
  message: string;
  default: number;
  data: Data;
}

export interface Data {
  topList: TopList[];
}

export interface TopList {
  id: number;
  listenCount: number;
  picUrl: string;
  songList: SongList[];
  topTitle: string;
  type: number;
}

export interface SongList {
  singername: string;
  songname: string;
}

/** 排行榜歌单数据类型 */
export interface ITopListSongResponse {
  code: number;
  ts: number;
  start_ts: number;
  traceid: string;
  req_1: Req1;
}

export interface Req1 {
  code: number;
  data: Data;
}

export interface Data {
  data: Data2;
  songInfoList: any[];
  extInfoList: any[];
  songTagInfoList: any;
  indexInfoList: any;
}

export interface Data2 {
  topId: number;
  recType: number;
  topType: number;
  updateType: number;
  title: string;
  titleDetail: string;
  titleShare: string;
  titleSub: string;
  intro: string;
  cornerMark: number;
  period: string;
  updateTime: string;
  history: History;
  listenNum: number;
  totalNum: number;
  song: Song[];
  headPicUrl: string;
  frontPicUrl: string;
  mbFrontPicUrl: string;
  mbHeadPicUrl: string;
  pcSubTopIds: any[];
  pcSubTopTitles: any[];
  subTopIds: any[];
  adJumpUrl: string;
  h5JumpUrl: string;
  url_key: string;
  url_params: string;
  tjreport: string;
  rt: number;
  updateTips: string;
  bannerText: string;
  AdShareContent: string;
  abt: string;
  cityId: number;
  provId: number;
  sinceCV: number;
  musichallTitle: string;
  musichallSubtitle: string;
  musichallPicUrl: string;
  specialScheme: string;
  mbFrontLogoUrl: string;
  mbHeadLogoUrl: string;
  cityName: string;
  magicColor: MagicColor;
  topAlbumURL: string;
  groupType: number;
  icon: number;
  adID: number;
  mbIntroWebUrl: string;
  mbLogoUrl: string;
}

export interface History {
  year: any[];
  subPeriod: any[];
}

export interface Song {
  rank: number;
  rankType: number;
  rankValue: string;
  recType: number;
  songId: number;
  vid: string;
  albumMid: string;
  title: string;
  singerName: string;
  singerMid: string;
  songType: number;
  uuidCnt: number;
  cover: string;
  mvid: number;
}

export interface MagicColor {
  r: number;
  g: number;
  b: number;
}
