import styled from 'styled-components'
import COLORS from 'assets/theme/colors'
import { fullCenter } from 'assets/theme/mixins'

export const MenuButtonContainer = styled.div`
  width:40px;
  height:40px;
  position:fixed;
  bottom:20px;
  right:12px;
  ${fullCenter}
  flex-direction: column;
  background-color:${COLORS.ACCENT};
  border-radius:50%;
  box-shadow:0 4px 16px 8px rgba(255, 87, 87, .3);
  transform:${props => props.menuOpen ? 'rotate(-45deg)' : 'rotate(0)'};
  transition: transform .22s ease;
  z-index:3;
  cursor:pointer;
  @media(min-width:768px) {
    right:25px;
    bottom:25px;
    width:46px;
    height:46px;
  }
  @media(min-width:992px) {
    right:30px;
    bottom:30px;
    width:50px;
    height:50px;
  }
  @media(min-width:1200px){
    display:none;
  }
`

export const MenuButtonLine = styled.span`
  height:20px;
  width:1px;
  background-color:${props=> props.defaultTheme ? COLORS.DARKBLACK : COLORS.WHITE};
  background-color:${COLORS.DARKBLACK};
  &:nth-child(2){
    width:20px;
    height:1px;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
  }
`