import styled, { keyframes } from 'styled-components'
import COLORS from 'assets/theme/colors'
import { fullCenter } from 'assets/theme/mixins'
import WhiteCursor from 'assets/images/WhiteCursor.svg'

// TODO: 
// -give some love to phone landscape viewports

export const CarouselLoop = keyframes`
  from {
    transform:translateX(0);
  }
  to{
    transform:translateX(-100%);
  }
`

export const DesignsContainer = styled.section`
  width:260px;
  min-height:100vh;
  margin:180px 0;
  display:flex;
  justify-content:center;
  flex-direction:column;
  color: ${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  @media(min-width:768px) {
    width:500px;
  }
  @media(min-width:992px) {
    width:850px;
    margin:15% 0;
  }
  @media(min-width:1200px) {
    width:950px;
  }
  @media(min-width:1600px) {
    width:1300px;
  }
`

export const HeadlineContainer = styled.div`
  display:flex;
  flex-direction:column;
  margin:60px 0 120px 0;
  @media(min-width:768px) {
    margin:100px 0 125px 0;
  }
  @media(min-width:992px) {
    flex-direction:row;
    align-items:flex-end;
    justify-content:space-between;
  }
  @media(min-width:1600px){
    width:960px;
    margin:0 auto 250px auto;
  }
`

export const HeadlineSm = styled.p`
  ${fullCenter};
  justify-content:flex-start;
  font-size:16px;
  margin:0 0 100px 0;
  height:65px;
  opacity:${props => props.designTextTop <= props.height/2 ? 1 : 0};
  transform:${props => props.designTextTop <= props.height/2 ? 'translateX(0px)' : 'translateX(-50px)'};
  transition:opacity .16s ease-in, transform .16s .08s ease-in;
  span{
    display:none;
    align-self:flex-start;
    height:${props => props.designTextTop <= props.height/2 ? '65px' : '0px'};
    transition: height .16s .8s ease-in;
    width:1px;
    background-color:${COLORS.ACCENT};
  }
  @media (min-width:768px) {
    font-size:22px;
    span{
      display:block;
      margin:0 25px 0 0;
    }
  }
  @media (min-width:992px) {
    display:inline-flex;
    margin:0 0 0 80px;
    span{
      margin:0 15px 0 0;
    }
  }
  @media (min-width:1200px) {
    margin:0 0 0 100px;
    span{
      margin:0 20px 0 0;
    }
  }
  @media (min-width:1600px) {
    font-size:24px;
    margin:0;
  }
`

export const HeadlineLgContainer = styled.div`
  position:relative;
  width:185px;
  display:flex;
  flex-direction: column;
  align-items:flex-end;
  align-self:flex-end;
  opacity:${props => props.designTextTop <= props.height/2 ? 1 : 0};
  transform:${props => props.designTextTop <= props.height/2 ? 'translateX(0px)' : 'translateX(50px)'};
  transition:opacity .16s .32s ease-in, transform .16s .38s ease-in;
  >span{
    display:block;
    float:right;
    height:1px;
    width:${props => props.designTextTop <= props.height/2 ? '95px' : '0px'};
    transition:width .16s .7s ease-in;
    margin:0 0 10px 0;
    background-color:${COLORS.ACCENT};
  }
  @media(min-width:768px){
    width:240px;
    span{
      width:${props => props.designTextTop <= props.height/2 ? '135px' : '0px'};
    }
  }
  @media(min-width:992px){
    width:auto;
    margin:0 35px 0 0;
  }
  @media(min-width:1200px){
    margin:0 60px 0 0;
  }
  @media(min-width:1400px){
    margin:0 80px 0 0;
  }
  @media(min-width:1600px){
    margin:0;
  }
`

export const HeadlineLg = styled.p`
  font-size:32px;
  line-height:34px;
  @media(min-width:768px) {
    font-size:42px;
    line-height:46px;
  }
  @media(min-width:1200px) {
    line-height:48px;
  }
  @media(min-width:1600px) {
    font-size:48px;
    line-height:58px;
  }
`

export const HeadlineHighlight = styled.span`
  display:inline;
  margin:0;
  color:${COLORS.ACCENT};
  font-size:inherit;
  line-height:inherit;
  @media (min-width:992px) {
    .lineBreak{
      display:none;
    }
  }
`

export const Carousel = styled.div`
  display:none;
  @media(any-hover: hover) {
    display:flex;
    flex-direction:row;
    overflow-x:hidden;
    white-space:nowrap;
    border-radius:12px;
    .carouselItem{
      opacity:${props => props.designTextTop <= props.height/2 ? 1 : 0};
      transition:opacity .16s 1s;
    }
    &:hover{
      >div{
        animation-play-state:paused;
      }
    }
  }
`

export const CarouselHalf = styled.div`
  animation: ${CarouselLoop} 20s linear infinite;
`

export const CarouselItem = styled.div`
  height:140px;
  width:140px;
  position:relative;
  display:inline-block;
  margin:0 40px 0 0;
  border-radius:12px;
  background-color:${props => props.defaultTheme ? COLORS.BLACK : COLORS.GRAY};
  background-color:${COLORS.BLACK};
  @media(any-hover: hover) {
    &:hover {
      cursor:${`url(${WhiteCursor}) 35 35, auto`};
    }
  }
  @media(min-width:768px){
    height:240px;
    width:360px;
  }
  @media(min-width:1600px){
    margin:0 40px 0 0;
  }
`

export const CarouselTitle = styled.p`
  font-size:16px;
  position:absolute;
  bottom:10px;
  right:20px;
  color: ${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  color:${COLORS.WHITE};
`

export const CarouselTouch = styled.div`
  display:none;
  @media(any-hover: none) {
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    flex-wrap: wrap;
    .carouselItem{
      opacity:${props => props.designTextTop <= props.height/2 ? 1 : 0};
      transition:opacity .16s 1s;
    }
  }
`

export const CarouselItemTouch = styled(CarouselItem)`
  width:100%;
  height:160px;
  margin:20px 0 0 0;
  @media(min-width:768px){
    width:240px;
    height:240px;
    margin:0;
    &:nth-child(3), &:nth-child(4) {
      margin:20px 0 0 0;
    }
    &:nth-child(even){
      transform:translateY(20px);
    }
  }
  @media (min-width:992px) {
    width:390px;
    height:390px;
    margin:70px 0 0 0;
    &:nth-child(3), &:nth-child(4) {
      margin:70px 0 0 0;
    }
    &:nth-child(even){
      transform:translateY(70px);
    }
  }
  @media (min-width:1200px) {
    width:430px;
    height:430px;
    margin:100px 0 0 0;
    &:nth-child(3), &:nth-child(4) {
      margin:90px 0 0 0;
    }
    &:nth-child(even){
      transform:translateY(90px);
    }
  }
  @media (min-width:1600px) {
    width:600px;
    height:430px;
    margin:100px 0 0 0;
    &:nth-child(3), &:nth-child(4) {
      margin:100px 0 0 0;
    }
    &:nth-child(even){
      transform:translateY(90px);
    }
  }
`