import { lazy } from 'react';
import { createBrowserRouter, RouteObject, Navigate } from 'react-router-dom';
const MyMusic = lazy(() => import('@/view/myMusic'));
const MusicHome = lazy(() => import('@/view/musicHome'));
const HomePage = lazy(() => import('@/view/musicHome/home'));
const AppHeader = lazy(() => import('@/components/app-header'));
const SingerList = lazy(() => import('@/view/musicHome/singList'));
const Album = lazy(() => import('@/view/musicHome/album'));
const NOTFIND = lazy(() => import('@/view/404'));
const TopList = lazy(() => import('@/view/musicHome/toplist'));
const Category = lazy(() => import('@/view/musicHome/category'));
const Radio = lazy(() => import('@/view/musicHome/radio'));
const MVList = lazy(() => import('@/view/musicHome/mvList'));
const AlbumMall = lazy(() => import('@/view/musicHome/albumMall'));
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
          {
            path: 'singer-list',
            element: <SingerList />,
          },
          {
            path: 'album',
            element: <Album />,
          },
          {
            path: 'top-list',
            element: <TopList />,
          },
          {
            path: 'category',
            element: <Category />,
          },
          {
            path: 'radio',
            element: <Radio />,
          },
          {
            path: 'mv-list',
            element: <MVList />,
          },
          {
            path: 'album-mall',
            element: <AlbumMall />,
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
