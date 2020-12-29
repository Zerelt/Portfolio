import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'
import { SideBarContainer, Line } from './styles'

const SideBar = ({ defaultTheme, currentPage, handleNavClick })=> {
  return (
    <SideBarContainer>
      <Line 
        onClick={()=>handleNavClick('home')}
        defaultTheme={defaultTheme} 
        pageVisible={currentPage==='home'}>
        <span>home</span>
      </Line>
      <Line 
        onClick={()=>handleNavClick('about')}
        defaultTheme={defaultTheme} 
        pageVisible={currentPage==='about'}>
        <span>about</span>
      </Line>
      <Line 
        onClick={()=>handleNavClick('code')}
        defaultTheme={defaultTheme} 
        pageVisible={currentPage==='code'}>
        <span>code</span>
      </Line>
      <Line 
        onClick={()=>handleNavClick('designs')}
        defaultTheme={defaultTheme} 
        pageVisible={currentPage==='designs'}>
        <span>design</span>
      </Line>
      <Line 
        onClick={()=>handleNavClick('contact')}
        defaultTheme={defaultTheme} 
        pageVisible={currentPage==='contact'}>
        <span>contact</span>
      </Line>
    </SideBarContainer>
  )
}

SideBar.propTypes = {
  defaultTheme: PropTypes.bool,
  currentPage: PropTypes.string,
  handleNavClick: PropTypes.func
}

export default hot(module)(SideBar)