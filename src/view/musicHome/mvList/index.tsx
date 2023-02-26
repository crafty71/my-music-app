import { useAppDispatch, useAppSelector } from '@/store/hock';
import { Card, Divider, Space } from 'antd';
import Meta from 'antd/es/card/Meta';
import { memo, useEffect } from 'react';
import { getMVListData } from './store/store-slice';

const MVList = memo(() => {
  const MVList = useAppSelector((state) => state.MV.MVList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMVListData());
  }, [dispatch]);
  return (
    <div className="marginAuto max-w-6xl">
      <Divider />
      <Space size={[8, 16]} wrap>
        {MVList?.mvlist?.map((item) => {
          return (
            <Card
              key={item.mvtitle}
              hoverable
              style={{ width: 220 }}
              cover={<img alt="example" src={item.picurl} />}
            >
              <Meta
                title={item.singername}
                description={`发行时间：${item.pub_date}`}
              />
            </Card>
          );
        })}
      </Space>
      <Divider />
    </div>
  );
});

MVList.displayName = 'MVList';

export default MVList;
