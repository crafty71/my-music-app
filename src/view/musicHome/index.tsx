import { memo } from 'react';
import { Outlet } from 'react-router-dom';

const MusicHome = memo(() => {
  return (
    <div>
      <Outlet />
    </div>
  );
});

MusicHome.displayName = 'MusicHome';

export default MusicHome;
