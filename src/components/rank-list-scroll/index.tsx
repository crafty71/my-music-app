import { Toplist } from '@/services/musicHome/category/type';
import { Space } from 'antd';
import { memo } from 'react';
import Slider, { Settings } from 'react-slick';
import { RankListScrollWrapper } from './style';

interface IProps {
  rankList: Toplist;
}
const RankListScroll = memo((props: IProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {props?.rankList?.data?.group?.map((item) => {
          return (
            <Space size={[4, 8]} wrap key={item.groupName}>
              <RankListScrollWrapper>
                <h3 className="title">{item.groupName}</h3>
                <h3 className="title-second">{item.toplist[0].title}</h3>
                {item.toplist[0].song.map((itemed, index) => {
                  return (
                    <div key={itemed.title} className="details">
                      <h4>
                        {index + 1} {itemed.title}
                      </h4>
                      <p className="content"> {itemed.singerName}</p>
                    </div>
                  );
                })}
              </RankListScrollWrapper>
            </Space>
          );
        })}
      </Slider>
    </div>
  );
});

RankListScroll.displayName = 'RankListScroll';

export default RankListScroll;
