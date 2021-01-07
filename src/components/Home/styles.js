import styled, { css } from 'styled-components'
import COLORS from 'assets/theme/colors';
import { fullCenter } from 'assets/theme/mixins'
import { MainButton } from 'assets/theme/button'

function controlLines(lineNumber) {
  let styles = '';
  for (let i=1; i<=lineNumber; i++) {
    if (lineNumber===56) {
      styles +=`
        .LogoLine-${i} {
          animation-delay: ${1 + i/63}s;
        }
      `
    }
    else {
      styles +=`
      .LogoLine-${i} {
        animation-delay: ${1 + i/21}s;
      }
      `
    }
  }
  return css`${styles}`
}

export const HomeContainer = styled.section`
  ${fullCenter}
  flex-direction:column;
  /*take into account the top status bar on mobile */
  /* height:calc(100vh - 60px);  */
  /*take into account the top status bar on mobile */
  height:${props => `${props.height}px`}; 
  width:260px;
  min-height:520px;
  @media(min-width:768px) {
    width:600px;
  }
  @media(min-width:992px) {
    width:850px;
  }
  @media(min-width:1200px) {
    width:950px;
    height:100vh;
  }
  @media(min-width:1600px) {
    min-height:800px;
    width:1300px;
  }
`

export const HomeContainerInner = styled.div`
  ${fullCenter}
  width:100%;
  flex-direction:column;
  @media (min-width:768px){
    position:relative;
    align-items:stretch;
    flex-direction:row-reverse;
  }
`

export const LogoContainer = styled.div`
  ${fullCenter}
  position:relative;
  opacity:${props => props.pageLoaded ? 1 : 0};
  transition:opacity .16s .16s; /* so the TextBackground doesn't flash */
  .LogoLg {
    display:none;
    line{
      fill:none;
      stroke-miterlimit:10;
      stroke: ${props=>props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
      stroke-width: 2px;
      stroke-dasharray: 480;
      stroke-dashoffset: 480;
      animation:LineAnimation-Lg .5s ease-in-out;
      animation-fill-mode:forwards;
    }
    .TextBackground{
      fill: ${props=>props.defaultTheme ? COLORS.DARKBLACK : COLORS.WHITE};
      transition:fill .16s ease-out;
    }
    .BlackAndWhite {
      fill: ${props=>props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
      transition:opacity .18s 2s ease-in-out;
    }
    .ColorLetters {
      fill: ${COLORS.ACCENT};
      transition:opacity .18s 2s ease-in-out;
    }
    .BlackAndWhite, .ColorLetters {
      opacity:${props=> props.pageLoaded ? 1 : 0};
    }
    ${props => {if (props.pageLoaded) {return controlLines(56)}}};
    @keyframes LineAnimation-Lg {
      from {
        stroke-dashoffset: 480;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
  }
  @media(min-width:768px) {
    .LogoLg{
      display:block;
      height:450px;
      margin:0 -68px 0 0;
    }
  }
  @media (min-width:992px) {
    .LogoLg{
      display:block;
      height:525px;
      margin:0 -50px 0 0;
    }
  }
  @media (min-width:1400px) {
    .LogoLg{
      height:625px;
      margin:0 -34px 0 0;
    }
  }
  @media (min-width:1600px) {
    .LogoLg{
      height:auto;
      margin:0;
    }
  }
`

export const HeadlineAndButtons = styled.div`
  position:relative;
  height:320px;
  width:100%;
  ${fullCenter};
  @media(min-width:768px) {
    height:450px;
    width:357px;
  }
  @media(min-width:992px) {
    height:auto;
    display:flex;
    flex:1;
    justify-content:center;
    align-items:flex-start;
    flex-direction:column;
  }
`

