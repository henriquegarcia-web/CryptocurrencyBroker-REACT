import React from 'react'
import BrokerMenu from './BrokerMenu'
import BrokerView from './BrokerView'

import {
  BrokerContainer
} from './style'

const Broker = () => {

  const theme = {
    bgColor: '#16122E'
  }
  
  return (
    <BrokerContainer theme={theme}>
      <BrokerMenu />
      <BrokerView />
    </BrokerContainer>
  )
}

export default Broker