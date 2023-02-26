export interface Root {
  response: Response;
}

export interface Response {
  code: number;
  subcode: number;
  message: string;
  default: number;
  data: IMVResponse;
}

export interface IMVResponse {
  lan: string;
  mvlist: Mvlist[];
  name: string;
  sum: number;
}

export interface Mvlist {
  listennum: number;
  mv_id: number;
  mvdesc: string;
  mvscore: number;
  mvtitle: string;
  picurl: string;
  pub_date: string;
  publictime: string;
  singer_id: number;
  singer_mid: string;
  singer_name: string;
  singerid: number;
  singermid: string;
  singername: string;
  singers: Singer[];
  vid: string;
}

export interface Singer {
  id: number;
  mid: string;
  name: string;
}
