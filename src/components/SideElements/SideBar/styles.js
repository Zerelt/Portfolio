import styled from 'styled-components'
import COLORS from 'assets/theme/colors'
import { fullCenter } from 'assets/theme/mixins'

export const SideBarContainer = styled.div`
  display:none;
  width:fit-content;
  @media(min-width:1200px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
`

export const Line = styled.span`
  position:relative;
  height:48px;
  width:1px;
  margin:0 0 5px 0;
  background-color:${props=>props.pageVisible ? COLORS.ACCENT : COLORS.WHITE};
  background-color:${props => props.pageVisible ? COLORS.ACCENT : (props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK)};
  cursor: pointer;
  &:nth-child(5){
    margin:0;
  }
  span{
    ${fullCenter};
    justify-content:flex-start;
    width:55px;
    position:absolute;
    top:0;
    bottom:0;
    left:0px;
    margin:auto;
    font-size:13px;
    color:${props => props.pageVisible ? (props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK) : 'transparent'};
    opacity:${props=> props.pageVisible ? 1 : 0};
    padding:${props => props.pageVisible ? '0 0 0 10px' : '0'};
    transition:opacity .12s, padding .12s;
  }
  &:hover{
    span{
      opacity:1;
      padding:0 0 0 10px;
      transition:opacity .12s ease-in-out, padding .12s ease-in-out;
      color:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
    }
  }
  @media(min-width:1600px) {
    font-size:16px;
  }
  @media(min-width:1600px) {
    height:68px;
  }
`