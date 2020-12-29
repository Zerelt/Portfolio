import styled from 'styled-components'
import COLORS from 'assets/theme/colors'
import { MainButton } from 'assets/theme/button'
import { fullCenter } from 'assets/theme/mixins'


// TODO: 
// -give some love to phone landscape viewports



function revealProjects (projectVisible) {
  let styles =''
  for(let i=0;i<=2;i++) {
    styles+=`
      .imageContainer-${i} {
        opacity:${projectVisible ? 1 : 0};
        transform:${projectVisible ? 'translateX(0)' : 'translateX(50px)'};
        transition:opacity .18s .1s ease-in-out, transform .2s .14s ease-in-out;
      }
      .projectTitle-${i} {
        opacity:${projectVisible ? 1 : 0};
        transform:${projectVisible ? 'translateX(0)' : 'translateX(-50px)'};
        transition:opacity .14s .32s ease-in-out, transform .17s .36s ease-in-out;
        
      }
      .projectDescription-${i} {
        opacity:${projectVisible ? 1 : 0};
        transform:${projectVisible ? 'translateX(0)' : 'translateX(-50px)'};
        transition:opacity .14s .4s ease-in-out, transform .17s .44s ease-in-out;
      }
      .projectInfoTools-${i} {
        opacity:${projectVisible ? 1 : 0};
        transform:${projectVisible ? 'translateX(0)' : 'translateX(-50px)'};
        transition:opacity .14s .48s ease-in-out, transform .17s .52s ease-in-out;
      }
      .projectInfoOther-${i} {
        opacity:${projectVisible ? 1 : 0};
        transform:${projectVisible ? 'translateX(0)' : 'translateX(-50px)'};
        transition:opacity .14s .56s ease-in-out, transform .17s .60s ease-in-out;
      }
      .projectLive-${i} {
        opacity:${projectVisible ? 1 : 0};
        transform:${projectVisible ? 'translateX(0)' : 'translateX(-50px)'};
        transition:opacity .14s .48s ease-in-out, transform .17s .52s ease-in-out;
        @media(min-width:992px) {
          opacity:${projectVisible ? 1 : 0};
          transform:${projectVisible ? 'translateX(0)' : 'translateX(-50px)'};
          transition:opacity .14s .64s ease-in-out, transform .17s .68s ease-in-out;
        }
      }
    `
  }
  return styles
}

export const WorkContainer = styled.section`
  min-height:100vh;
  box-sizing:content-box;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  padding:48px 0 0 0;
  @media(min-width:768px){
    padding:96px 0 0 0;
  }
  @media(min-width:992px){
    padding:0;
  }
`

export const Project = styled.div`
  width:260px;
  margin:0 0 150px 0;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  // hide third project placeholder
  &:nth-child(3){
    display:none !important;
  }
  ${props => {return revealProjects(props.projectVisible)}}
  @media (min-width:768px) {
    width:600px;
    flex-direction:row-reverse;
    justify-content:space-between;
    align-items:center;
    // the ProjectImageContainer in the first project
    &:nth-child(1) > div:nth-child(1) {
      align-items:center;
    }
    // the ProjectImageContainer in the second project
    &:nth-child(2) > div:nth-child(1) {
      padding:0 5px;
      img{
        // image overflows but if you apply overflow:none 
        // to the image container, the overflow of the 
        // decorations are hidden as well
        border-radius:0 0 12px 0;
      }
    }
  }
  @media(min-width:992px) {
    width:850px;
    &:nth-child(2) > div:nth-child(1) {
      img{
        // remove border radius since we add overflow to 
        // the image container at 992 and remove the decorations
        border-radius:0;
      }
    }
  }
  @media(min-width:1200px) {
    width:950px;
  }
  @media(min-width:1600px) {
    width:1300px;
    // the image in the first project
    &:nth-child(1) > div:nth-child(1) > img {
      height:700px;
    }
    // the image in the second project
    &:nth-child(2) > div:nth-child(1) > img {
      height:740px;
    }
  } 
`

