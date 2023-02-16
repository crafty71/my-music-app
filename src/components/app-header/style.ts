import styled from 'styled-components';

export const AppHeaderWrapper = styled.div`
  .app-header {
    height: 90px;
  }

  .app-header .app-header-middle {
    height: 100%;
    line-height: 90px;
    margin: 0 auto;
  }
  .app-header .app-header-middle .image {
    display: inline-block;
    height: 45px;
    width: 170px;
    margin-right: 20px;
  }
  .app-header .app-header-middle .title {
    display: inline-block;
    padding: 0 20px;
    font-size: 18px;
  }
  .app-header .app-header-middle .hover:hover {
    color: #38bf7a;
  }
`;
