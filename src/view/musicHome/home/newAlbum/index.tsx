import NewAlbumScroll from '@/components/new-album-scroll';
import { useAppSelector } from '@/store/hock';
import { memo } from 'react';
import { NewAlbumWrapper } from './style';

const NewAlbum = memo(() => {
  const homeRecommend = useAppSelector((state) => state.category.recommend);
  return (
    <NewAlbumWrapper>
      <h2 className="title">新碟首发</h2>
      <NewAlbumScroll newAlbum={homeRecommend?.new_album} />
    </NewAlbumWrapper>
  );
});

NewAlbum.displayName = 'NewAlbum';

export default NewAlbum;
