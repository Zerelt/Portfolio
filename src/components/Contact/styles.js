import styled from 'styled-components'
import COLORS from 'assets/theme/colors'
import { resetInputStyle } from 'assets/theme/mixins'
import { MainButton } from 'assets/theme/button'

export const ContactContainer = styled.section`
  width:260px;
  position: relative;
  box-sizing:content-box;
  display:flex;
  align-items:center;
  justify-content: flex-start;
  flex-direction: column;
  margin:150px 0 100px 0;
  z-index:1; /* without this, if the mobile 
  menu is opened and you click where the 
  inputs are the cursor goes inside the inputs */
  @media (min-width:768px){
    width:600px;
    height:auto;
  }
  @media (min-width:992px){
    width:850px;
    justify-content:center;
  }
  @media(min-width:1200px){
    width:950px;
  }
  @media(min-width:1600px) {
    width:1300px;
    height:100vh;
    min-height:800px;
    padding:0;
    margin:0;
  }
`

export const ContactHeader = styled.h2`
  width:260px;
  margin:0 0 48px 0;
  font-size:60px;
  font-family: inherit;
  font-weight: 500;
  color:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  text-align: left;
  opacity:${props => props.contactHeadlineTop<=props.height-148 ? 1 : 0};
  transition: opacity .16s ease-in-out;
  span{
    color: ${COLORS.ACCENT};
  }
  @media (min-width:768px){
    width:100%;
    font-size:144px;
  }
  @media(min-width:992px) {
    margin:0 0 100px 0;
    opacity:${props => props.contactHeadlineTop<=props.height-200 ? 1 : 0};
  }
  @media (min-width:1200px){
    font-size:160px;
  }
  @media (min-width:1600px){
    font-size:180px;
    margin:0 0 120px 0;
  }
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
  margin:0 0 48px 0;
  @media (min-width:768px) {
    width:100%;
    align-items: center;
  }
  @media (min-width:992px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin:0 0 105px 0;
  }
  @media(min-width:1600px) {
    margin:0 0 145px 0;
  }
`

export const NameAndEmail = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  @media(min-width:768px) {
    width:100%;
  }
  @media(min-width:992px) {
    height:164px;
    width:48%;
    max-width:725px;
    margin:0 150px 0 0;
  }
`

export const NameBox = styled.div`
  position:relative;
  margin:0 0 48px 0;
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
    width:${props => props.nameFieldTop<=props.height-148 ? '100%' : 0};
    transition:width .2s ease-in-out;
    background-color:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  }
  >input{
    opacity:${props => props.nameFieldTop<=props.height-148 ? 1 : 0};
    transition:${props => props.nameFieldTop<=props.height-148 ? 'opacity .2s .2s ease-in-out' : 0};
  }
  @media(min-width:992px) {
    margin:0;
    .notEmpty-label, 
    .userInput:focus ~ .inputLabel {
      transform:translateY(-17px) scale(.692);
    }
    >span{
      width:${props => props.nameFieldTop<=props.height-200 ? '100%' : 0};
    }
    >input{
      opacity:${props => props.nameFieldTop<=props.height-200 ? 1 : 0};
      transition: ${props => props.nameFieldTop<=props.height-200 ? 'opacity .2s .6s ease-in-out' : '0s'}
    }
  }
`

export const EmailBox = styled(NameBox)`
  >span{
    width:${props => props.emailFieldTop<=props.height-148 ? '100%' : 0};
  }
  >input{
    opacity:${props => props.emailFieldTop<=props.height-148 ? 1 : 0};
    transition:${props => props.emailFieldTop<=props.height-148 ? 'opacity .2s .2s ease-in-out' : 0};
  }
  @media(min-width:992px) {
    >span{
      width:${props => props.nameFieldTop<=props.height-200 ? '100%' : 0};
      transition-delay: .2s;
    }
    >input{
      opacity:${props => props.nameFieldTop<=props.height-200 ? 1 : 0};
    }
  }
