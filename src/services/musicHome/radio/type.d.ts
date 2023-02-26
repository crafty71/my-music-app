export interface Root {
  response: Response;
}

export interface IResponse {
  code: number;
  subcode: number;
  message: string;
  default: number;
  data: IRadioResponse;
}

export interface IRadioResponse {
  data: Data2;
}

export interface Data2 {
  gmgg: any;
  groupList: GroupList[];
}

export interface GroupList {
  name: string;
  radioList: RadioList[];
  type: string;
}

export interface RadioList {
  Fnew: string;
  Fonly: string;
  listenNum: string;
  radioFphoto1: string;
  radioFphoto2: string;
  radioId: string;
  radioImg: string;
  radioName: string;
  Fhot?: string;
}
