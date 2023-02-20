import RankListScroll from '@/components/rank-list-scroll';
import { useAppSelector } from '@/store/hock';
import { memo } from 'react';
import { RankListWrapper } from './style';

const RankList = memo(() => {
  const homeRecommend = useAppSelector((state) => state.category.recommend);
  return (
    <RankListWrapper>
      <h2 className="title">排行榜</h2>
      <RankListScroll rankList={homeRecommend.toplist} />
    </RankListWrapper>
  );
});

RankList.displayName = 'RankList';

export default RankList;
