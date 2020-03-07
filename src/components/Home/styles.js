import styled, { css } from 'styled-components'
import COLORS from 'assets/theme/colors';
import { fullCenter } from 'assets/theme/mixins'
import { MainButton } from 'assets/theme/button'



// TODO: 
// -give some love to phone landscape viewports




function controlLines(lineNumber) {
  let styles = '';
  for (let i=1; i<=lineNumber; i++) {
    if (lineNumber===52) {
      styles +=`
        .LogoLine-${i} {
          animation-delay: ${1 + i/33}s;
        }
      `
    }
    else {
      styles +=`
      .LogoLine-${i} {
        animation-delay: ${1 + i/11}s;
      }
      `
    }
  }
  return css`${styles}`
}

export const HomeContainer = styled.section`
  ${fullCenter}
  position:relative;
  height:100vh;
  width:260px;
  @media (min-width:650px) and (orientation:landscape) {
    width:100%;
    width:500px;
  }
  @media(min-width:768px) {
    width:500px;
    display:flex;
    flex-direction:column;
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
      transition:opacity .18s 2.7s ease-in-out;
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
      transition:opacity .18s 2.7s ease-in-out;
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
  
  @media (min-width:560px) and (orientation:landscape) {
    .LogoSm{
      display:block;
      height:188px;
    }
  }
  @media(min-width:768px) {
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
  @media(min-width:1400px) {
    .LogoMd{
      display:none;
    }
    .LogoLg{
      display:block;
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
  @media(min-width:768px) {
    ${fullCenter};
    position:relative;
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
    transform: ${props=>props.pageLoaded ? 'translate(4px,20px)':'translateX(0,20px)'};
    transition:opacity .12s 3.4s ease-in-out, transform .12s 3.4s;
  }
  @media(min-width:1600px) {
    width:222px;
    transform: ${props=>props.pageLoaded ? 'translate(5px,5px)':'translateX(0,20px)'};
  }
`

export const DecorationBoxMd = styled.div`
  display:none;
  @media(min-width:768px) {
    display:block;
    position:absolute;
    top: ${props => props.secondary ? 0 : 'auto'};
    right: ${props => props.secondary ? '7px' : 'auto'};
    bottom: ${props => props.secondary ? 'auto' : 0};
    left: ${props => props.secondary ? 'auto' : 0};
    margin:auto;
    height:100px;
    width:153px;
    opacity: ${props=>props.pageLoaded ? 1 : 0};
    transform: ${props=>props.pageLoaded ? 'translate(15px,0px)':'translateX(0,20px)'};
    transition:opacity .12s, ease-in-out, transform .12s;
    transition-delay: ${props => props.secondary ? '3.6s' : '3.4s'}
  }
  @media(min-width:992px) {
    display:none;
  }
`

export const Headline = styled.div`
  margin:0 0 60px 0;
  font-family: ${props=>props.defaultTheme ? 'Circular' : 'Circular Medium'};
  font-size: 56px;
  line-height:60px;
  color: ${props=>props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  opacity: ${props=>props.pageLoaded ? 1 : 0};
  transform: ${props=>props.pageLoaded ? 'translateY(0)':'translateY(15px)'};
  transition:opacity .18s .28s, transform .18s .28s ease-in;
  span{
    color:${COLORS.ACCENT};
  }
  @media (min-width:560px) and (orientation:landscape) and (max-height:450px) {
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:row;
    font-size:40px;
    line-height:58px;
    margin:0 0 20px 0;
    transition:opacity .12s 3.2s, transform .12s 3.2s;
  }
  @media(min-width:768px) {
    font-family: 'Circular Medium';
    margin:0 0 0 50px;
    max-width:255px;
    transition:opacity .18s 3.2s, transform .18s 3.2s;
  }
  @media(min-width: 992px){
    max-width:530px;
    margin:0;
    font-family: 'Circular Black';
    font-size:48px;
    text-align: left;
    line-height: 63px;
    transition:opacity .12s 3.2s, transform .12s 3.2s;
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
  opacity:${props=>props.pageLoaded ? 1 : 0};
  transform:${props => props.pageLoaded ? 'translateY(0)': 'translateY(20px)'};
  transition:opacity .18s .56s, transform .18s .56s;
  @media (min-width:560px) and (orientation:landscape) {
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:row-reverse;
  }
  @media(min-width:768px) {
    display:none;
  }
  @media(min-width:992px) {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    max-width:565px;
    transition:opacity .14s 3.8s, transform .14s 3.8s;
  }
  @media(min-width:1600px) {
    max-width:600px;
  }
`

