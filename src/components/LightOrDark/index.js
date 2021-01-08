import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'

import {
  LightOrDarkContainer,
  LightOrDarkOption
} from './styles'

const LightOrDark = ({ defaultTheme, handleTheme }) => {
  return(
    <LightOrDarkContainer>
      <LightOrDarkOption defaultTheme={defaultTheme} onClick={()=>handleTheme(false)}>
        Light
        <span />
      </LightOrDarkOption>
      <LightOrDarkOption defaultTheme={defaultTheme} onClick={()=>handleTheme(true)}>
        Dark
        <span />
      </LightOrDarkOption>
    </LightOrDarkContainer>
  )
}

LightOrDark.propTypes = {
  defaultTheme: PropTypes.bool,
  handleTheme: PropTypes.func
}

export default hot(module)(LightOrDark)