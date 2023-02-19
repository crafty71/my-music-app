import RecommendedScroll from '@/components/RecommendedScroll';
import { useAppSelector } from '@/store/hock';
import { memo } from 'react';
import { RecommendedWrapper } from './style';

const Recommended = memo(() => {
  const homeRecommend = useAppSelector((state) => state.category.recommend);
  return (
    <RecommendedWrapper>
      <h2 className="title">精彩推荐</h2>
      <RecommendedScroll content={homeRecommend?.focus} />
    </RecommendedWrapper>
  );
});

Recommended.displayName = 'Recommended';

export default Recommended;
