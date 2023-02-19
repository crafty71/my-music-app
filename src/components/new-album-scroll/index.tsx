import { NewAlbum } from '@/services/musicHome/category/type';
import { memo } from 'react';
import Slider, { Settings } from 'react-slick';
import './index.css';
import { ScrollerContentWrapper } from './style';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

interface IProps {
  newAlbum: NewAlbum;
}
const NewAlbumScroll = memo((props: IProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: false,
    rows: 2,
  };
  return (
    <ScrollerContentWrapper>
      <Slider {...settings}>
        {props?.newAlbum?.data?.albums?.map((item) => {
          return (
            <div key={item.name} className="img">
              <Card
                hoverable
                style={{ width: 270, overflow: 'hidden' }}
                cover={
                  <img
                    alt="记载失败"
                    src="https://y.qq.com/music/photo_new/T002R300x300M000003NA3At4H0ASw_1.jpg?max_age=2592000"
                  />
                }
              >
                <Meta
                  title={item.name}
                  description={item.singers
                    .filter((_item, index) => {
                      return index < 2;
                    })
                    .map((items) => {
                      return <span key={items.name}>{items.name} </span>;
                    })}
                />
              </Card>
            </div>
          );
        })}
      </Slider>
    </ScrollerContentWrapper>
  );
});

NewAlbumScroll.displayName = 'NewAlbumScroll';

export default NewAlbumScroll;
