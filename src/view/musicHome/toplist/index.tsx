import { useAppDispatch, useAppSelector } from '@/store/hock';
import { Tabs } from 'antd';
import { memo, useEffect } from 'react';
import SingList from './childrenComponent/index';
import { getRankSing, getTopListData } from './store/topList-slice';

const TopList = memo(() => {
  const dispatch = useAppDispatch();
  const topList = useAppSelector((state) => state.topList.topList);
  useEffect(() => {
    dispatch(getTopListData());
    dispatch(getRankSing('4'));
  }, [dispatch]);

  const onChange = (key: string) => {
    dispatch(getRankSing(key));
  };
  return (
    <div className="marginAuto max-w-6xl">
      <Tabs
        defaultActiveKey="4"
        tabPosition="left"
        style={{ minHeight: 800 }}
        onChange={onChange}
        items={topList?.data?.topList?.map((item) => {
          return {
            label: `${item.topTitle}`,
            key: `${item.id}`,
            children: <SingList />,
          };
        })}
      />
    </div>
  );
});

TopList.displayName = 'TopList';

export default TopList;
