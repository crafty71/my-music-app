/** 获取新专辑接口数据 */
export interface INewAlbumResponse {
  code: number;
  ts: number;
  start_ts: number;
  traceid: string;
  new_album: NewAlbum;
  new_album_tag: NewAlbumTag;
}

export interface NewAlbum {
  code: number;
  data: Data;
}

export interface Data {
  albums: Album[];
  ret_msg: string;
  total: number;
}

export interface Album {
  id: number;
  mid: string;
  name: string;
  trans_name: string;
  singers: Singer[];
  type: number;
  language: number;
  genre: number;
  area: number;
  movie: string;
  release_time: string;
  company: Company2;
  status: number;
  index: string;
  tag: string;
  pay: Pay;
  ex: Ex4;
  photo: Photo2;
  tmetags: string;
  ex_status: number;
  show_com_new: number;
  companyshow: Companyshow;
  modify_time: string;
  str_genre: string;
  album_right: number;
  Fpay_control: number;
  cd_album_id: string;
  mini_album_id: string;
  data: Data2;
  album_wiki: string;
}

export interface Singer {
  id: number;
  mid: string;
  name: string;
  foreign_name: string;
  type: number;
  genre: number;
  area: number;
  company: Company;
  grade: number;
  origin: number;
  enter: number;
  country: number;
  identity: number;
  birthday: string;
  instrument: number;
  ex: Ex2;
  photo: Photo;
  opt_grade: number;
  status: number;
  opt_grade_new: number;
  vertical_type: string;
  singer_wiki: string;
}

export interface Company {
  id: number;
  name: string;
  ex: Ex;
}

export interface Ex {
  desc: string;
  company_photo: number;
}

export interface Ex2 {
  desc: string;
  wiki: string;
  tag: string;
  ex_status: number;
  ex_identity: number;
  info_name: string;
  name_spell: string;
  band: string;
  dieDate: string;
}

export interface Photo {
  has_photo: number;
  photo_cnt: number;
  big_photo_flag: string;
  magic_rgb: number;
  pic1_flag: number;
  pic2_flag: number;
  pic_mid: string;
}

export interface Company2 {
  id: number;
  name: string;
  ex: Ex3;
}

export interface Ex3 {
  desc: string;
  company_photo: number;
}

export interface Pay {
  payment_total: number;
  payment_album_type: number;
  payment_discount: number;
  payment_discount_beg: number;
  payment_discount_end: number;
  payment_beg: string;
  payment_end: string;
  pre_sale_beg: string;
  str_payment_discount_beg: string;
  str_payment_discount_end: string;
}

export interface Ex4 {
  desc: string;
  track_nums: number;
  playable_track_nums: number;
  album_tag3: number;
  singer_tag: string;
  album_tag5: string;
  schedule_status: number;
  long_audio_nums: number;
  caliber: number;
}

export interface Photo2 {
  gaus_pic: string;
  has_photo: number;
  pic_mid: string;
  vip_flag: number;
  pay_flag: number;
  version: number;
  primecolor: number;
  magic_class: number;
  magic_color: number;
}

export interface Companyshow {
  id: number;
  name: string;
  ex: Ex5;
}

export interface Ex5 {
  desc: string;
  company_photo: number;
}

export interface Data2 {
  int2: number;
  int3: number;
  update_time: string;
  int4: number;
}

export interface NewAlbumTag {
  code: number;
  data: Data3;
}

export interface Data3 {
  area: Area[];
}

export interface Area {
  name: string;
  id: number;
  tjreport: string;
}
