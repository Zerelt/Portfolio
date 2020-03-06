import styled from 'styled-components'
import { fullCenter } from 'assets/theme/mixins'

export const SideElementsContainer = styled.div`
  ${fullCenter};
  height:100%;
  position: fixed;
  top:0;
  bottom:0;
  right:16px;
  margin:auto;
  z-index: 2;
  @media (min-width:1200px){
    right:6.2vw;
  }
  @media (min-width:1200px){
    right:8vw;
  }
  @media (min-width:1600px){
    right:5vw;
  }
  @media(min-width:2000px) {
    right:calc(50vw - 850px);
  }
`