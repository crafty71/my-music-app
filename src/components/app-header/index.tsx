import { memo, useState } from 'react';
import { AppHeaderWrapper } from './style';
import { headerLinks, IHeaderLinks } from '../../common/local-data';

import logo from '../../assets/images/logo.png';
import { Link, Outlet } from 'react-router-dom';

const AppHeader = memo(() => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleRouter = (item: IHeaderLinks, index: number) => {
    setCurrentIndex(index);
  };
  return (
    <AppHeaderWrapper>
      <div className="app-header bg-white">
        <div className="app-header-middle max-w-6xl">
          <img src={logo} alt="" className="image" />
          {headerLinks.map((item, index) => {
            return (
              <span
                key={item.title}
                className={
                  index === currentIndex
                    ? 'title bg-green-400 text-white'
                    : 'title hover'
                }
                onClick={() => handleRouter(item, index)}
              >
                <Link to={`${item.link}`}>{item.title}</Link>
              </span>
            );
          })}
        </div>
        <Outlet />
      </div>
    </AppHeaderWrapper>
  );
});

AppHeader.displayName = 'AppHeader';

export default AppHeader;