export const DecorationBoxHorizontal = styled.div`
  display:none;
  @media(min-width:992px){
    display:block;
    width:156px;
    opacity: ${props=>props.pageLoaded ? 1 : 0};
    transform: ${props=>props.pageLoaded ? 'translate(4px,20px)':'translate(-20px,20px)'};
    transition:opacity .12s 2.6s ease-in-out, transform .14s 2.6s;
  }
  @media(min-width:1600px) {
    width:222px;
    transform: ${props=>props.pageLoaded ? 'translate(5px,5px)':'translate(-20px,20px)'};
  }
`

export const DecorationBoxVertical = styled.div`
  position:absolute;
  top: ${props => props.secondary ? 0 : 'auto'};
  right: ${props => props.secondary ? 0 : 'auto'};
  bottom: ${props => props.secondary ? 'auto' : 0};
  left: ${props => props.secondary ? 'auto' : 0};
  margin:auto;
  height:144px;
  width:92px;
  opacity: ${props=>props.pageLoaded ? 1 : 0};
  transform: ${props=>props.pageLoaded ? 'translateX(0px)':'translateX(-20px)'};
  transition:opacity .12s, ease-in-out, transform .12s;
  transition-delay: ${props => props.secondary ? '.85s' : '.65s'};
  @media(min-width:768px) {
    width:128px;
    height:200px;
    right: ${props => props.secondary ? '7px' : 'auto'};
    transform: ${props=>props.pageLoaded ? 'translateX(0px)':'translateX(15px)'};
    transition-delay: ${props => props.secondary ? '2.4s' : '2.2s'};
  }
  @media(min-width:992px) {
    display:none;
  }
`

export const Headline = styled.div`
  max-width:230px;
  font-size: 48px;
  line-height: 52px;
  color: ${props=>props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  opacity: ${props=>props.pageLoaded ? 1 : 0};
  transform: ${props=>props.pageLoaded ? 'translateY(0)':'translateY(15px)'};
  transition:opacity .18s .28s, transform .18s .28s ease-in;
  h1{
    font-family:playfair-display, serif;
    font-weight:700;
    font-size:inherit;
    line-height:inherit;
  }
  span{
    color:${COLORS.ACCENT};
  }
  @media(min-width:768px) {
    margin:15px 0 0 30px;
    transition:opacity .18s 2.6s, transform .18s 2.6s;
  }
  @media(min-width: 992px){
    max-width:441px;
    margin:0;
    font-size:48px;
    line-height: 52px;
    transition:opacity .12s 2.5s, transform .12s 2.5s;
  }
  @media(min-width:1400px) {
    max-width:510px;
    font-size:56px;
    line-height:62px;
  }
  @media(min-width: 2000px){
    max-width:570px;
    font-size:62px;
    line-height: 70px
  }
`

export const ButtonBoxDesktop = styled.div`
  display:none;
  @media(min-width:992px) {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    max-width:540px;
    opacity:${props=>props.pageLoaded ? 1 : 0};
    transform:${props => props.pageLoaded ? 'translateY(0)': 'translateY(20px)'};
    transition:opacity .18s 2.7s ease-out, transform .16s 2.7s ease-out;
  }
`

export const ButtonBoxMobile = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  width:100%;
  height:110px;
  margin:22px 0 0 0;
  opacity:${props=>props.pageLoaded ? 1 : 0};
  transform:${props => props.pageLoaded ? 'translateY(0)': 'translateY(20px)'};
  transition:opacity .14s 1.05s, transform .14s 1.05s;
  @media(min-width:768px) {
    flex-direction:row;
    height:auto;
    margin:68px 0 0 0;
    transition:opacity .14s 2.8s, transform .14s 2.8s;
  }
  @media(min-width:992px) {
    display:none;
  }
`

export const MobileButton = styled.button`
  ${MainButton};
  &:nth-child(2){
    background-color:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
    color:${props => props.defaultTheme ? COLORS.DARKBLACK : COLORS.WHITE};
  }
  @media(min-width:768px) {
    width:280px;
  }
