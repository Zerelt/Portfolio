import styled from 'styled-components'
import COLORS from 'assets/theme/colors'
import { fullCenter } from 'assets/theme/mixins'

function showBorder(x) {
  let styles='';
  for(let i=1; i<=5;i++){
    if(x.menuOpen){
        styles+=`
        &:nth-child(${i}){
          border:${x.currentPage ? `2px solid ${COLORS.ACCENT}` : 'none'};
          transform:translateY(0px);
          opacity:1;
          transition:transform .18s ${.18*i}s ease-in, opacity .18s ${.18*i}s ease-in;}
        `
    } else {
        styles+=`
        &:nth-child(${i}){
          transform:translateY(20px);
          opacity:0;
          transition:transform 0s 0s, opacity 0s 0s;}
          `
      }
    }
  return styles;
}

function showSocials(x) {
  let styles=''
  for(let i=1;i<=3;i++) {
    if(x.menuOpen) {
      styles+=`
        &:nth-child(${i}) {
          transition:opacity .12s ${1 + (.12*i)}s, transform .12s ${1 + (.12*i)}s;
        }
      `
    } else {
      styles=`&:nth-child(${i}){transition:all 0s 0s;}`
    }
  }
  return styles
}

export const MobileMenuContainer = styled.div`
  ${fullCenter};
  flex-direction:column;
  height:100%;
  width:100vw;
  position:fixed;
  top:0; 
  right:0;
  bottom:0;
  left:0;
  margin:auto;
  background-color:${props => props.defaultTheme ? COLORS.DARKBLACK : COLORS.WHITE};
  opacity:${props => props.menuOpen ? 1 : 0};
  transform: ${props => props.menuOpen ? 'translateY(0)' : 'translateY(-200vh)'};
  transition:${props => props.menuOpen ? `opacity 0.2s, transform 0.2s` : `opacity 0.2s, transform 0.2s 0.4s`};
  @media(min-width:1200px){
    display:none;
  }
`

export const ButtonContainer = styled.div`
  ${fullCenter};
  flex-direction:column;
  position:relative;
`

export const MobileButton = styled.button`
  width:260px;
  height:46px;
  font-size:16px;
  font-family: 'Circular Medium';
  color:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  text-transform:capitalize;
  background-color:transparent;
  border:none;
  outline:transparent;
  border-radius:100px;
  ${props=>showBorder(props)};
  cursor: pointer;
`

export const SocialContainer = styled.div`
  ${fullCenter};
  justify-content:space-between;
  position:absolute;
  right:0;
  bottom:32px;
  left:0;
  margin:auto;
  width:120px;
`

export const CloseButton = styled.div`
  position:absolute;
  top:16px;
  right:16px;
  font-size:16px;
  color:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  text-decoration:underline;
  text-decoration-color:${COLORS.ACCENT};
  cursor: pointer;
  @media (min-width: 768px) {
    top:32px;
    right:32px;
  }
`

export const Social = styled.a`
  svg{
    fill:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  }
  .LinkedIn-dot{
      fill: ${COLORS.ACCENT};
  }
  opacity:${props => props.menuOpen ? 1 : 0};
  transform:${props => props.menuOpen ? 'translateX(0)' : 'translate(20px)'};
  ${(props)=>showSocials(props)};
`