import { memo, Suspense, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { useAppDispatch, useAppSelector } from './store/hock';
import { getCategoryData } from './store/test/async-slice';
import { Spin } from 'antd';

const App = memo(() => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.category.categories);
  console.log(list);

  useEffect(() => {
    dispatch(getCategoryData());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<Spin />}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </div>
  );
});

App.displayName = 'App';

export default App;
