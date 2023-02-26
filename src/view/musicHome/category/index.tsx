import CategoryScroll from '@/components/categoty-scroll';
import { useAppDispatch, useAppSelector } from '@/store/hock';
import { Card, Divider, Space } from 'antd';
import Meta from 'antd/es/card/Meta';
import { memo, useEffect } from 'react';
import { getCategoryData } from '../home/store/category-slice';
import { CategoryWrapper } from './style';

const Category = memo(() => {
  const list = useAppSelector((state) => state.category.categories);
  const categorySongList = useAppSelector(
    (state) => state.category.categorySong,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategoryData());
  }, [dispatch]);
  return (
    <CategoryWrapper className="marginAuto max-w-6xl">
      <div className="category">
        <CategoryScroll categoryList={list} />
        <Divider />
        <Space size={[8, 16]} wrap>
          {categorySongList?.list?.map((item) => {
            return (
              <div key={item.imgurl} className="img">
                <Card
                  hoverable
                  style={{ width: 270, overflow: 'hidden' }}
                  cover={<img alt="example" src={item.imgurl} />}
                >
                  <Meta title={item.dissname} description={item.creator.name} />
                </Card>
              </div>
            );
          })}
        </Space>
      </div>
    </CategoryWrapper>
  );
});

Category.displayName = 'Category';

export default Category;
