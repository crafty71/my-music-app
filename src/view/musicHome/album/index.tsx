import { useAppDispatch, useAppSelector } from '@/store/hock';
import { Card, Divider, Space } from 'antd';
import Meta from 'antd/es/card/Meta';
import { memo, useEffect } from 'react';
import { getAlbumListData } from './store/album-slice';

const Album = memo(() => {
  const Dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.albumList.albumList);

  useEffect(() => {
    Dispatch(getAlbumListData());
  }, [Dispatch]);
  return (
    <div
      className="marginAuto max-w-6xl"
      style={{ marginTop: 50, paddingLeft: 100 }}
    >
      <Space size={[40, 40]} wrap>
        {list?.new_album?.data?.albums?.map((item) => {
          return (
            <Card
              key={item.id}
              hoverable
              style={{ width: 160, height: 300 }}
              cover={
                <img
                  alt="加载失败"
                  src="http://qpic.y.qq.com/music_cover/Lbibx7GJ6ZzToOtt2HL7x0FWJj3pC7oBTgS02tVXkIibKU0ygUhNfcKA/300?n=1&n=1"
                />
              }
            >
              <Meta
                title={item.name}
                description={item?.singers?.map((items) => {
                  return <span key={items?.name}>{items?.name} </span>;
                })}
              />
            </Card>
          );
        })}
      </Space>
      <Divider />
    </div>
  );
});

Album.displayName = 'Album';

export default Album;
