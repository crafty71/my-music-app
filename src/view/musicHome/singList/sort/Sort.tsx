import {
  sortByHeaderLetter,
  sortByRegion,
  sortBySex,
  sortByType,
} from '@/common/local-data';
import { IGetSingerListParams } from '@/services/musicHome/singerList/type';
import { useAppDispatch } from '@/store/hock';
import { Button, Space } from 'antd';
import { memo, useEffect, useState } from 'react';
import { getSingerListData } from '../store/singList-slice';

interface IItem {
  id: number;
  name: string;
}

const Sort = memo(() => {
  // const letterRef = useRef(0);
  const [letter, setLetter] = useState(0);
  const [region, setRegion] = useState(0);
  const [sex, setSex] = useState(0);
  const [type, setType] = useState(0);
  const [params, setParams] = useState<IGetSingerListParams>();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSingerListData(params));
  }, [dispatch, params]);

  const handleLetter = (index: number, item: IItem) => {
    setLetter(index);
    const paramsTem = {
      index: item.id + '',
    };
    setParams(paramsTem);
  };

  const handleRegion = (index: number, item: IItem) => {
    const paramsTem = {
      area: item.id + '',
    };
    setRegion(index);
    setParams(paramsTem);
  };
  function handleType(index: number, item: IItem) {
    setType(index);
    const paramsTem = {
      genre: item.id + '',
    };
    setParams(paramsTem);
  }

  function handleSex(index: number, item: IItem) {
    setSex(index);
    const paramsTem = {
      sex: item.id + '',
    };
    setParams(paramsTem);
  }

  return (
    <div style={{ marginBottom: '40px' }}>
      <div>
        <Space size={[1, 1]} wrap>
          {sortByHeaderLetter.map((item, index) => (
            <Button
              key={item.name}
              type={letter === index ? 'link' : 'text'}
              onClick={() => {
                handleLetter(index, item);
              }}
            >
              {item.name}
            </Button>
          ))}
        </Space>
      </div>
      <div>
        <Space size={[1, 1]} wrap>
          {sortByRegion.map((item, index) => (
            <Button
              key={item.name}
              type={region === index ? 'link' : 'text'}
              onClick={() => {
                handleRegion(index, item);
              }}
            >
              {item.name}
            </Button>
          ))}
        </Space>
      </div>
      <div>
        <Space size={[1, 1]} wrap>
          {sortByType.map((item, index) => (
            <Button
              key={item.name}
              type={type === index ? 'link' : 'text'}
              onClick={() => {
                handleType(index, item);
              }}
            >
              {item.name}
            </Button>
          ))}
        </Space>
      </div>
      <div>
        <Space size={[1, 1]} wrap>
          {sortBySex.map((item, index) => (
            <Button
              key={item.name}
              type={sex === index ? 'link' : 'text'}
              onClick={() => {
                handleSex(index, item);
              }}
            >
              {item.name}
            </Button>
          ))}
        </Space>
      </div>
    </div>
  );
});

Sort.displayName = 'Sort';

export default Sort;
