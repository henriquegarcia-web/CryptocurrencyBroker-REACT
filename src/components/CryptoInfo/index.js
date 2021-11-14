import React from 'react'

import {
  InfoScreen,
  InfoTitle,
  InfoData,
  InfoBasic,
  InfoMain,
  InfoPrice,
  Info,
  InfoContainer,
  InfoChart,
  ChartInfo,
  ChartContainer,
  ChangePrice
} from './style'

import BitcoinIcon from '../../assets/btc.png'
import Chart from '../../components/Chart'

const CryptoInfo = ({theme}) => {
  return (
    <InfoScreen theme={theme} >
      <InfoTitle theme={theme}>Bitcoin (BTC)</InfoTitle>

      <InfoData>

        <InfoBasic theme={theme}>
          <img src={BitcoinIcon} />
          <h2>Bitcoin</h2>
          <h3>(BTC)</h3>
        </InfoBasic>

        <InfoMain>
          <Info>
            <InfoContainer theme={theme}>
              <h2>Supply</h2>
              <p>18.87m BTC</p>
            </InfoContainer>

            <InfoContainer theme={theme}>
              <h2>Market Cap</h2>
              <p>182.87b</p>
            </InfoContainer>

            <InfoContainer theme={theme}>
              <h2>Volume</h2>
              <p>$16d.11b</p>
            </InfoContainer>
          </Info>
          <InfoPrice theme={theme}>
            Current Price
            <h2>$65,523.03</h2>
            <p>+0.80%</p>
          </InfoPrice>
        </InfoMain>

        <InfoChart>
          <ChartContainer>
            <Chart />
          </ChartContainer>
          <ChartInfo>
            <InfoContainer theme={theme}>
              <h2>Máxima</h2>
              <p>31.8787879</p>
            </InfoContainer>

            <InfoContainer theme={theme}>
              <h2>Atual</h2>
              <p>31.8787879</p>
            </InfoContainer>

            <InfoContainer theme={theme}>
              <h2>Mínima</h2>
              <p>31.8787879</p>
            </InfoContainer>

            <ChangePrice>
              <p>+0.8% <i class="fas fa-caret-up"></i></p>
              
            </ChangePrice>
          </ChartInfo>
        </InfoChart>

      </InfoData>
    </InfoScreen>
  )
}

export default CryptoInfo
