import React from 'react'
import Logo from '../../components/Logo'

import {
  HeaderContainer
} from './style'

const Header = () => {

  const theme = {
    bgColor: '#16122E'
  }

  return (
    <HeaderContainer theme={theme}>
      <Logo />
    </HeaderContainer>
  )
}

export default Header