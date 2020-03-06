import styled from 'styled-components'
import COLORS from 'assets/theme/colors';


// TODO: 
// -give some love to phone landscape viewports



function revealWords(wordCountStart,wordCountEnd) {
  let styles = '';
  if(wordCountStart===0){
    for (let i=wordCountStart; i<=wordCountEnd; i++) {
      styles +=`
      .words-revealed-${i} {
         opacity:1;
          transition:opacity .2s ${i*.07}s ease-in-out;
        }
      `
    }
  } else {
    for (let i=wordCountStart; i<=wordCountEnd; i++) {
      styles+=`
      .words-revealed-${i} {
          opacity:1;
          transition:opacity .2s ${i*.035}s ease-in-out;
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
          transition:width .2s ease-in-out;
          transition-delay: ${(i*.15) + 1.8}s;
          z-index:-1;
        }
      `
    } 
  } else {
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



export const AboutContainer = styled.section`
  min-height:100vh;
  width:260px;
  box-sizing:content-box;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  padding:16px;
  padding:0px;
  @media (min-width:768px){
    width:500px;
    margin:0 auto;
  }
  @media (min-width:992px){
    width: 850px;
  }
  @media(min-width:1200px) {
    width:950px;
  }
  @media(min-width:1600px) {
    width:1300px;
  }
`

export const AboutInfo = styled.div`
  font-size:16px;
  line-height:22px;
  color: ${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK} ;
  ${props=>{
    if (props.infoOneTop<=props.height/2) {
      return revealWords(0,40)
    }
  }};
  ${props=>{
    if (props.infoOneTop<=props.height/2) {
      return underlineKeywords(0,15)
    }
  }};
  &:nth-child(2){
    padding:75px 0 0 0;
  }
  @media (min-width:768px){
    font-size:32px;
    line-height:38px;
    &:nth-child(2){
      padding:100px 0 0 0;
    }
  }
  @media (min-width:992px){
    font-size:38px;
    line-height:44px;
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
    bottom:-2px;
    left:0;
    width:0;
    height:1px;
    background-color:${COLORS.ACCENT};
    transition:width .212s ease-in-out;
  }
  @media(min-width:768px) {
    span{
      height:3px;
    }
  }
  @media(min-width:992px) {
    span{
      height:4px;
    }
  }
`
