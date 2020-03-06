import styled from 'styled-components'
import COLORS from 'assets/theme/colors'

export const MenuButtonContainer = styled.div`
  width:30px;
  height:21px;
  position:absolute;
  top:16px;
  right:0;
  display:flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  cursor:pointer;
  @media(min-width:650px){
    width:40px;
    height:30px;
  }
  @media(min-width:1200px){
    display:none;
  }
`

export const MenuButtonLine = styled.span`
  width:100%;
  height:1px;
  background-color:${props=> props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  &:nth-child(2){
    width:20px;
    background-color: ${COLORS.ACCENT};
  }
  @media(min-width:650px){
    height:2px;
    &:nth-child(2){
      width:27px;
    }
  }
`