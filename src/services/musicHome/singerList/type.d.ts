export interface IGetSingerListParams {
  area?: string;
  sex?: string;
  index?: string;
  genre?: string;
}

export interface ISingerListResponse {
  code: number;
  ts: number;
  start_ts: number;
  traceid: string;
  singerList: SingerList;
}

export interface SingerList {
  code: number;
  data: Data;
}

export interface Data {
  area: number;
  genre: number;
  index: number;
  sex: number;
  singerlist: Singerlist[];
  tags: Tags;
  total: number;
}

export interface Singerlist {
  country: string;
  singer_id: number;
  singer_mid: string;
  singer_name: string;
  singer_pic: string;
}

export interface Tags {
  area: Area[];
  genre: Genre[];
  index: Index[];
  sex: Sex[];
}

export interface Area {
  id: number;
  name: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Index {
  id: number;
  name: string;
}

export interface Sex {
  id: number;
  name: string;
}
