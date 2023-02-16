import { memo } from 'react';
import { Outlet } from 'react-router-dom';

// eslint-disable-next-line react/display-name
const MusicHome = memo(() => {
  return (
    <div>
      <Outlet />
    </div>
  );
});

export default MusicHome;