`

export const DesktopButton = styled.button`
  ${MainButton}
  &:nth-child(2) {
    background-color: ${props=>props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
    color: ${props=>props.defaultTheme ? COLORS.DARKBLACK : COLORS.WHITE};
  }
  @media(min-width:992px) {
    margin:78px 0 0 0;
  }
  @media(min-width: 1200px) {
    &:hover{
      span{
        transform:translateX(10px);
        &:nth-child(2){
          transform:translateX(-10px);
        }
        transition:transform .14s ease;
      }
    }
    &:nth-child(2){
      &:hover{
        box-shadow:${props => props.defaultTheme ? '0px 8px 88px rgba(254,251,246,0.25)' : '0px 8px 88px rgba(5,5,5,0.3)'};
      }
    }
  }
`

export const ButtonDot = styled.span`
  width:3px;
  height:3px;
  border-radius:50%;
  background-color:${props => props.designDot ? (props.defaultTheme ? COLORS.DARKBLACK : COLORS.WHITE) : COLORS.DARKBLACK};
  position:absolute;
  top:0;
  bottom:0;
  margin:auto;
  right:15px;
  transition:transform .14s ease;
  &:nth-child(1) {
    right:auto;
    left:15px;
  }
  @media(min-width:992px) {
    width:4px;
    height:4px;
  }
`

export const SocialBox = styled.div`
  display:none;
  .Twitter, .Github{
    path{
      fill:${props=> props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
    }
  }
  .LinkedIn {
    &-I, rect{
      fill:${props=> props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
    }
    &-dot{
      fill: ${COLORS.ACCENT};
    }
  }
  @media(min-width:992px) {
    display:flex;
    ${fullCenter}
    justify-content:space-between;
    width:115px;
    height:18px;
    position:absolute;
    left:0;
    bottom:0;
    .Twitter, .LinkedIn, .Github {
      opacity:${props=>props.pageLoaded ? 1 : 0};
      transform:${props=>props.pageLoaded ? 'translateX(0)' : 'translateX(-15px)'};
    }
    .Twitter{
      transition:opacity .22s 2.8s, transform .14s 2.8s;
    }
    .LinkedIn{
      transition:opacity .16s 2.94s, transform .14s 2.94s;
    }
    .Github{
      transition:opacity .22s 3.08s, transform .14s 3.08s;
    }
  }
`

export const Social = styled.a`
  position:relative;
  transition:transform .18s;
  &:after{
    content:'';
    position:absolute;
    left:auto;
    right:0;
    bottom:-4px;
    width:0;
    height:2px;
    background-color:${COLORS.ACCENT};
    transition:width .14s;
  }
  @media(min-width:1200px) {
    &:hover{
      transform:translateY(-2px);
      transition:transform .18s;
      &:after{
        left:0;
        right:auto;
        width:100%;
        transition:width .14s;
      }
    }
  }
`

export const TopLeftDecoration = styled.div`
  display:none;
  position:fixed;
  background-color:${COLORS.DARKBLACK};
  @media(min-width:2000px) {
    display:block;
    left:0;
    top:0;
    height:60px;
    width:120px;
    transform: ${props=>props.pageLoaded ? 'translate(0px,0px)' : 'translate(-60px,-120px)'};
    transition: .16s 3.2s;
  }
`

export const TopRightDecoration = styled(TopLeftDecoration)`
  @media(min-width:2000px){
    left:auto;
    right:0;
    transform: ${props=>props.pageLoaded ? 'translate(0px,0px)' : 'translate(60px,-120px)'};
  }
`

export const BottomRightDecoration = styled(TopLeftDecoration)`
  @media(min-width:2000px){
    bottom:0;
    right:0;
    top:auto;
    left:auto;
    transform: ${props=>props.pageLoaded ? 'translate(0px,0px)' : 'translate(60px,120px)'};
  }
`

export const BottomLeftDecoration = styled(TopLeftDecoration)`
  @media(min-width:2000px){
    bottom:0;
    top:auto;
    transform: ${props=>props.pageLoaded ? 'translate(0px,0px)' : 'translate(-60px,120px)'};
  }
`