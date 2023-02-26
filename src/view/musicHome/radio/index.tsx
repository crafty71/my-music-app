import { useAppDispatch, useAppSelector } from '@/store/hock';
import { Card, Divider, Space } from 'antd';
import Meta from 'antd/es/card/Meta';
import { memo, useEffect } from 'react';
import { getRadioListData } from './store/radio-slice';

const Radio = memo(() => {
  const radioList = useAppSelector((state) => state.radio.radioList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRadioListData());
  }, [dispatch]);
  return (
    <div className="marginAuto max-w-6xl">
      {radioList?.data?.groupList?.map((item) => {
        return (
          <div key={item.name}>
            <Divider />
            <p>{item.name}</p>
            <Divider />
            <Space size={[8, 16]} wrap>
              {item?.radioList?.map((items) => {
                return (
                  <Card
                    key={items?.radioName}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="加载失败" src={items.radioImg} />}
                  >
                    <Meta
                      title={items.radioName}
                      description={`播放量 ${items.listenNum}`}
                    />
                  </Card>
                );
              })}
            </Space>
          </div>
        );
      })}
    </div>
  );
});

Radio.displayName = 'Radio';

export default Radio;
