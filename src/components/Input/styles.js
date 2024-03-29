import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
  label {
    flex: 0.6;
    font-weight: 100;
  }
  select {
    flex: 1;
  }
  input {
    padding: 10px 15px;
    border-radius: 3px;
    appearance: none;
    outline: 0;
    border: 0;
    width: 100%;
    flex: 1;
  }
  input[type="color"] {
    border: 1px solid #fff;
    border-radius: 4px;
    width: 50px;
    height: 50px;
    padding: 2px;
    flex: 0 0 50px;
  }
  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  input[type="color"]::-webkit-color-swatch {
    border: none;
  }
  .error-message {
    display: block;
    color: #ff2a2a;
    font-size: 13px;
    width: 100%;
    margin: 10px 0;
  }
`;
