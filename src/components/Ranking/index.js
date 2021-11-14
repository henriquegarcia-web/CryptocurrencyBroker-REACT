import React from 'react'

import {
  RankingScreen,
  RankingTitle,
  RankingContainer,
  RankingLabels,
  RankingCrypto,
  RankingIndex,
  CryptoImg,
  CryptoInfo,
  CryptoName,
  CryptoTag,
  CryptoApiInfo,
  CryptoPrice,
  CryptoCap,
  CryptoSupply,
  CryptoChange
} from './style'

import BitcoinIcon from '../../assets/btc.png'
import GetApi from '../../api/CoinCap'


const Ranking = ({theme}) => {

  let RankingData = GetApi('/assets', 'BTC', null)
  console.log(RankingData)

  return (
    <RankingScreen>
      <RankingTitle theme={theme}>Top 10 Ranking</RankingTitle>
      <RankingContainer>
        <RankingLabels>
          <div>Rank</div>
          <div>Moeda</div>
          <div>Preço</div>
          <div>Cap. de Mercado</div>
          <div>Supply</div>
          <div>Change (24h)</div>
        </RankingLabels>

        <RankingCrypto>
          <RankingIndex>1</RankingIndex>
          <CryptoImg src={BitcoinIcon} />
          <CryptoInfo>
            <CryptoName>Bitcoin</CryptoName>
            <CryptoTag>BTC</CryptoTag>
          </CryptoInfo>
          <CryptoApiInfo>
            <CryptoPrice>$64,435.51</CryptoPrice>
            <CryptoCap>$554.35b</CryptoCap>
            <CryptoSupply>300.84m</CryptoSupply>
            <CryptoChange>0.95%</CryptoChange>
          </CryptoApiInfo>
        </RankingCrypto>

      </RankingContainer>
    </RankingScreen>
  )
}

export default Ranking