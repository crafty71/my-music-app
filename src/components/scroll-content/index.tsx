import { ICategorySongList } from '@/services/musicHome/category/type';
import { memo, useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import './index.css';
import { ScrollerContentWrapper } from './style';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

interface IProps {
  categorySongList: ICategorySongList;
}
const ScrollContent = memo((props: IProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
  };
  const [list, setList] = useState(props.categorySongList.list);
  useEffect(() => {
    setList(props.categorySongList.list);
  }, [props.categorySongList]);
  return (
    <ScrollerContentWrapper>
      <Slider {...settings}>
        {list?.map((item) => {
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
      </Slider>
    </ScrollerContentWrapper>
  );
});

ScrollContent.displayName = 'ScrollContent';

export default ScrollContent;
