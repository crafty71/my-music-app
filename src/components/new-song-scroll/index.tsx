import { Songlist } from '@/services/musicHome/category/type';
import { memo } from 'react';
import Slider, { Settings } from 'react-slick';
import '../scroll-content/index.css';
import { ScrollerContentWrapper } from './style';
import { Avatar, Card, Skeleton } from 'antd';
import Meta from 'antd/es/card/Meta';
import { getCoverPic } from '@/services/musicHome/category';

interface IProps {
  songList: Songlist[];
}
const NewSongScroll = memo((props: IProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    rows: 4,
  };

  const getPicUrl = async (id: string) => {
    const res = await getCoverPic(id);
    return res.data.imageUrl;
  };
  return (
    <ScrollerContentWrapper>
      <Slider {...settings}>
        {props.songList?.map((item) => {
          return (
            <div key={item.name} className="img">
              <Card style={{ width: 350, marginTop: 16, overflow: 'hidden' }}>
                <Skeleton loading={false} avatar active>
                  <Meta
                    avatar={
                      <Avatar
                        src="https://y.qq.com/music/photo_new/T002R300x300M000003NA3At4H0ASw_1.jpg?max_age=2592000"
                        size={64}
                      />
                    }
                    title={item.name}
                    description={item.singer.map((item) => {
                      return <span key={item.name}>{item.name} </span>;
                    })}
                  />
                </Skeleton>
              </Card>
            </div>
          );
        })}
      </Slider>
    </ScrollerContentWrapper>
  );
});

NewSongScroll.displayName = 'ScrollContent';

export default NewSongScroll;
