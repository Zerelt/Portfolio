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



export const AboutContainer = styled.section`
  height:100vh;
  width:260px;
  box-sizing:content-box;
  display:flex;
  align-items:center;
  justify-content: center;
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
