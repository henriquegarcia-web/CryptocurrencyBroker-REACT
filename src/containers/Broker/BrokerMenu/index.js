import React from 'react'

import {
  BrokerMenuContainer,
  RankingButton,
  CryptoList,
  CryptoContainer,
  CryptoImg
} from './style'


import { MainCryptosData } from '../../../data/MainCryptosData'

const BrokerMenu = () => {

  const theme = {
    bgColor: '#16122E',
    bgHover: '#1b1733'
  }

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
