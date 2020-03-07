import styled from 'styled-components'
import COLORS from 'assets/theme/colors'

export const LightOrDarkContainer = styled.div`
  display:${props => props.mobile ? 'flex' : 'none'};
  align-items:center;
  justify-content:space-between;
  flex-direction:column;
  position:absolute;
  bottom:55px;
  left:16px;
  height:90px;
  width:12px;
  font-family: 'Circular Medium';
  @media(min-width:1200px) {
    display:flex;
    position:fixed;
    bottom:40px;
    left:40px;
    font-family: 'Circular';
  }
  @media(min-width:1400px) {
    top:0;
    bottom:0;
    left:40px;
    margin:auto;
  }
`

export const LightOrDarkOption = styled.p`
  font-size:13px;
  font-family:inherit;
  writing-mode:vertical-rl;
  transform:rotate(180deg);
  position:relative;
  padding:0;
  span{
    position:absolute;
    left:-3px;
    top:0;
    width:2px;
    height:0;
    background-color:${COLORS.ACCENT};
    transition:height .16s ease-in;
  }
  &:nth-child(1){
    color:${props => !props.defaultTheme ? COLORS.ACCENT : COLORS.WHITE};
  }
  &:nth-child(2){
    color:${props => props.defaultTheme ? COLORS.ACCENT : COLORS.DARKBLACK};
  }
  @media(any-hover:hover) {
    &:hover{
      span{
        height:100%;
        transition:height .16s ease-in;
      }
    }
  }
`