import { memo } from 'react';
import RecommendSongList from './recommendSongList';
import { HomeWrapper } from './style';

const HomePage = memo(() => {
  return (
    <HomeWrapper>
      <div className="home-page max-w-6xl">
        <RecommendSongList />
      </div>
    </HomeWrapper>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
