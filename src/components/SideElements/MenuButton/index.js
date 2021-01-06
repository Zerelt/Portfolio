import React from 'react'
import PropTypes from 'prop-types'
import { MenuButtonContainer, MenuButtonLine } from './styles'

const MenuButton = ({ menuOpen, handleMenu })=> {

  return(
    <MenuButtonContainer menuOpen={menuOpen} onClick={()=>{handleMenu(!menuOpen)}}>
      <MenuButtonLine />
      <MenuButtonLine />
    </MenuButtonContainer>
  )
}

MenuButton.propTypes = {
  defaultTheme: PropTypes.bool,
  menuOpen: PropTypes.bool,
  handleMenu: PropTypes.func
}

export default MenuButton