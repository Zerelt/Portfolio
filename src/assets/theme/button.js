import COLORS from 'assets/theme/colors';
import { fullCenter, resetInputStyle } from 'assets/theme/mixins'


export const MainButton = `
  ${resetInputStyle};
  ${fullCenter}
  width:260px;
  height:46px;
  position:relative;
  font-family:'Circular Medium';
  font-size:20px;
  color:${COLORS.DARKBLACK};
  text-transform: capitalize;
  background-color:${COLORS.ACCENT};
  border:none;
  border-radius:40px;
  box-shadow:0px 0px 0px rgba(255,87,87,0.3);
  transition:box-shadow .14s, transform 0.14s;
  text-decoration:none;
  overflow: hidden;
  z-index:1;
  @media (min-width:768px) {
    font-size:22px;
    font-family: 'Circular Bold';
    line-height: 34px;
    letter-spacing: -0.6px;
  }
  @media(min-width:1200px){
    &:hover{
      box-shadow:0px 8px 88px rgba(255,87,87,0.53);
      transform:translateY(-3px);
      transition:box-shadow .14s, transform 0.18s;
    }
  }
  @media(min-width:2000px) {
    width:280px;
    height:55px;
    font-size:26px;
  }
`