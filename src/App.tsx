import { memo, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Spin } from 'antd';

const App = memo(() => {
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
