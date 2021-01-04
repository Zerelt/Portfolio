import styled from 'styled-components'
import COLORS from 'assets/theme/colors';
import { fullCenter } from 'assets/theme/mixins'
import { MainButton } from 'assets/theme/button'

function revealWords(wordCountStart,wordCountEnd) {
  let styles = '';
  if(wordCountStart===0){
    for (let i=wordCountStart; i<=wordCountEnd; i++) {
      styles +=`
      .words-revealed-${i} {
         opacity:1;
          transition:opacity .2s ${i*.03}s ease-in;
        }
      `
    }
  } else {
    // this else condition isn't needed anymore
    // keeping it here for now in case I decide to
    // display the second half of the text depending
    // on a different reveal point
    for (let i=wordCountStart; i<=wordCountEnd; i++) {
      styles+=`
      .words-revealed-${i} {
          opacity:1;
          transition:opacity .2s ${i*.03}s ease-in;
        }
      `
    }
  }
  return styles;
}

function underlineKeywords(wordCountStart,wordCountEnd) {
  let styles='';
  if(wordCountStart===0) {
    for(let i=wordCountStart;i<=wordCountEnd;i++){
      styles+=`
        .keywords-underlined-${i} {
          width:100%;
          transition:width .1s ease-in-out;
          transition-delay: ${(i*.075) + .7}s;
          z-index:-1;
        }
      `
    } 
  } else {
    // this else condition isn't needed anymore
    // keeping it here for now in case I decide to
    // display the second half of the text depending
    // on a different reveal point
      for(let i=wordCountStart;i<=wordCountEnd;i++){
        styles+=`
          .keywords-underlined-${i} {
            width:100%;
            transition:width .2s ease-in-out;
            transition-delay: ${(i*.15) + .9}s;
            z-index:-1;
          }
        `
      }
    }
  return styles
}


function revealTechList () {
  let styles='';
  for(let i=1;i<=3;i++){
    styles+=`
      &:nth-child( ${i} ) {
        transition-delay: ${i * .25}s;
      }
    `
  } 
  return styles
}

export const AboutContainer = styled.section`
  height:100vh;
  width:260px;
  box-sizing:content-box;
  ${fullCenter}
  flex-direction: column;
  padding:0px;
  @media (min-width:768px){
    width:600px;
    min-height:600px;
  }
  @media (min-width:992px){
    width: 850px;
    margin:120px 0;
  }
  @media(min-width:1200px) {
    width:950px;
  }
  @media(min-width:1600px) {
    width:1300px;
  }
`

export const AboutInfo = styled.div`
  font-size:18px;
  line-height:24px;
  color: ${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK} ;
  ${props=>{
    if (props.infoOneTop<=props.height*.75) {
      return revealWords(0,62)
    }
  }};
  ${props=>{
    if (props.infoOneTop<=props.height*.75) {
      return underlineKeywords(0,17)
    }
  }}; 
  &:nth-child(2){
    padding:75px 0 0 0;
  }
  @media (min-width:768px){
    font-size:32px;
    line-height:48px;
    &:nth-child(2){
      padding:100px 0 0 0;
    }
  }
  @media (min-width:992px){
    font-size:35px;
    line-height:49px;
  }
  @media (min-width:1600px){
    font-size:48px; 
    line-height:64px;
  }
`

export const Words = styled.span`
  opacity:0;
`

export const Keywords = styled.span`
  position:relative;
  white-space: nowrap;
  z-index: 1;
  >span{
    position:absolute;
    bottom:0;
    left:0;
    width:0;
    height:1px;
    background-color:${COLORS.ACCENT};
    transition:width .212s ease-in-out;
  }
  @media(min-width:768px) {
    span{
      bottom:2px;
    }
  }
  @media(min-width:992px) {
    span{
      height:2px;
    }
  }
`

export const TechListOverlay = styled.div`
  ${fullCenter};
  flex-direction:column;
  position:fixed;
  width:100%;
  height:100%;
  top:0;
  left:0;
  overflow:scroll;
  z-index:${props => props.showTechList ? 2 : "-5"};
  opacity:${props => props.showTechList ? 1 : 0};
  &:after{
    content:'';
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:${props => props.defaultTheme ? COLORS.DARKBLACK: COLORS.WHITE};
  }
`

export const TechListInner = styled(AboutContainer)`
  margin:0 !important;
  height:auto !important; 
  z-index:3;
  @media(min-width:1200px) {
    min-height:auto;
    flex-wrap:wrap;
    flex-direction:row;
    align-items:flex-start;
    justify-content:space-between;
  }
`

export const TechListCategory = styled.div`
  width:100%;
  transform: ${props => props.showTechList ? 'translateZ(0)' : 'translate3d(0, 50px, 0)'};
  opacity: ${props => props.showTechList ? 1 : 0};
  transition: transform ease, opacity ease;
  transition-duration: ${props => props.showTechList ? '0.5s' : '0s'};
  ${props=>{
    if (props.showTechList) {
      return revealTechList()
    }
  }};
  &:nth-child(2){
    padding:12px 0;
    margin:12px 0;
    border-top:1px solid ${COLORS.ACCENT};
    border-bottom:1px solid ${COLORS.ACCENT};
  }
  @media(min-width:768px) {
    &:nth-child(2) {
      padding:24px 0;
      margin:24px 0;
    }
  }
  @media(min-width:1200px) {
    &:nth-child(1){
      border-bottom:1px solid ${COLORS.ACCENT};
      padding:0 0 24px 0;
    }
    &:nth-child(2), &:nth-child(3){
      width:50%;
    }
    &:nth-child(2) {
      border-top:none;
      border-bottom:none;
      margin:0;
      padding:24px 0 0 0;
    }
    &:nth-child(3) {
      justify-self:flex-start;
      padding:24px 0 0 0;
    }
  }
`

export const TechList = styled.p`
  font-size:18px;
  line-height:24px;
  color: ${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK} ;
  @media (min-width:768px){
    font-size:32px;
    line-height:48px;
  }
  @media (min-width:992px){
    font-size:35px;
    line-height:49px;
  }
  @media (min-width:1600px){
    font-size:48px; 
    line-height:64px;
  }
`

export const TechListTitle = styled(TechList)`
  font-weight:500;
`

export const CloseButtonWrapper = styled.div`
  margin:48px auto 0 auto;
  transform: ${props => props.showTechList ? 'translateZ(0)' : 'translate3d(0, 50px, 0)'};
  opacity: ${props => props.showTechList ? 1 : 0};
  transition: transform ease, opacity ease;
  transition-duration: ${props => props.showTechList ? '0.5s' : '0s'};
  transition-delay: ${props => props.showTechList ? '1s' : '0s'};
  z-index:1;
`

export const CloseButton = styled.div`
  ${MainButton}
  margin:0 auto;
  @media(min-width:992px) {
    width:285px;
  }
`