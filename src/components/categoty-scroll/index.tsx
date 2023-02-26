import { CategoryData, Item } from '@/services/musicHome/category/type';
import { memo, SetStateAction, useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import './index.css';
import { ScrollerContentWrapper } from './style';
import { Button, Card } from 'antd';
import { useAppDispatch } from '@/store/hock';
import { getCategorySongListData } from '@/view/musicHome/home/store/category-slice';

interface IProps {
  categoryList: CategoryData;
}
const CategoryScroll = memo((props: IProps) => {
  const dispatch = useAppDispatch();
  const [categoryId, setCategoryId] = useState('10000000');
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    dispatch(getCategorySongListData(categoryId));
  }, [categoryId, dispatch]);
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
  };
  const handleButtonClick = (item: Item) => {
    setCategoryId(item.categoryId + '');
    getCategorySongListData(item.categoryId + '');
  };
  return (
    <ScrollerContentWrapper>
      <Slider {...settings}>
        {props?.categoryList.categories?.map((item) => {
          return (
            <div key={item.categoryGroupName} className="img">
              <Card
                title={item.categoryGroupName}
                bordered={false}
                style={{ width: 270, overflow: 'hidden', height: 320 }}
              >
                {item.items.map((items) => {
                  return (
                    <Button
                      key={items.categoryName}
                      type={
                        items.categoryId + '' === categoryId ? 'link' : 'text'
                      }
                      onClick={() => {
                        handleButtonClick(items);
                      }}
                    >
                      {items.categoryName}
                    </Button>
                  );
                })}
              </Card>
            </div>
          );
        })}
      </Slider>
    </ScrollerContentWrapper>
  );
});

CategoryScroll.displayName = 'CategoryScroll';

export default CategoryScroll;
