import { useAppDispatch } from '@/store/hock';
import { memo, useEffect } from 'react';
import NewAlbum from './newAlbum';
import NewSong from './newSong';
import Recommended from './recommended';
import RecommendSongList from './recommendSongList';
import { getRecommendData } from './store/category-slice';
import { HomeWrapper } from './style';

const HomePage = memo(() => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRecommendData());
  });
  return (
    <HomeWrapper>
      <div className="home-page max-w-6xl">
        <RecommendSongList />
        <NewSong />
        <Recommended />
        <NewAlbum />
      </div>
    </HomeWrapper>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
