import styled from 'styled-components'
import COLORS from 'assets/theme/colors'
import { fullCenter } from 'assets/theme/mixins'
import WhiteCursor from 'assets/images/WhiteCursor.svg'

export const DesignsContainer = styled.section`
  width:260px;
  min-height:100vh;
  display:flex;
  justify-content:center;
  flex-direction:column;
  color: ${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  margin:20px 0 0 0; // so the "g" from text from the above section isn't in 
  // the view when the user clicks on the "Design" button on the sidebar navigation
  @media(min-width:768px) {
    width:600px;
  }
  @media(min-width:992px) {
    width:850px;
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
  justify-content:center;
  align-items:center;
  height:400px;
  >div{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:space-between;
    align-self:flex-end;
  }
  @media(min-width:768px) {
    height:100vh;
  }
  @media(min-width:992px) {
    >div{
      flex-direction:row;
      align-items:flex-end;
      justify-content:space-between;
    }
  }
  @media(min-width:1600px) {
    height:700px;
    >div{
      width:960px;
    }
  }
`

export const HeadlineSm = styled.p`
  ${fullCenter};
  justify-content:flex-start;
  font-size:16px;
  margin:0 0 100px 0;
  height:65px;
  opacity:${props => props.designTextTop <= props.height*.75 ? 1 : 0};
  transform:${props => props.designTextTop <= props.height*.75 ? 'translateX(0px)' : 'translateX(-50px)'};
  transition:opacity .16s ease-in, transform .16s .08s ease-in;
  span{
    display:none;
    align-self:flex-start;
    height:${props => props.designTextTop <= props.height*.75 ? '65px' : '0px'};
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
  opacity:${props => props.designTextTop <= props.height*.75 ? 1 : 0};
  transform:${props => props.designTextTop <= props.height*.75 ? 'translateX(0px)' : 'translateX(50px)'};
  transition:opacity .16s .32s ease-in, transform .16s .38s ease-in;
  >span{
    display:block;
    float:right;
    height:1px;
    width:${props => props.designTextTop <= props.height*.75 ? '95px' : '0px'};
    transition:width .16s .7s ease-in;
    margin:0 0 10px 0;
    background-color:${COLORS.ACCENT};
  }
  @media(min-width:768px){
    width:240px;
    span{
      width:${props => props.designTextTop <= props.height*.75 ? '135px' : '0px'};
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

export const DesignProjects = styled.div`
  display:flex;
  justify-content:space-between;
  flex-wrap: wrap;
  width:100%;
  color: ${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
`

export const DesignProjectItem = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  height:160px;
  color:inherit;
  margin:0 0 20px 0;
  padding:14px;
  border-radius:12px;
  background-color:${props => props.defaultTheme ? COLORS.DARKGRAY : COLORS.LIGHTGRAY};
  overflow:hidden;
  opacity:${props => props.designProjectVisible ? 1 : 0};
  transition:opacity .14s ease-in-out;
  &:nth-child(3){
    img:hover{
      cursor:${`url(${WhiteCursor}) 35 35, auto`};
    }
  }
  @media (min-width:768px) {
    height:360px;
    padding:20px;
  }
  @media (min-width:992px) {
    height:515px;
    padding:30px;
    margin:0 0 30px 0;
    &:nth-child(2), &:nth-child(3) {
      width:410px;
    }
  }
  @media (min-width:1200px) {
    height:574px;
    &:nth-child(2), &:nth-child(3) {
      width:460px;
    }
  }
  @media (min-width:1600px) {
    height:775px;
    &:nth-child(2), &:nth-child(3) {
      width:635px;
    }
  }
`

export const PreviewContainer = styled.div`
  width:100%;
  overflow:hidden;
  border-radius:12px;
  transform:${props => props.designProjectVisible ? 'translateY(0)' : 'translateY(50px)'};
  transition: transform .17s ease-in-out;
`

export const Preview = styled.img`
  width:100%;
`

export const DesignProjectTitle = styled.h3`
  font-size:28px;
  font-family: playfair-display, serif;
  font-weight:700;
  color:inherit;
  line-height:30px;
  margin:0 0 11px 0;
  @media (min-width:650px) and (orientation: portrait) {
    margin:11px 0;
    font-size:42px;
    line-height:48px;
  }
  @media(min-width:992px){
    margin:11px 0;
    font-size:48px;
    line-height:48px;
  }
  @media(min-width:1600px){
    font-size:58px;
    line-height:58px;
  }
`

export const DesignProjectDescription = styled.p`
  font-size:16px;
  line-height:22px;
  color:inherit;
  margin:0 0 32px 0;
  @media(min-width:768px){
    width:355px;
  }
  @media (min-width:992px) {
    width:465px;
    font-size:18px;
    line-height:24px;
  }
  @media(min-width:1600px) {
    margin:0 0 60px 0;
  }
`