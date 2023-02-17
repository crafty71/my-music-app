import ScrollContent from '@/components/scroll-content';
import { useAppDispatch, useAppSelector } from '@/store/hock';
import { Select } from 'antd';
import { memo, useEffect, useState } from 'react';
import {
  getCategoryData,
  getCategorySongListData,
} from '../store/category-slice';
import { RecommendWrapper } from './style';

const RecommendSongList = memo(() => {
  const { Option } = Select;
  const dispatch = useAppDispatch();
  const [categoryId] = useState('10000000');
  const list = useAppSelector((state) => state.category.categories);
  const categorySongList = useAppSelector(
    (state) => state.category.categorySong,
  );
  console.log('====================================');
  console.log(categorySongList);
  console.log('====================================');
  useEffect(() => {
    dispatch(getCategoryData());
    dispatch(getCategorySongListData(categoryId));
  }, [categoryId, dispatch]);

  /**
   * @description: 处理select 选中事件
   * @param {string} value
   * @return {*}
   */
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    dispatch(getCategorySongListData(value));
  };
  return (
    <RecommendWrapper>
      <div className="recommend-song-list">
        <h2>歌单推荐</h2>
        {list?.categories?.map((item) => {
          return (
            <Select
              key={item?.categoryGroupName}
              defaultValue={item.categoryGroupName}
              style={{ width: 150 }}
              onChange={handleChange}
              bordered={false}
            >
              {item?.items?.map((news) => (
                <Option key={news?.categoryName} value={news?.categoryId}>
                  {news?.categoryName}
                </Option>
              ))}
            </Select>
          );
        })}
      </div>
      <div className="scroll-content">
        <ScrollContent categorySongList={categorySongList} />
      </div>
    </RecommendWrapper>
  );
});

RecommendSongList.displayName = 'RecommendSongList';

export default RecommendSongList;
