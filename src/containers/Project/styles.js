import styled from 'styled-components';
import PlayIcon from './assets/play.svg';
import StopIcon from './assets/stop.svg';

const StartStopButton = styled.button`
  width: 120px;
  height: 120px;
  border-radius: 10rem;
  background-color: #CE3636;
  appearance: none;
  outline: 0;
  border: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
  background-image: url(${props => props.isStarted ? StopIcon : PlayIcon});
  background-size: 30px;
  background-position: ${props => props.isStarted ? 'center' : '48px'} center;
  background-repeat: no-repeat;
  ${props => props.isStarted ? `
    @keyframes shadow-pulse
    {
      0% {
        box-shadow: 0 0 0 0px rgba(206, 54, 54, 0.2);
      }
      100% {
        box-shadow: 0 0 0 45px rgba(206, 54, 54, 0);
      }
    }
    animation: shadow-pulse 2s infinite;
  ` : ``}
`;

export {
  StartStopButton,
};