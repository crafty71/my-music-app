import styled from 'styled-components';

export const ScrollerContentWrapper = styled.div`
  .img {
    display: inline-block;
    margin-right: 10px;
  }
  .img .span-content {
    display: inline-block;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
