import styled from "styled-components";

export const RankingScreen = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  color: white;
`

export const RankingTitle = styled.div`
  position: absolute;
  background: ${props => props.theme.purple};
  text-align: center;
  width: 100%;
  top: 0;
  border-radius: 2px;
  padding: 9px 20px;
  font-size: 20px;
  color: white;
  font-weight: 200;
  letter-spacing: 1px;
`

export const RankingContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const RankingLabels = styled.div`
/* outline: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  div {
    font-size: 12px;
    letter-spacing: 1px;
  }

  div:nth-of-type(2) {
    width: 80px;
  }
`

export const RankingCrypto = styled.div`
  padding: 5px 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  width: 100%;
`

export const RankingIndex = styled.p`
  font-size: 16px;
  font-weight: 400;
  padding: 0 10px;
  margin-right: 10px;
`

export const CryptoImg = styled.img`
  width: 26px;
  margin-right: 10px;
`

export const CryptoInfo = styled.div`
  width: 160px; 
`

export const CryptoName = styled.p`
  font-size: 16px;
  font-weight: 400;
`

export const CryptoTag = styled.p`
  font-size: 14px;
  font-weight: 200;
`

export const CryptoApiInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    font-size: 14px;
    font-weight: 200;
  }
`

export const CryptoPrice = styled.p`
  width: 100px;
  text-align: center;
`

export const CryptoCap = styled.p`
  width: 100px;
  text-align: center;
  margin-right: 5px;
`

export const CryptoSupply = styled.p`
  width: 100px;
  text-align: center;
`

export const CryptoChange = styled.p`
  width: 90px;
  text-align: center;
`