import React from 'react'
import PropTypes from 'prop-types'
import { MenuButtonContainer, MenuButtonLine } from './styles'

const MenuButton = ({ defaultTheme, handleMenu })=> {

  return(
    <MenuButtonContainer onClick={()=>{handleMenu(true)}}>
      <MenuButtonLine defaultTheme={defaultTheme} />
      <MenuButtonLine />
      <MenuButtonLine defaultTheme={defaultTheme} />
    </MenuButtonContainer>
  )
}

MenuButton.propTypes = {
  defaultTheme: PropTypes.bool,
  handleMenu: PropTypes.func
}

export default MenuButton