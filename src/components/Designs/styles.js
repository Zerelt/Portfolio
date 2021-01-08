import styled from 'styled-components'
import COLORS from 'assets/theme/colors'
import { fullCenter } from 'assets/theme/mixins'
import { MainButton } from 'assets/theme/button'
import WhiteCursor from 'assets/images/WhiteCursor.svg'

// TODO: 
// -give some love to phone landscape viewports

function revealProjects (designProjectVisible) {
  let styles =''
  for(let i=0;i<=2;i++) {
    styles+=`
      .decoration-${i} {
        opacity:${designProjectVisible ? 1 : 0};
        transform:${designProjectVisible ? 'translateX(0)' : 'translateX(50px)'};
        transition:opacity .18s .1s ease-in-out, transform .2s .14s ease-in-out;
      }
      .decorationRotated-${i} {
        opacity:${designProjectVisible ? 1 : 0};
        transform:${designProjectVisible ? 'translateX(0)' : 'translateX(-50px)'};
        transition:opacity .14s .2s ease-in-out, transform .17s .22s ease-in-out;
      }
      .preview-${i} {
        opacity:${designProjectVisible ? 1 : 0};
        transform:${designProjectVisible ? 'translateY(0)' : 'translateY(50px)'};
        transition:opacity .14s .26s ease-in-out, transform .17s .3s ease-in-out;
      }
      .designProjectTitle-${i} {
        opacity:${designProjectVisible ? 1 : 0};
        transform:${designProjectVisible ? 'translateY(0)' : 'translateY(50px)'};
        transition:opacity .14s .34s ease-in-out, transform .17s .36s ease-in-out;
      }
      .designProjectDescription-${i} {
        opacity:${designProjectVisible ? 1 : 0};
        transform:${designProjectVisible ? 'translateY(0)' : 'translateY(50px)'};
        transition:opacity .14s .38s ease-in-out, transform .17s .4s ease-in-out;
      }
      .designProjectLive-${i} {
        opacity:${designProjectVisible ? 1 : 0};
        transform:${designProjectVisible ? 'translateY(0)' : 'translateY(50px)'};
        transition:opacity .14s .42s ease-in-out, transform .17s .44s ease-in-out;
      }
      `
    /*
      // Faster animation timings - don't use until/unless you decide to increase 
      // the animation speed of the other sections' animation
      styles+=`
        .preview-${i} {
          opacity:${designProjectVisible ? 1 : 0};
          transform:${designProjectVisible ? 'translateY(0)' : 'translateY(50px)'};
          transition:opacity .14s .2s ease-in-out, transform .17s .2s ease-in-out;
        }
        .designProjectTitle-${i} {
          opacity:${designProjectVisible ? 1 : 0};
          transform:${designProjectVisible ? 'translateY(0)' : 'translateY(50px)'};
          transition:opacity .14s .20s ease-in-out, transform .17s .22s ease-in-out;
        }
        .designProjectDescription-${i} {
          opacity:${designProjectVisible ? 1 : 0};
          transform:${designProjectVisible ? 'translateY(0)' : 'translateY(50px)'};
          transition:opacity .14s .24s ease-in-out, transform .17s .26s ease-in-out;
        }
        .designProjectLive-${i} {
          opacity:${designProjectVisible ? 1 : 0};
          transform:${designProjectVisible ? 'translateY(0)' : 'translateY(50px)'};
          transition:opacity .14s .28s ease-in-out, transform .17s .3s ease-in-out;
        }
        .decoration-${i} {
          opacity:${designProjectVisible ? 1 : 0};
          transform:${designProjectVisible ? 'translateX(0)' : 'translateX(50px)'};
          transition:opacity .18s .34s ease-in-out, transform .2s .36s ease-in-out;
        }
        .decorationRotated-${i} {
          opacity:${designProjectVisible ? 1 : 0};
          transform:${designProjectVisible ? 'translateX(0)' : 'translateX(-50px)'};
          transition:opacity .18s .34s ease-in-out, transform .2s .36s ease-in-out;
        }
        `
      */
    }
  return styles
}

export const DesignsContainer = styled.section`
  width:260px;
  min-height:100vh;
  display:flex;
  justify-content:center;
  flex-direction:column;
  color: ${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  @media(min-width:768px) {
    width:500px;
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
  height:100vh;
  >div{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:space-between;
    @media(min-width:768px) {
      margin:0 auto;
    }
    @media(min-width:992px) {
      flex-direction:row;
      align-items:flex-end;
      justify-content:space-between;
    }
    @media(min-width:1600px){
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
  width:100%;
  color: ${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
`

export const DesignProjectItem = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  border-radius:12px;
  color:inherit;
  margin:0 0 200px 0;
  ${props => {return revealProjects(props.designProjectVisible)}}
  &:nth-child(2){
    margin: 0 !important;
    img:hover{
      cursor:${`url(${WhiteCursor}) 35 35, auto`};
    }
  }
  @media (min-width:768px) {
    padding:0 0px 20px 0px;
  }
  @media (min-width:992px) {
    padding:0 0 30px 0;
  }
  @media (min-width:1200px) {
    padding:0 0 60px 0;
  }
`

export const PreviewContainer = styled.div`
  width:100%;
  position:relative;
`

export const Preview = styled.img`
  display:block;
  position:relative;
  width:100%;
  max-width:230px;
  border-radius:12px;
  margin:0 auto 40px auto;
  z-index:1;
  @media(min-width:650px) {
    margin:0px auto 32px auto;
  }
  @media(min-width:768px) {
    max-width:430px;
  }
  @media(min-width:992px) {
    max-width:640px;
    margin:0 auto 40px auto;
  }
  @media(min-width:1600px) {
    margin:0 auto 50px auto;
    max-width:990px;
  }
`

export const DecorationContainer = styled.span`
  display:block;
  position:absolute;
  height:130px;
  width:83px;
  top:-15px;
  left:0px;
  &:nth-child(2){
    height:83px;
    width:130px;
    top:auto;
    left:auto;
    right:0px;
    bottom:25px;
  }
  @media(min-width:768px) {
    height:200px;
    width:128px;
    top:-30px;
    &:nth-child(2){
      height:128px;
      width:200px;
      bottom:0;
    }
  }
  @media(min-width:992px) {
    height:255px;
    width:165px;
    top:-35px;
    &:nth-child(2){
      height:165px;
      width:255px;
    }
  }
  @media(min-width:1600px) {
    height:360px;
    width:230px;
    top: -80px;
    &:nth-child(2) {
      height:230px;
      width:360px;
    }
  }
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
  /* @media(min-width:1600px){
  } */
`

export const DesignProjectLive = styled.a`
  ${MainButton}
  @media(min-width:992px) {
    width:285px;
  }
  @media(min-width:2000px) {
    font-size:24px;
  }
`