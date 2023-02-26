import { IResponseData } from '@/services/request/type';
import request from '@/services';
import { IMVResponse } from './type';

/**
 * @description: 获取MV列表
 * @return {*} Promise<IResponseData<IRadioResponse>>
 */
export const getMVList = (): Promise<IResponseData<IMVResponse>> => {
  return request.get<IResponseData<IMVResponse>>({
    url: '/getMvByTag',
  });
};