export const ProjectImageContainer = styled.div`
  ${fullCenter}
  align-items:flex-end;
  height:296px;
  width:260px;
  margin:0 0 24px 0;
  padding:6px 0 0 0;
  border-radius:5px;
  background-color:${props => props.defaultTheme ? COLORS.DARKGRAY : COLORS.LIGHTGRAY};
  @media(min-width:768px) {
    position:relative;
    height:640px;
    width:calc(100% - 256px);
    padding:0;
    margin:0;
    border-radius:16px;
  }
  @media(min-width:992px) {
    height:600px;
    // add !important flag to overwrite the padding we set
    // in the Project component using nth-child > div:nth-child
    padding:0px 30px !important;
    width:calc(100% - 315px);
    border-radius:16px;
    overflow:hidden;
  }
  @media(min-width:1200px) {
    padding:0 80px !important;
  }
  @media(min-width:1600px){
    height:760px;
    width:calc(100% - 345px);
    padding:0 !important;
  }
`

export const DecorationContainer = styled.div`
  height:100%;
  width:100%;
  position:absolute;
  top:0;
  left:0;
  svg{
    display:none;
  }
  @media(min-width:768px) {
    svg{
      display:block;
      position:absolute;
      width:142px;
      height:220px;
      z-index:-1;
    }
    .decoration-0 { 
      &:nth-child(1){
        top:-13px;
        left:18px;
      }
    &:nth-child(2){
        bottom:14px;
        right:18px;
      }
    }
    .decoration-1 { 
      &:nth-child(1){
        top:-11px;
        right:18px;
    }
      &:nth-child(2){
        display:none;
      }
    }
  }
  @media(min-width:992px) {
    display:none;
  }
`

export const ProjectImage = styled.img`
  height:100%;
  width:auto;
  @media (min-width:768px) {
    height:auto;
    width:100%;
  }
  @media (min-width:992px) {
    height:auto;
    width:100%;
  }
  @media (min-width:1600px) {
    width:auto;
    height:100%;
  }
`

export const ProjectInfoContainer = styled.div`
  color: ${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
`

export const ProjectTitle = styled.h3`
  font-size:42px;
  font-family: playfair-display, serif;
  font-weight:700;
  color:inherit;
  line-height:45px;
  margin:0 0 14px 0;
  text-decoration-color: ${COLORS.ACCENT};
  @media(min-width:768px){
    max-width:240px;
    font-size:38px;
    line-height:41px;
    margin:0 0 24px 0;
  }
  @media(min-width:992px){
    max-width:285px;
    font-size:45px;
    line-height:45px;
  }
  @media(min-width:1200px){
    margin:0 0 44px 0;
  }
  @media(min-width:1600px){
    margin:0 0 58px 0;
  }
`

export const ProjectDescription = styled.p`
  font-size:18px;
  line-height:24px;
  color:inherit;
  @media (min-width:768px) {
    width:240px;
  }
  @media (min-width:992px) {
    width:285px;
  }
  @media(min-width:1600px){
    font-size:18px;
    line-height:24px;
  }
`

export const ProjectDescriptionSecondary = styled(ProjectDescription)`
  height:0;
  overflow:hidden;
  margin:0 0 38px 0;
  span{
    display:block;
  }
  @media(min-width:768px) {
    height:auto;
    overflow: visible;
    margin:0 0 24px 0;
  }
  @media(min-width:1600px) {
    margin:0 0 80px 0;
  }
`

export const ProjectLiveWrapper = styled.div``

export const ProjectLive = styled.a`
  ${MainButton}
  margin:0 auto;
  @media(min-width:768px) {
    width:240px;
  }
  @media(min-width:992px) {
    margin:auto auto auto 0;
    width:285px;
  }
`