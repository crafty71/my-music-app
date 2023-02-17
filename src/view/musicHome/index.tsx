import { Menu } from '@/common/local-data';
import { memo, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MusicHomeWrapper } from './style';

const MusicHome = memo(() => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  /**
   * @description: 当前选中index
   * @param {number} index 选中的index
   * @return {*} void
   */
  const handleRouter = (index: number): void => {
    setCurrentIndex(index);
  };
  return (
    <MusicHomeWrapper>
      <div className="music-home">
        <div className="music-home-content max-w-6xl">
          {Menu.map((item, index) => {
            return (
              <span
                key={item.title}
                className={
                  index === currentIndex
                    ? 'music-home-content-item bgGreen'
                    : 'music-home-content-item hover'
                }
                onClick={() => handleRouter(index)}
              >
                <Link to={`${item.link}`}>{item.title}</Link>
              </span>
            );
          })}
        </div>
      </div>
      <Outlet />
    </MusicHomeWrapper>
  );
});

MusicHome.displayName = 'MusicHome';

export default MusicHome;
