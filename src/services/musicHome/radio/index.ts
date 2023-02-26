import request from '@/services';
import { IResponseData } from '@/services/request/type';
import { IRadioResponse } from './type';

/**
 * @description: 获取电台列表
 * @return {*}
 */
export const getRadioList = (): Promise<IResponseData<IRadioResponse>> => {
  return request.get<IResponseData<IRadioResponse>>({
    url: '/getRadioLists',
  });
};
