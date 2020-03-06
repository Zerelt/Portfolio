import styled from 'styled-components'
import COLORS from 'assets/theme/colors'
import { MainButton } from 'assets/theme/button'


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
  margin:180px 0;
  @media(min-width:768px){
    padding:96px 0 0 0;
  }
  @media(min-width:992px){
    padding:0;
    margin:15% 0;
  }
`

export const Project = styled.div`
  width:260px;
  min-height:600px;
  margin:0 0 350px 0;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:flex-start;
  &:nth-child(3){
    margin:0;
  }
  ${props => {return revealProjects(props.projectVisible)}}
  @media(min-width:768px) {
    width:500px;
  }
  @media (min-width:992px) {
    width:850px;
    height:100vh;
    flex-direction:row-reverse;
    justify-content:space-between;
    align-items:center;
    &:nth-child(2){
      flex-direction:row;
    }
  }
  @media(min-width:1200px) {
    width:950px;
  }
  @media(min-width:1600px) {
    width:1300px;
  }
`

export const ProjectImageContainer = styled.div`
  margin:0 0 32px 0;
  @media(min-width:768px) and (orientation:landscape){
    margin:0;
  }
`

export const ProjectImage = styled.img`
  width: 100%;
  @media (min-width:992px) {
    width:auto;
    height:550px;
  }
  @media (min-width:1600px) {
    width:auto;
    height:700px;
  }
`

export const ProjectInfoContainer = styled.div`
  color: ${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
`

export const ProjectTitle = styled.p`
  font-size:28px;
  font-family: 'Circular Black';
  letter-spacing: -1.5px;
  color:inherit;
  line-height:30px;
  margin:0 0 11px 0;
  text-decoration:underline;
  text-decoration-color: ${COLORS.ACCENT};
  @media (min-width:650px) and (orientation: portrait) {
    font-size:42px;
    line-height:48px;
  }
  @media(min-width:992px){
    font-size:48px;
    line-height:48px;
    margin:0 0 44px 0;
    max-width:300px;
  }
  @media(min-width:1600px){
    font-size:58px;
    line-height:58px;
    max-width:380px;
  }
`

export const ProjectDescription = styled.p`
  font-size:16px;
  line-height:22px;
  color:inherit;
  @media (min-width:992px) {
    width:260px;
  }
  @media(min-width:1600px){
    width:320px;
    font-size:18px;
    line-height:24px;
  }
`

export const ProjectDescriptionSecondary = styled(ProjectDescription)`
  height:0;
  overflow:hidden;
  margin:0 0 32px 0;
  @media (min-width:650px) and (orientation: portrait) {
    margin:0 0 80px 0;
  }
  @media(min-width:992px) {
    height:auto;
  }
  @media(min-width:1600px) {
    margin:0 0 100px 0;
  }
`

export const ProjectLiveWrapper = styled.div``

export const ProjectLive = styled.a`
  ${MainButton}
  margin:0 auto;
  @media(min-width:992px) {
    margin:auto auto auto 0;
  }
`