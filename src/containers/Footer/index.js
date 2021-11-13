import React from 'react'
import References from '../../components/References'

import {
  FooterContainer
} from './style'

const Footer = () => {

  const theme = {
    bgColor: '#16122E'
  }

  return (
    <FooterContainer theme={theme}>
      <References />
    </FooterContainer>
  )
}

export default Footer
