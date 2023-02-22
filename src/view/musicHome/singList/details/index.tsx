import { useAppDispatch, useAppSelector } from '@/store/hock';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Space } from 'antd';
import { memo, useEffect } from 'react';
import { getSingerListData } from '../store/singList-slice';
import { DetailsWrapper } from './style';

const Details = memo(() => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSingerListData());
  }, [dispatch]);
  const singerList = useAppSelector((state) => state.singerList.singerList);
  return (
    <DetailsWrapper>
      <Space size={[100, 50]} wrap>
        {singerList?.data?.singerlist?.map((item) => {
          return (
            <div key={item.singer_name} className="content">
              <Avatar size={64} src={item.singer_pic} className="avatar" />
              <Button type="text">{item.singer_name}</Button>
            </div>
          );
        })}
      </Space>
    </DetailsWrapper>
  );
});

Details.displayName = 'Details';

export default Details;
