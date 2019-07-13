import styled from 'styled-components';

export default styled.div`
  .header, .content {
    padding: 20px 30px;
  }
  .content {
    height: 64vh;
    overflow: auto;
    position: relative;
    margin-top: 70px;
  }
  .footer {
    padding: 15px 30px;
    overflow: hidden;
    background-color: rgba(255,255,255,0.01);
    height: 52px;
  }
  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: inline-block;
    width: 100%;
    height: 67px;
    .icon, span {
      vertical-align: middle;
      margin-top: 3px;
      display: inline-block;
    }
    &:not(.no-border)::after {
      content: '';
      position: absolute;
      right: 10px;
      left: 10px;
      height: 1px;
      bottom: 0;
      background-color: rgba(0,0,0,0.2);
    }
  }
`;