`

export const MessageBox = styled.div`
  position:relative;
  .notEmpty-messageLabel,
  .message:focus ~ .messageLabel {
    transform:translate(-7px,-22px) scale(.8);
    transition: transform .18s;
    @media (min-width:768px) {
      transform:translate(-7px,-22px) scale(.8);
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
    width:${props => props.messageFieldTop<=props.height-148 ? '100%' : 0};
    transition:width .2s ease-in-out;
    background-color:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  }
  >textarea{
    opacity:${props => props.messageFieldTop<=props.height-148 ? 1 : 0};
    transition:${props => props.messageFieldTop<=props.height-148 ? 'opacity .2s .2s ease-in-out' : 0};
  }
  @media(min-width:768px) {
    width:100%;
  }
  @media(min-width: 992px) {
    width:48%;
    height:164px;
    max-width:725px;
    >span{
      top:0;
      bottom:auto;
      width:1px;
      height:${props => props.messageFieldTop<=props.height-200 ? '100%' : 0};
      transition:height .2s ease-in-out;
      transition-delay: .4s;
    }
    >textarea{
      opacity:${props => props.messageFieldTop<=props.height-200 ? 1 : 0};
      transition:${props => props.messageFieldTop<=props.height-200 ? 'opacity .2s .6s ease-in-out' : 0};
    }
  }
`

export const NameLabel = styled.label`
  position:absolute;
  left:1px;
  bottom:5px;
  font-family: inherit;
  font-size: 18px;
  color:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  z-index:1;
  transition: all .2s;
  >span{
    opacity:${props => props.nameFieldTop<=props.height-148 ? 1 : 0};
    transition: opacity .16s ease-out;
    transition-delay: ${props => props.nameFieldTop<=props.height-148 ? '.16s' : '0s'}
  }
  @media(min-width:992px) {
    >span{
      opacity:${props => props.nameFieldTop<=props.height-200 ? 1 : 0};
      transition-delay: ${props => props.nameFieldTop<=props.height-200 ? '.6s' : '0s'}
    }
  }
  @media(min-width:1600px) {
    font-weight: 500;
  }
`

export const EmailLabel = styled(NameLabel)`
  >span{
    opacity:${props => props.emailFieldTop<=props.height-148 ? 1 : 0};
    transition: opacity .16s ease-in-out;
    transition-delay: ${props => props.emailFieldTop<=props.height-148 ? '.16s' : '0s'}
  }
  @media(min-width:992px) {
    >span{
      opacity:${props => props.nameFieldTop<=props.height-200 ? 1 : 0};
      transition-delay: ${props => props.nameFieldTop<=props.height-200 ? '.6s' : '0s'}
    }
  }
`

export const MessageLabel = styled(NameLabel)`
top:0;
bottom:auto;
  >span{
    opacity:${props => props.messageFieldTop<=props.height-148 ? 1 : 0};
    transition: opacity .16s ease-in-out;
    transition-delay: ${props => props.messageFieldTop<=props.height-148 ? '.16s' : '0s'}
  }
  @media (min-width: 992px) {
    padding: 0 0 0 12px;
    >span{
      opacity:${props => props.messageFieldTop<=props.height-200 ? 1 : 0};
      transition-delay: ${props => props.messageFieldTop<=props.height-200 ? '.6s' : '0s'}
    }
  }
`

export const UserInput = styled.input`
  ${resetInputStyle}
  position:relative;
  width:100%;
  height:30px;
  font-size:18px;
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
  height:100px;
  padding:5px 0 0 0;
  font-size:18px;
  font-family: inherit;
  font-weight: inherit;
  line-height:24px;
  color:${props => props.defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK};
  resize: none;
  background-color:transparent;
  z-index:2;
  @media(min-width: 768px) {
    padding:8px 0 0 0;
  }
  @media (min-width:992px) {
    padding:12px;
    height:200px;
    font-size:18px;
    border:none;
  }
`

export const SubmitBtnWrapper = styled.div`
  opacity:${props => props.messageFieldTop<=props.height-148 ? 1 : 0};
  transform:${props => props.messageFieldTop<=props.height-148 ? 'translateY(0)' : 'translateY(50px)'};
  transition: opacity .16s ease-in-out, transform .2s ease-in-out;
  transition-delay: ${props => props.messageFieldTop<=props.height-148 ? '.16s' : '0s'};
  @media (min-width:992px) {
    opacity:${props => props.messageFieldTop<=props.height-200 ? 1 : 0};
    transform:${props => props.messageFieldTop<=props.height-200 ? 'translateY(0)' : 'translateY(50px)'};
    transition-delay: ${props => props.messageFieldTop<=props.height-200 ? '.8s' : '0s'};
  }
`

export const SubmitBtn = styled.button`
  ${MainButton}
  margin:0 auto;
  @media(min-width:992px) {
    width:285px;
  }
`










