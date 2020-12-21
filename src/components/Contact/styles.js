import styled from 'styled-components'
import COLORS from 'assets/theme/colors'
import { resetInputStyle } from 'assets/theme/mixins'
import { MainButton } from 'assets/theme/button'


// TODO: 
// -give some love to phone landscape viewports



export const ContactContainer = styled.section`
  min-height:550px;
  width:260px;
  position: relative;
  box-sizing:content-box;
  display:flex;
  align-items:center;
  justify-content: flex-start;
  flex-direction: column;
  padding:50px 0 0 0;
  margin:180px 0 100px 0;
  z-index:1; /* without this, if the mobile 
  menu is opened and you click where the 
  inputs are the cursor goes inside the inputs */
  @media (min-width:768px){
    width:500px;
    min-height:825px;
  }
  @media (min-width:992px){
    height:90vh;
    min-height:875px;
    width:850px;
    justify-content:center;
    padding:0;
    margin:180px 0 0 0;
  }
  @media(min-width:1200px){
    width:950px;
    min-height:950px;
  }
  @media(min-width:1600px) {
    width:1300px;
  }
`

export const ContactHeader = styled.h2`
  width:260px;
  font-size:32px;
  font-size:42px;
  font-family: inherit;
  font-weight: 500;
  color:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  text-align: left;
  opacity:${props => props.contactHeadlineTop<=props.height-100 ? 1 : 0};
  transition: opacity .16s ease-in-out;
  span{
    color: ${COLORS.ACCENT};
  }
  @media (min-width:768px){
    width:100%;
    font-size:140px;
    line-height:148px;
  }
  @media(min-width:992px) {
    opacity:${props => props.contactHeadlineTop<=props.height-300 ? 1 : 0};
  }
  @media (min-width:1200px){
    font-size:160px;
    line-height:168px;
  }
  @media (min-width:1400px){
    font-size:180px;
    line-height:188px;
  }
  /* @media (min-width:1600px){
    font-size:224px;
    line-height:228px;
  } */
`

export const ContactForm = styled.form`
  @media(min-width: 768px){
    width:100%;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:260px;
  margin:0 0 100px 0;
  @media (min-width:768px) {
    width:100%;
    align-items: center;
    padding:15% 0;
    margin:0;
  }
  @media (min-width:992px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media(min-width:1600px) {
    padding:10% 0;
  }
`

export const NameAndEmail = styled.div`
  height:120px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  margin:60px 0;
  @media(min-width:768px) {
    height:180px;
    width:100%;
    max-width:500px;
  }
  @media(min-width:992px) {
    height:200px;
    width:48%;
    max-width:725px;
    margin:0 150px 0 0;
  }
  @media(min-width:1400px) {
    height:240px;
  }
`

export const NameBox = styled.div`
  position:relative;
  .notEmpty-label, 
  .userInput:focus ~ .inputLabel {
    transform:translateY(-20px) scale(.8);
    transition: transform .18s;
    transform-origin: top left;
  }
  >span{
    position:absolute;
    bottom:0;
    left:0;
    height:1px;
    width:${props => props.nameFieldTop<=props.height-100 ? '100%' : 0};
    transition:width .2s ease-in-out;
    background-color:${COLORS.ACCENT};
  }
  >input{
    opacity:${props => props.nameFieldTop<=props.height-100 ? 1 : 0};
  }
  @media(min-width:992px) {
    .notEmpty-label, 
    .userInput:focus ~ .inputLabel {
      transform:translateY(-17px) scale(.692);
    }
    >span{
      height:2px;
      width:${props => props.nameFieldTop<=props.height-300 ? '100%' : 0};
    }
    >input{
      width:${props => props.nameFieldTop<=props.height-300 ? 1 : 0};
    }
  }
`

export const EmailBox = styled(NameBox)`
  >span{
    width:${props => props.emailFieldTop<=props.height-100 ? '100%' : 0};
  }
  >input{
    width:${props => props.emailFieldTop<=props.height-100 ? 1 : 0};
  }
  @media(min-width:992px) {
    >span{
      width:${props => props.nameFieldTop<=props.height-300 ? '100%' : 0};
      transition-delay: .2s;
    }
    >input{
      width:${props => props.nameFieldTop<=props.height-300 ? 1 : 0};
    }
  }
`

