import styled from 'styled-components';

export default styled.div`
    border-radius: 5px;
    padding: 20px;
    color: #fff;
    width: calc(50% - 10px);
    background-color: ${props => props.color || `rgba(0,0,0,0.5)`};
    text-align: center;
    float: left;
    margin: 5px;
    font-weight: bold;
    font-size: 15px;
`;
