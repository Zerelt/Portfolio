import styled from 'styled-components'
import COLORS from 'assets/theme/colors'

export const LightOrDarkContainer = styled.div`
  display:none;
  @media(min-width:1200px) {
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    position:absolute;
    height:90px;
    display:flex;
    position:fixed;
    bottom:40px;
    left:40px;
    padding:0;
  }
  @media(min-width:1400px) {
    top:0;
    bottom:0;
    left:40px;
    margin:auto;
  }
  @media(min-width:1600px) {
    left:80px;
  }
  @media(min-width:2000px) {
    left: calc(50vw - 880px);
  }
`

export const LightOrDarkOption = styled.p`
  font-size:16px;
  writing-mode:vertical-rl;
  transform:rotate(180deg);
  position:relative;
  padding:0;
  &:nth-child(1){
    color:${props => !props.defaultTheme ? COLORS.ACCENT : COLORS.WHITE};
  }
  &:nth-child(2){
    color:${props => props.defaultTheme ? COLORS.ACCENT : COLORS.DARKBLACK};
  }
  span{
    position:absolute;
    left:-3px;
    top:0;
    width:2px;
    height:0;
    background-color:${COLORS.ACCENT};
    transition:height .16s ease-in;
  }
  &:hover{
    span{
      height:100%;
      transition:height .16s ease-in;
    }
  }
`