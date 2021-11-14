import React from 'react'
import References from '../../components/References'

import {
  FooterContainer
} from './style'

const Footer = ({theme}) => {
  return (
    <FooterContainer theme={theme}>
      <References />
    </FooterContainer>
  )
}

export default Footer
