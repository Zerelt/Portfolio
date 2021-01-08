import styled from 'styled-components'
import COLORS from 'assets/theme/colors'
import { fullCenter } from 'assets/theme/mixins'

function animateOptions(props) {
  let styles='';
  for(let i=1; i<=10;i++){
    if(props.menuOpen){
        styles+=`
        .option-${i}{
          transform:translateX(0px);
          opacity:1;
          transition:transform .12s ${.06*i}s ease-in-out, opacity .02s ${.06*i}s ease-in;}
        `
    } else {
        styles+=`
        .option-${i}{
          transform:translateX(20px);
          opacity:0;
          transition:transform 0s 0s, opacity 0s 0s;}
          `
      }
    }
  return styles;
}

export const MobileMenuContainer = styled.div`
  position:fixed;
  width:100%;
  height:100%;
  top:0;
  left:0;
  z-index:${props => props.menuOpen ? '2' : '-2'};
  opacity:${props => props.menuOpen ? 1 : 0};
`

export const MobileMenuOverlay = styled.div`
  height:100%;
  width:100%;
  position:fixed;
  top:0;
  left:0;
  opacity:${props => props.menuOpen ? '.23' : 0};
  transition:opacity .2s .2s ease;
  filter:${props => props.defaultTheme ? 'brightness(85%)' : 'brightness(100%)'};
  background-color:${props => props.defaultTheme ? COLORS.DARKBLACK : COLORS.LIGHTGRAY};
  z-index:1;
`

export const MobileMenuInner = styled.div`
  ${fullCenter};
  flex-direction:column;
  height:auto;
  width:150px;
  position:absolute;
  right:0;
  bottom:0;
  padding:18px 0 50px 0;
  margin:auto;
  background-color:${props => props.defaultTheme ? COLORS.DARKGRAY : COLORS.WHITE};
  transform: ${props => props.menuOpen ? 'scale(1)' : 'scale(0)'};
  transition:${props => props.menuOpen ? `transform .16s .1s ease-in-out` : `transform .0s`};
  transform-origin: bottom right;
  z-index:2;
  ${props=>animateOptions(props)};
  @media(min-width:1200px){
    display:none;
  }
  @media(min-width:768px){
    padding:25px 0 80px 0;
  }
  @media(min-width:992px){
    width:165px;
    padding:25px 0 100px 0;
  }
`

const CommonlyUsedOptionsStyling = `
  width:75px;
  text-align:left;
  font-size:15px;
  font-family:inherit;
  font-weight:inherit;
  text-transform:capitalize;
  margin:0 0 15px 0;
  @media(min-width:992px){
    font-size:16px;
    width:85px
  }
`

export const SocialOptions = styled.a`
  ${CommonlyUsedOptionsStyling};
  color:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  text-decoration:none;
  &:nth-child(3){
    margin:0;
  }
  svg{
    height:12px;
    fill:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  }
  opacity:${props => props.menuOpen ? 1 : 0};
  transform:${props => props.menuOpen ? 'translateY(0)' : 'translateY(20px)'};
`

export const PageOptions = styled.button`
  ${CommonlyUsedOptionsStyling};
  color:${props => props.currentPage ? COLORS.ACCENT : (props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK)};
  background-color:transparent;
  border:none;
  outline:transparent;
`

export const ThemeOptions = styled(PageOptions)`
  &:nth-child(5) {
    color:${props => !props.defaultTheme ? COLORS.ACCENT : COLORS.WHITE};
  }
  &:nth-child(6) {
    margin:0;
    color:${props => props.defaultTheme ? COLORS.ACCENT : COLORS.DARKBLACK};
  }
`

export const SeparationLine = styled.span`
  width:100%;
  height:1px;
  background-color:#707070;
  opacity:.42;
  margin:18px 0;
`