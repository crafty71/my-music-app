import { useAppSelector } from '@/store/hock';
import { Table, Image } from 'antd';
import { memo } from 'react';

const SingList = memo(() => {
  const list = useAppSelector((state) => state.topList.rankSong);

  const columns = [
    {
      title: '热度',
      dataIndex: 'rankValue',
      key: 'rankValue',
    },
    {
      dataIndex: 'cover',
      key: 'cover',
      render: (record: string) => (
        //   console.log("record的内容",record)
        <Image width={50} src={record} />
      ),
    },
    {
      title: '歌名',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '歌手',
      dataIndex: 'singerName',
      key: 'singerName',
    },
  ];

  return <Table dataSource={list?.req_1?.data?.data?.song} columns={columns} />;
});

SingList.displayName = 'SingList';

export default SingList;
