import { memo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hock';
import { getCategoryData } from './store/test/async-slice';

// eslint-disable-next-line react/display-name
const App = memo(() => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.category.categories);
  console.log(list);

  useEffect(() => {
    dispatch(getCategoryData());
  }, [dispatch]);

  return (
    <div>
      <div>{list?.categories?.length}</div>
    </div>
  );
});

export default App;
