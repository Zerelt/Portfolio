import { hot } from 'react-hot-loader'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  ContactContainer,
  ContactForm,
  ContactHeader,
  InputContainer,
  NameAndEmail,
  MessageBox,
  NameBox,
  EmailBox,
  NameLabel,
  EmailLabel,
  MessageLabel,
  UserInput,
  Message,
  SubmitBtnWrapper,
  SubmitBtn
} from './styles'


class Contact extends Component {
  static propTypes= {
    contactRef: PropTypes.func,
    defaultTheme: PropTypes.bool,
    height: PropTypes.number,
    contactHeadlineTop: PropTypes.number,
    nameFieldTop: PropTypes.number,
    emailFieldTop: PropTypes.number,
    messageFieldTop: PropTypes.number,
  }

  state={
    name: '',
    email: '',
    message: ''
  }

  handleInputChange= (e) => {
    const targetName = e.target.name
    const targetValue = e.target.value

    // this.setState((state)=>{
    //   state[targetName] = targetValue //doesn't trigger a re-render ?
    // },()=>{console.log(targetName,this.state[targetName])})

    this.setState({
      ...this.state,
      [targetName]: targetValue
    })

  }

  render() {
    const {
      contactRef, defaultTheme,
      height,
      contactHeadlineTop,
      nameFieldTop,
      emailFieldTop,
      messageFieldTop 
    } = this.props
    const {
      name, email, message, 
    } = this.state

    return (
      <ContactContainer ref={contactRef}>
        <ContactHeader 
          defaultTheme={defaultTheme} height={height}
          contactHeadlineTop={contactHeadlineTop}>
          Say hello<span>.</span>
        </ContactHeader>
        <ContactForm name='contact' netlify method='post'>
          <input type='hidden' name='form-name' value='contact' />
          <InputContainer>
            <NameAndEmail>
              <NameBox defaultTheme={defaultTheme} nameFieldTop={nameFieldTop} height={height}>
                <span />
                <UserInput 
                  defaultTheme={defaultTheme} 
                  type='text' required 
                  autoComplete='off'
                  id='name'
                  name='name'
                  className='userInput'
                  onChange={(e)=>this.handleInputChange(e)} 
                />
                <NameLabel 
                  defaultTheme={defaultTheme} 
                  htmlFor='name'
                  nameFieldTop={nameFieldTop} height={height}
                  className={`inputLabel ${name!=='' ? 'notEmpty-label' : ''}`}>
                  <span>Name</span>
                </NameLabel>
              </NameBox>

              <EmailBox defaultTheme={defaultTheme} nameFieldTop={nameFieldTop} emailFieldTop={emailFieldTop} height={height}>
                <span />
                <UserInput 
                  defaultTheme={defaultTheme} 
                  type='text' required 
                  autoComplete='off'
                  id='email'
                  name='email'
                  className='userInput'
                  onChange={(e)=>this.handleInputChange(e)} 
                />
                <EmailLabel 
                  defaultTheme={defaultTheme} 
                  htmlFor='email'
                  nameFieldTop={nameFieldTop} emailFieldTop={emailFieldTop} height={height}
                  className={`inputLabel ${email!=='' ? 'notEmpty-label' : ''}`}>
                  <span>Email</span>
                </EmailLabel>
              </EmailBox>
            </NameAndEmail>

            <MessageBox defaultTheme={defaultTheme} messageFieldTop={messageFieldTop} height={height}>
              <span />
              <Message 
                defaultTheme={defaultTheme}
                required
                id='message'
                name='message'
                className='message'
                onChange={(e)=>this.handleInputChange(e)} 
              />
              <MessageLabel 
                defaultTheme={defaultTheme}
                htmlFor='message'
                messageFieldTop={messageFieldTop} height={height}
                className={`messageLabel ${message!=='' ? 'notEmpty-messageLabel' : ''}`}>
                <span>Message</span>
              </MessageLabel>
            </MessageBox>

          </InputContainer>
          <SubmitBtnWrapper messageFieldTop={messageFieldTop} height={height}>
            <SubmitBtn 
              type='submit' title='Send Message'>
              <span>Send</span>
            </SubmitBtn>
          </SubmitBtnWrapper>
        </ContactForm>

      </ContactContainer>
    )
  }
}

export default hot(module)(Contact)