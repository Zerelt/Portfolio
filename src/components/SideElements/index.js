import { hot } from 'react-hot-loader'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MobileMenu from './MobileMenu'
import MenuButton from './MenuButton'
import SideBar from './SideBar';

import { SideElementsContainer } from './styles'

const SideElements = ({ defaultTheme, currentPage, handleNavClick, width }) => {
  const [menuOpen, handleMenu] = useState(false)

  return(
    <SideElementsContainer>
      <MenuButton 
        defaultTheme={defaultTheme} 
        handleMenu={handleMenu} 
      />
      <MobileMenu 
        defaultTheme={defaultTheme}
        currentPage={currentPage} 
        menuOpen={menuOpen} 
        handleMenu={handleMenu} 
        width={width}
        handleNavClick={handleNavClick} 
      />
      <SideBar 
        defaultTheme={defaultTheme} 
        currentPage={currentPage} 
        handleNavClick={handleNavClick} 
      />
    </SideElementsContainer>
  )
}

SideElements.propTypes = {
  defaultTheme: PropTypes.bool,
  currentPage: PropTypes.string,
  handleNavClick: PropTypes.func,
  width: PropTypes.number
}

export default hot(module)(SideElements)