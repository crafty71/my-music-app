import { Focus } from '@/services/musicHome/category/type';
import { memo } from 'react';
import Slider, { Settings } from 'react-slick';
import './index.css';
import { ScrollerContentWrapper } from './style';
import { Image } from 'antd';

interface IProps {
  content: Focus;
}
const RecommendedScroll = memo((props: IProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
  };
  return (
    <ScrollerContentWrapper>
      <Slider {...settings}>
        {props?.content?.data?.content?.map((item) => {
          return (
            <div key={item.pic_info.url} className="img">
              <Image
                preview={false}
                src={item.pic_info.url}
                width={560}
                height={230}
              />
            </div>
          );
        })}
      </Slider>
    </ScrollerContentWrapper>
  );
});

RecommendedScroll.displayName = 'RecommendedScroll';

export default RecommendedScroll;
