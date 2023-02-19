import NewSongScroll from '@/components/new-song-scroll';
import { useAppSelector } from '@/store/hock';
import { memo } from 'react';
import { NewSongWrapper } from './style';

const NewSong = memo(() => {
  const homeRecommend = useAppSelector((state) => state.category.recommend);
  return (
    <NewSongWrapper>
      <div className="title">
        <h2>新歌首发</h2>
      </div>
      <div>
        <NewSongScroll songList={homeRecommend?.new_song?.data?.songlist} />
      </div>
    </NewSongWrapper>
  );
});

NewSong.displayName = 'NewSong';

export default NewSong;
