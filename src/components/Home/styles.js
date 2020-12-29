import styled, { css } from 'styled-components'
import COLORS from 'assets/theme/colors';
import { fullCenter } from 'assets/theme/mixins'
import { MainButton } from 'assets/theme/button'

// TODO:
// -give some love to landscape mode

function controlLines(lineNumber) {
  let styles = '';
  for (let i=1; i<=lineNumber; i++) {
    if (lineNumber===52) {
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
  position:relative;
  flex-direction:column;
  height:calc(100vh - 60px); /*take into account the top status bar on mobile */
  width:260px;
  @media (orientation:portrait) {
    min-height:520px;
  }
  @media (orientation:landscape) {
    width:500px;
  }
  @media(min-width:768px) and (orientation:portrait) {
    display:flex;
    width:500px;
    height:100vh;
  }
  @media(min-width:992px) {
    width:850px;
  }
  @media(min-width:1200px) {
    width:950px;
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
  @media (orientation:landscape) and (min-height:500px) {
    position:relative;
    align-items:stretch;
    flex-direction:row-reverse;
    justify-content: space-between;
  }
  @media (min-width:768px){
    position:relative;
    align-items:stretch;
    flex-direction:row-reverse;
    justify-content: space-between;
  }
`

export const LogoContainer = styled.div`
  ${fullCenter}
  position:relative;
  opacity:${props => props.pageLoaded ? 1 : 0};
  transition:opacity .16s .16s; /* so the TextBackground doesn't flash */
  .LogoSm, .LogoMd, .LogoLg {
    display:none;
    line{
      fill:none;
      stroke-miterlimit:10;
      stroke: ${props=>props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
      stroke-width: 2px;
    }
    .TextBackground{
      fill: ${props=>props.defaultTheme ? COLORS.DARKBLACK : COLORS.WHITE};
      transition:fill .16s ease-out;
    }
    .BlackAndWhite {
      fill: ${props=>props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
    }
    .ColorLetters {
      fill: ${COLORS.ACCENT};
    }
    .BlackAndWhite, .ColorLetters {
      opacity:${props=> props.pageLoaded ? 1 : 0};
    }
  }
  .LogoSm{
    line{
      stroke-width:1px;
    }
  }
  .LogoSm, .LogoMd{
    line{
      stroke-dasharray: 300;
      stroke-dashoffset: 300;
      animation:LineAnimation-Md .5s ease-in-out;
      animation-fill-mode:forwards;
    }
    .BlackAndWhite, .ColorLetters {
      transition:opacity .18s 2.1s ease-in-out;
    }
    ${props => {if (props.pageLoaded) { return controlLines(20)}}};
    @keyframes LineAnimation-Md {
      from {
        stroke-dashoffset: 300;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
  }
  .LogoLg{
    line{
      stroke-dasharray: 480;
      stroke-dashoffset: 480;
      animation:LineAnimation-Lg .5s ease-in-out;
      animation-fill-mode:forwards;
    }
    .BlackAndWhite, .ColorLetters {
      transition:opacity .18s 2s ease-in-out;
    }
    ${props => {if (props.pageLoaded) {return controlLines(52)}}};
    @keyframes LineAnimation-Lg {
      from {
        stroke-dashoffset: 480;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
  }
  
  @media (orientation:landscape) {
    .LogoSm{
      display:block;
      height:188px;
    }
  }
  @media (orientation: landscape) and (min-height:500px) {
    .LogoSm{
      display:none;
    }
    .LogoMd{
      display:block;
      height:350px;
      margin:0 -30px 0 0;
    }
  }
  @media(min-width:768px) and (orientation:portrait) {
    .LogoSm{
      display:none;
    }
    .LogoMd{
      display:block;
      height:350px;
      margin:0 -30px 0 0;
    }
  }
  @media (min-width:992px) {
    .LogoMd{
      height:auto;
      margin:0;
    }
  }
  @media(min-width:1200px) {
    .LogoMd{
      display:none;
    }
    .LogoLg{
      display:block;
      height:525px;
    }
  }
  @media (min-width:1400px) {
    .LogoLg{
      height:650px;
    }
  }
  @media (min-width:1600px) {
    .LogoLg{
      height:auto;
    }
  }
`

export const HeadlineAndButtons = styled.div`
  position:relative;
  height:280px;
  width:100%;
  ${fullCenter};
  @media(orientation:landscape) {
    height:auto;
  }
  @media(min-width:768px) and (orientation:portrait) {
    height:auto;
    width:auto;
  }
  @media(min-width:992px) {
    display:flex;
    flex:1;
    justify-content:center;
    align-items:flex-start;
    flex-direction:column;
  }
  @media (min-width:1600px) {
    width:50%;
  }
`

export const DecorationBox = styled.div`
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

export const DecorationBoxMd = styled.div`
  position:absolute;
  top: ${props => props.secondary ? 0 : 'auto'};
  right: ${props => props.secondary ? 0 : 'auto'};
  bottom: ${props => props.secondary ? 'auto' : 0};
  left: ${props => props.secondary ? 'auto' : 0};
  margin:auto;
  height:100px;
  width:153px;
  opacity: ${props=>props.pageLoaded ? 1 : 0};
  transform: ${props=>props.pageLoaded ? 'translateX(0px)':'translateX(-20px)'};
  transition:opacity .12s, ease-in-out, transform .12s;
  transition-delay: ${props => props.secondary ? '.85s' : '.65s'};
  @media(orientation:landscape) and (max-height:500px) {
    display:none;
  }
  @media(orientation:landscape) and (min-height:500px) {
    display:block;
  }
  @media(min-width:768px) and (orientation:portrait) {
    right: ${props => props.secondary ? '7px' : 'auto'};
    transform: ${props=>props.pageLoaded ? 'translateX(15px)':'translateX(0)'};
    transition-delay: ${props => props.secondary ? '2.4s' : '2.2s'};
  }
  @media(min-width:992px) {
    display:none;
  }
`

export const Headline = styled.div`
  max-width:220px;
  font-size: 36px;
  line-height: 42px;
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
  @media (orientation:landscape) {
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:row;
    max-width:none;
    font-size:40px;
    line-height:58px;
    transition:opacity .12s .2s, transform .12s .2s;
  }
  @media (orientation:landscape) and (min-height:500px) {
    max-width:260px;
  }
  @media(min-width:768px) and (orientation:portrait) {
    font-size:50px;
    line-height:54px;
    margin:0 0 0 50px;
    max-width:255px;
    transition:opacity .18s 2.6s, transform .18s 2.6s;
  }
  @media(min-width: 992px){
    max-width:530px;
    margin:0;
    font-size:48px;
    text-align: left;
    line-height: 63px;
    transition:opacity .12s 2.5s, transform .12s 2.5s;
  }
  @media(min-width:1400px) {
    font-size:56px;
    line-height:62px;
  }
  @media(min-width: 2000px){
    max-width:540px;
    max-width:570px;
    font-size:62px;
    line-height: 70px
  }
`

export const ButtonBox = styled.div`
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
  /* @media(min-width:1600px) {
    max-width:600px;
  } */
`

export const ButtonBox2 = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  width:100%;
  height:110px;
  margin:48px 0;
  opacity:${props=>props.pageLoaded ? 1 : 0};
  transform:${props => props.pageLoaded ? 'translateY(0)': 'translateY(20px)'};
  transition:opacity .14s 1.05s, transform .14s 1.05s;
  @media(orientation:landscape) {
    flex-direction:row;
    margin:48px 0 0 0;
    height:auto;
  }
  @media(min-width:768px) and (orientation:portrait) {
    flex-direction:row;
    height:auto;
    margin:135px 0 0 0;
    transition:opacity .14s 2.8s, transform .14s 2.8s;
  }
  @media(min-width:992px) {
    display:none;
  }
`

export const MidButton = styled.button`
  ${MainButton};
  &:nth-child(2){
    background-color:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
    color:${props => props.defaultTheme ? COLORS.DARKBLACK : COLORS.WHITE};
  }
  @media(orientation:landscape) {
    width:240px !important;
  }
  @media(min-width:768px) and (orientation:portrait) {
    width:240px !important;
  }
`

export const CodeButton = styled.button`
  ${MainButton}
  @media(min-width:992px) {
    margin:120px 0 0 0;
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
  }
`

export const DesignsButton = styled(CodeButton)`
  margin:20px 0 0 0;
  background-color: ${props=>props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  color: ${props=>props.defaultTheme ? COLORS.DARKBLACK : COLORS.WHITE};
  box-shadow:${props => props.defaultTheme ?  '0px 0px 0px rgba(254,251,246,0.3)' : '0px 0px 0px rgba(5,5,5,0.3)'};
  @media (min-width:992px) {
    margin:120px 0 0 0;
  }
  @media(min-width:1200px) {
    &:hover{
      box-shadow:${props => props.defaultTheme ? '0px 8px 88px rgba(254,251,246,0.25)' : '0px 8px 88px rgba(5,5,5,0.3)'};
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
  width:115px;
  height:18px;
  ${fullCenter}
  justify-content:space-between;
  display:none; /* SocialBox2 is used below 992px (portrait) */
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

export const SocialBox2 = styled(SocialBox)`
  display:flex;
  position:absolute;
  bottom:16px;
  left:0;
  right:0;
  margin:auto;
  .Twitter, .LinkedIn, .Github {
    opacity:${props=>props.pageLoaded ? 1 : 0};
    transform:${props=>props.pageLoaded ? 'translateX(0)' : 'translateX(-15px)'};
  }
  .Twitter{
    transition:opacity .22s 1.25s, transform .14s 1.25s;
  }
  .LinkedIn{
    transition:opacity .22s 1.45s, transform .14s 1.45s;
  }
  .Github{
    transition:opacity .22s 1.65s, transform .14s 1.65s;
  }
  @media(orientation:landscape) {
    display:none;
  }
  @media(min-width: 768px) {
    bottom:64px;
    .Twitter{
      transition:opacity .22s 2.9s, transform .14s 2.9s;
    }
    .LinkedIn{
      transition:opacity .22s 3.04s, transform .14s 3.04s;
    }
    .Github{
      transition:opacity .22s 3.18s, transform .14s 3.18s;
    }
  }
  @media(min-width:992px){
    display:none;
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