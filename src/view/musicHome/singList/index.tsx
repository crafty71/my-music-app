import {
  sortByHeaderLetter,
  sortByRegion,
  sortBySex,
  sortByType,
} from '@/common/local-data';
import { Button, Space } from 'antd';
import { memo } from 'react';

const SingerList = memo(() => {
  return (
    <div className="marginAuto max-w-6xl">
      <div>
        <Space size={[1, 1]} wrap>
          {sortByHeaderLetter.map((item) => (
            <Button key={item.name} type="text">
              {item.name}
            </Button>
          ))}
        </Space>
      </div>
      <div>
        <Space size={[1, 1]} wrap>
          {sortByRegion.map((item) => (
            <Button key={item.name} type="text">
              {item.name}
            </Button>
          ))}
        </Space>
      </div>
      <div>
        <Space size={[1, 1]} wrap>
          {sortByType.map((item) => (
            <Button key={item.name} type="text">
              {item.name}
            </Button>
          ))}
        </Space>
      </div>
      <div>
        <Space size={[1, 1]} wrap>
          {sortBySex.map((item) => (
            <Button key={item.name} type="text">
              {item.name}
            </Button>
          ))}
        </Space>
      </div>
    </div>
  );
});

SingerList.displayName = 'SingerList';

export default SingerList;
