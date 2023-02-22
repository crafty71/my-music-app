import { memo } from 'react';
import Details from './details';
import Sort from './sort/Sort';

const SingerList = memo(() => {
  return (
    <div className="marginAuto max-w-6xl">
      <Sort />
      <Details />
    </div>
  );
});

SingerList.displayName = 'SingerList';

export default SingerList;
