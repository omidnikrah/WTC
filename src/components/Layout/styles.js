import styled from 'styled-components';

export default styled.div`
  .header, .content {
    padding: 20px 30px;
  }
  .content {
    height: 80vh;
    overflow: auto;
  }
  .header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &::after {
      content: '';
      position: absolute;
      right: 10px;
      left: 10px;
      height: 1px;
      bottom: 0;
      background-color: rgba(0,0,0,0.4);
    }
  }
`;