export const ButtonBox2 = styled.div`
  display:none;
  @media(min-width:768px) {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    margin:135px 0 0 0;
    opacity:${props=>props.pageLoaded ? 1 : 0};
    transform:${props => props.pageLoaded ? 'translateY(0)': 'translateY(20px)'};
    transition:opacity .14s 3.8s, transform .14s 3.8s;
  }
  @media(min-width:992px) {
    display:none;
  }
`

export const MidButton = styled.button`
  ${MainButton};
  width:240px !important;
  height:46px !important;
  font-family: 'Circular' !important;
  font-size:20px !important;
  &:nth-child(2){
    background-color:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
    color:${props => props.defaultTheme ? COLORS.DARKBLACK : COLORS.WHITE};
  }
`

export const WorkButton = styled.button`
  ${MainButton}
  @media(min-width:992px) {
    font-family: 'Circular Black';
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

export const DesignsButton = styled(WorkButton)`
  margin:20px 0 0 0;
  background-color: ${props=>props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  color: ${props=>props.defaultTheme ? COLORS.DARKBLACK : COLORS.WHITE};
  @media(min-width:560px) and (orientation:landscape) {
    margin:0;
  }
  @media(min-width:768px){
    margin:0;
  }
  @media (min-width:992px) {
    margin:120px 0 0 0;
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
  ${fullCenter}
  justify-content:space-between;
  width:115px;
  height:18px;
  position:absolute;
  bottom:16px;
  left:0;
  right:0;
  margin:auto;
  .Twitter, .Github{
    path{
      fill:${props=> props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
    }
    opacity:${props=>props.pageLoaded ? 1 : 0};
    transform:${props=>props.pageLoaded ? 'translateY(0)' : 'translateY(15px)'};
    transition:opacity .22s .9s, transform .14s .9s ease-in;
  }
  .LinkedIn {
    opacity:${props=>props.pageLoaded ? 1 : 0};
    transform:${props=>props.pageLoaded ? 'translateY(0)' : 'translateY(15px)'};
    transition:opacity .22s 1.12s, transform .14s 1.12s ease-in;
    &-I, rect{
      fill:${props=> props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
    }
    &-dot{
      fill: ${COLORS.ACCENT};
    }
  }
  .Github{
    transition:opacity .22s 1.42s, transform .14s 1.42s ease-in;
  }
  @media(orientation:landscape) {
    display:none;
  }
  @media(min-width:768px) {
    display:none;
  }
  @media(min-width:992px) {
    display:flex;
    left:0;
    bottom:0px;
    right:auto;
    .Twitter, .LinkedIn, .Github {
      transform:${props=>props.pageLoaded ? 'translateX(0)' : 'translateX(-15px)'};
    }
    .Twitter{
      transition:opacity .22s 4s, transform .14s 4s;
    }
    .LinkedIn{
      transition:opacity .22s 4.2s, transform .14s 4.2s;
    }
    .Github{
      transition:opacity .22s 4.4s, transform .14s 4.4s;
    }
  }
`

export const SocialBox2 = styled(SocialBox)`
  display:none;
  @media(min-width:768px) {
    display:flex;
    position:absolute;
    bottom:64px;
    left:0;
    right:0;
    margin:auto;
    .Twitter, .LinkedIn, .Github {
      transform:${props=>props.pageLoaded ? 'translateX(0)' : 'translateX(-15px)'};
    }
    .Twitter{
      transition:opacity .22s 4s, transform .14s 4s;
    }
    .LinkedIn{
      transition:opacity .22s 4.2s, transform .14s 4.2s;
    }
    .Github{
      transition:opacity .22s 4.4s, transform .14s 4.4s;
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