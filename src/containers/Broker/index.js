import React from 'react'
import BrokerMenu from './BrokerMenu'
import BrokerView from './BrokerView'

import {
  BrokerContainer,
  BrokerContainerBg,
  BrokerPanel
} from './style'

const Broker = ({theme}) => {  
  return (
    <BrokerContainer theme={theme}>
      <BrokerContainerBg></BrokerContainerBg>
      <BrokerPanel theme={theme}>
        <BrokerMenu theme={theme} />
        <BrokerView theme={theme} />
      </BrokerPanel>
    </BrokerContainer>
  )
}

export default Broker