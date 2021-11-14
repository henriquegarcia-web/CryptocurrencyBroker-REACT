import React from 'react'
import CryptoInfo from '../../../components/CryptoInfo'
import Ranking from '../../../components/Ranking'

import {
  BrokerViewContainer,
  ViewContainerBg,
} from './style'

const BrokerView = ({theme}) => {
  return (
    <BrokerViewContainer theme={theme}>
      <ViewContainerBg theme={theme}></ViewContainerBg>

      <Ranking theme={theme} />
      {/* <CryptoInfo theme={theme} /> */}
    </BrokerViewContainer>
  )
}

export default BrokerView
