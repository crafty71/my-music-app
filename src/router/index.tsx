import { lazy } from 'react';
import { createBrowserRouter, RouteObject, Navigate } from 'react-router-dom';
const MyMusic = lazy(() => import('@/view/myMusic'));
const MusicHome = lazy(() => import('@/view/musicHome'));
import NOTFIND from '@/view/404';
// import AppHeader from '@/components/app-header';
const HomePage = lazy(() => import('@/view/musicHome/home'));
const AppHeader = lazy(() => import('@/components/app-header'));
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/app/music-home/home'} />,
  },
  {
    path: 'app',
    element: <AppHeader />,
    children: [
      {
        path: 'music-home',
        element: <MusicHome />,
        children: [
          {
            path: 'home',
            element: <HomePage />,
          },
        ],
      },
      {
        path: 'mine',
        element: <MyMusic />,
      },
    ],
  },
  {
    path: '*',
    element: <NOTFIND />,
  },
];

const router = createBrowserRouter(routes);
export default router;
