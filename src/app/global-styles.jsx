import { createGlobalStyle } from 'styled-components';

import SegoeUIEot from './assets/fonts/segoeUI/SegoeUI.eot';
import SegoeUITtf from './assets/fonts/segoeUI/SegoeUI.ttf';
import SegoeUIWoff from './assets/fonts/segoeUI/SegoeUI.woff';

import SegoeUILightEot from './assets/fonts/segoeUI/SegoeUILight.eot';
import SegoeUILightTtf from './assets/fonts/segoeUI/SegoeUILight.ttf';
import SegoeUILightWoff from './assets/fonts/segoeUI/SegoeUILight.woff';

import SegoeUISemiBoldEot from './assets/fonts/segoeUI/SegoeUISemibold.eot';
import SegoeUISemiBoldTtf from './assets/fonts/segoeUI/SegoeUISemibold.ttf';
import SegoeUISemiBoldWoff from './assets/fonts/segoeUI/SegoeUISemibold.woff';

import SegoeUIBoldEot from './assets/fonts/segoeUI/SegoeUIBold.eot';
import SegoeUIBoldTtf from './assets/fonts/segoeUI/SegoeUIBold.ttf';
import SegoeUIBoldWoff from './assets/fonts/segoeUI/SegoeUIBold.woff';

export default createGlobalStyle`
  @font-face {
    font-family: SegoeUI;
    font-style: normal;
    font-weight: 100;
    src: url('${SegoeUIEot}');
    src: url('${SegoeUIEot}?#iefix') format('embedded-opentype'), /* IE6-8 */ url('${SegoeUIWoff}') format('woff'), /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('${SegoeUITtf}') format('truetype');
  }
  @font-face {
    font-family: SegoeUI;
    font-style: normal;
    font-weight: 300;
    src: url('${SegoeUILightEot}');
    src: url('${SegoeUILightEot}?#iefix') format('embedded-opentype'), /* IE6-8 */ url('${SegoeUILightWoff}') format('woff'), /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('${SegoeUILightTtf}') format('truetype');
  }
  @font-face {
    font-family: SegoeUI;
    font-style: normal;
    font-weight: 500;
    src: url('${SegoeUISemiBoldEot}');
    src: url('${SegoeUISemiBoldEot}?#iefix') format('embedded-opentype'), /* IE6-8 */ url('${SegoeUISemiBoldWoff}') format('woff'), /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('${SegoeUISemiBoldTtf}') format('truetype');
  }
  @font-face {
    font-family: SegoeUI;
    font-style: normal;
    font-weight: bold;
    src: url('${SegoeUIBoldEot}');
    src: url('${SegoeUIBoldEot}?#iefix') format('embedded-opentype'), /* IE6-8 */ url('${SegoeUIBoldWoff}') format('woff'), /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('${SegoeUIBoldTtf}') format('truetype');
  }
  body {
    position: relative;
    height: 100vh;
    background-color: #fafafa;
    color: #444;
    font-family: 'SegoeUI', sans-serif;
    overflow-y: hidden;
    padding: 0;
    margin: 0;
  }
  #root {
    width: 100%;
    height: 100%;
    display: inline-block;
  }
  * {
    box-sizing: border-box;
    user-select: none;
  }
  span, p {
    cursor: default;
  }
  a {
    text-decoration: none;
  }
  p, h1, h2, h3, h4, h5, h6, ul, figure {
    margin: 0;
    padding: 0;
  }
  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter-active{
    opacity: 1;
    transition: opacity 350ms ease;
  }
  .fade-exit{
    opacity: 1;
  }
  .fade-exit-active{
    opacity: 0.01;
    transition: opacity 350ms ease;
  }
`;
