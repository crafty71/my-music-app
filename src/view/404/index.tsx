import { Button, Result } from 'antd';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line react/display-name
const NOTFIND = memo(() => {
  const history = useNavigate();
  const handelToHome = () => {
    history('/');
  };
  return (
    <div className="_404">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button onClick={handelToHome}>返回首页</Button>}
      />
    </div>
  );
});

export default NOTFIND;
