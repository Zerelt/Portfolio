import styled, { createGlobalStyle } from 'styled-components'
import COLORS from 'assets/theme/colors'
import WhiteCursor from 'assets/images/WhiteCursor.svg'
import BlackCursor from 'assets/images/BlackCursor.svg'

const fullSize = `
  height:100%;
  width:100%;
  min-height:100vh;
`


export const GlobalStyles = createGlobalStyle`
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
  font-family: halyard-display, sans-serif;
  font-weight:300;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  >section{
      filter: ${props => props.menuOpen ? 'blur(26px)' : 'none'};
  }
`