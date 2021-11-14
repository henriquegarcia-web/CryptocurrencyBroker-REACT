import React from 'react'
import Logo from '../../components/Logo'

import {
  HeaderContainer
} from './style'

const Header = ({theme}) => {

  return (
    <HeaderContainer theme={theme}>
      <Logo />
    </HeaderContainer>
  )
}

export default Header