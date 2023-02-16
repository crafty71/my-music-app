import { lazy } from 'react';
import { createBrowserRouter, RouteObject, Navigate } from 'react-router-dom';
const MyMusic = lazy(() => import('@/view/myMusic'));
const MusicHome = lazy(() => import('@/view/musicHome'));
import NOTFIND from '@/view/404';
const HomePage = lazy(() => import('@/view/musicHome/home'));
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/music-home/home'} />,
  },
  {
    path: '/music-home',
    element: <MusicHome />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/mine',
    element: <MyMusic />,
  },
  {
    path: '*',
    element: <NOTFIND />,
  },
];

const router = createBrowserRouter(routes);
export default router;
