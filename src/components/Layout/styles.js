import styled from 'styled-components';

export default styled.div`
  .header, .content {
    padding: 20px 30px;
  }
  .content {
    height: 64vh;
    overflow: auto;
    position: relative;
  }
  .footer {
    padding: 15px 30px;
    overflow: hidden;
    background-color: rgba(255,255,255,0.01);
    height: 52px;
  }
  .header {
    position: relative;
    display: inline-block;
    width: 100%;
    .icon, span {
      vertical-align: middle;
      margin-top: 3px;
    }
    &:not(.no-border)::after {
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
