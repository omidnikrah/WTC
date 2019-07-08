import styled from "styled-components";

export default styled.div`
  a {
    border-radius: 5px;
    padding: 20px;
    color: #fff;
    text-align: center;
    float: left;
    margin: 5px;
    font-weight: bold;
    font-size: 15px;
    width: calc(50% - 10px);
    background-color: ${props => props.color || `rgba(0,0,0,0.5)`};
  }
`;