export const MessageBox = styled.div`
  position:relative;
  .notEmpty-messageLabel,
  .message:focus ~ .messageLabel {
    transform:translate(-6px,-20px) scale(.8);
    transition: transform .18s;
    @media (min-width:768px) {
      transform:translate(-11px,-20px) scale(.8);
    }
    @media (min-width:992px) {
      transform:translate(-14px,-21px) scale(.692);
    }
  }
  >span{
    position:absolute;
    bottom:0;
    left:0;
    height:1px;
    width:${props => props.messageFieldTop<=props.height-200 ? '100%' : 0};
    transition:width .2s ease-in-out;
    background-color:${COLORS.ACCENT};
  }
  >textarea{
    opacity:${props => props.messageFieldTop<=props.height-200 ? 1 : 0};
  }
  @media(min-width:768px) {
    height:180px;
    width:100%;
    max-width:500px;
  }
  @media(min-width: 992px) {
    width:48%;
    height:200px;
    max-width:725px;
    >span{
      top:0;
      bottom:auto;
      width:2px;
      height:${props => props.messageFieldTop<=props.height-300 ? '100%' : 0};
      transition:height .2s ease-in-out;
      transition-delay: .4s;
    }
    >textarea{
      opacity:${props => props.messageFieldTop<=props.height-300 ? 1 : 0};
    }
  }
  @media(min-width:1400px) {
    height:240px;
  }
`

export const NameLabel = styled.label`
  position:absolute;
  left:0;
  font-family: inherit;
  font-size: 18px;
  color:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  z-index:1;
  transition: all .2s;
  >span{
    opacity:${props => props.nameFieldTop<=props.height-100 ? 1 : 0};
    transition: opacity .16s ease-out;
    transition-delay: ${props => props.nameFieldTop<=props.height-100 ? '.16s' : '0s'}
  }
  @media(min-width: 768px) {
    font-weight: 500;
  }
  @media(min-width:992px) {
    >span{
      opacity:${props => props.nameFieldTop<=props.height-300 ? 1 : 0};
      transition-delay: ${props => props.nameFieldTop<=props.height-300 ? '.6s' : '0s'}
    }
  }
`

export const EmailLabel = styled(NameLabel)`
  >span{
    opacity:${props => props.emailFieldTop<=props.height-100 ? 1 : 0};
    transition: opacity .16s ease-out;
    transition-delay: ${props => props.emailFieldTop<=props.height-100 ? '.16s' : '0s'}
  }
  @media(min-width:992px) {
    >span{
      opacity:${props => props.nameFieldTop<=props.height-300 ? 1 : 0};
      transition-delay: ${props => props.nameFieldTop<=props.height-300 ? '.6s' : '0s'}
    }
  }
`

export const MessageLabel = styled(NameLabel)`
  >span{
    opacity:${props => props.messageFieldTop<=props.height-200 ? 1 : 0};
    transition: opacity .16s ease-out;
    transition-delay: ${props => props.messageFieldTop<=props.height-200 ? '.16s' : '0s'}
  }
  @media (min-width: 992px) {
    padding: 0 0 0 12px;
    >span{
      opacity:${props => props.messageFieldTop<=props.height-300 ? 1 : 0};
      transition-delay: ${props => props.messageFieldTop<=props.height-300 ? '.6s' : '0s'}
    }
  }
`

export const UserInput = styled.input`
  ${resetInputStyle}
  position:relative;
  width:100%;
  font-size:16px;
  font-family:inherit;
  font-weight:inherit;
  color:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  background-color:transparent;
  z-index:2;
  @media(min-width:768px) {
    padding:8px 0 4px 0;
  }
  @media(min-width: 992px) {
    font-size:18px;
  }
`

export const Message = styled.textarea`
  ${resetInputStyle}
  position:relative;
  width:100%;
  height:120px;
  color:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  font-size:16px;
  font-family: inherit;
  font-weight: inherit;
  resize: none;
  background-color:transparent;
  z-index:2;
  @media(min-width: 768px) {
    height:180px;
    padding:12px 0;
  }
  @media (min-width:992px) {
    padding:12px;
    height:200px;
    font-size:18px;
    border:none;
  }
  @media(min-width:1400px) {
    height:240px;
  }
`

export const SubmitBtnWrapper = styled.div`
  opacity:${props => props.messageFieldTop<=props.height-200 ? 1 : 0};
  transform:${props => props.messageFieldTop<=props.height-300 ? 'translateY(0)' : 'translateY(50px)'};
  transition: opacity .16s ease-out, transform .2s ease-out;
  transition-delay: ${props => props.messageFieldTop<=props.height-200 ? '.16s' : '0s'};
  @media (min-width:992px) {
    opacity:${props => props.messageFieldTop<=props.height-300 ? 1 : 0};
    transition-delay: ${props => props.messageFieldTop<=props.height-300 ? '.8s' : '0s'};
  }
`

export const SubmitBtn = styled.button`
  ${MainButton}
  margin:0 auto;
  @media(min-width:992px) {
    width:285px;
  }
`










