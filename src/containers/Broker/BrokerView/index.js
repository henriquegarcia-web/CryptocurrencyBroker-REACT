import React from 'react'

import {
  BrokerViewContainer,
  ViewContainerBg,
} from './style'

const BrokerView = ({theme}) => {
  return (
    <BrokerViewContainer theme={theme}>
      <ViewContainerBg theme={theme}></ViewContainerBg>
    </BrokerViewContainer>
  )
}

export default BrokerView
