import styled, { createGlobalStyle } from 'styled-components'
import COLORS from 'assets/theme/colors'
import WhiteCursor from 'assets/images/WhiteCursor.svg'
import BlackCursor from 'assets/images/BlackCursor.svg'

import CircularWoff from 'assets/fonts/CircularStd-Book.woff'
import CircularTtf from 'assets/fonts/CircularStd-Book.ttf'
import CircularEot from 'assets/fonts/CircularStd-Book.eot'

import CircularMediumWoff from 'assets/fonts/CircularStd-Medium.woff'
import CircularMediumTtf from 'assets/fonts/CircularStd-Medium.ttf'
import CircularMediumEot from 'assets/fonts/CircularStd-Medium.eot'

import CircularBoldWoff from 'assets/fonts/CircularStd-Bold.woff'
import CircularBoldTtf from 'assets/fonts/CircularStd-Bold.ttf'
import CircularBoldEot from 'assets/fonts/CircularStd-Bold.eot'

import CircularBlackWoff from 'assets/fonts/CircularStd-Black.woff'
import CircularBlackTtf from 'assets/fonts/CircularStd-Black.ttf'
import CircularBlackEot from 'assets/fonts/CircularStd-Black.eot'



const fullSize = `
  height:100%;
  width:100%;
  min-height:100vh;
`


export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Circular';
    src: url(${CircularWoff}) format('woff'), url(${CircularTtf}) format('ttf'),
      url(${CircularEot}) format('eot');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Circular Medium';
    src: url(${CircularMediumWoff}) format('woff'), url(${CircularMediumTtf}) format('ttf'),
      url(${CircularMediumEot}) format('eot');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Circular Bold';
    src: url(${CircularBoldWoff}) format('woff'), url(${CircularBoldTtf}) format('ttf'),
      url(${CircularBoldEot}) format('eot');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Circular Black';
    src: url(${CircularBlackWoff}) format('woff'), url(${CircularBlackTtf}) format('ttf'),
      url(${CircularBlackEot}) format('eot');
    font-weight: 300;
    font-style: normal;
  }
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    /* avoid annoying blue highlight on mobile */
    -webkit-tap-highlight-color: transparent;
    cursor:${props => props.defaultTheme ? `url(${WhiteCursor}) 35 35, auto` : `url(${BlackCursor}) 35 35, auto` };
  }
  *::selection{
    color:${props=>props.defaultTheme ? COLORS.DARKBLACK : COLORS.WHITE};
    background-color:${props=>props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  }
  html,body{
    height:100%;
    width:100vw;
    background-color:${COLORS.DARKBLACK};
    transition:background-color .16s ease-out;
  }
  #app{
    height:100%;
    width:100%;
    overflow: hidden;
    >div>div{
      overflow-x:hidden !important;
    }
  }
  .track-vertical, .thumb-vertical {
    background-color: transparent;
    scroll-behavior: smooth;
  }
`

export const Main = styled.main`
  ${fullSize};
  display:flex;
  align-items:center;
  flex-direction:column;
  height: auto;
  position: relative;
  margin:0 auto;
  font-family: 'Circular';
  font-weight:normal;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`