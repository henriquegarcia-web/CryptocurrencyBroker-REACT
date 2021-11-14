import React from 'react'

import {
  BrokerMenuContainer,
  RankingButton,
  CryptoList,
  CryptoContainer,
  CryptoImg
} from './style'


import { MainCryptosData } from '../../../data/MainCryptosData'

const BrokerMenu = ({theme}) => {
  return (
    <BrokerMenuContainer theme={theme}>
      <RankingButton theme={theme}>
        Ranking
      </RankingButton>

      <CryptoList theme={theme}>

        <p>Principais Moedas</p>

        {MainCryptosData.map(({id, asset, title}) => {
          return (
            <CryptoContainer theme={theme} key={id}>
              <CryptoImg src={asset}/>
              <p>{title}</p>
            </CryptoContainer>
          )
        })}

      </CryptoList>
    </BrokerMenuContainer>
  )
}

export default BrokerMenu
