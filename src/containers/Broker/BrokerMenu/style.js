import styled from "styled-components";

export const BrokerMenuContainer = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  width: 250px;
  /* padding: 10px; */
`

export const RankingButton = styled.button`
  width: 100%;
  color: white;
  background: ${props => props.theme.purple};
  border-radius: 5px;
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 12px;
  cursor: pointer;
  transition: .2s ease;
  margin-bottom: 10px;

  &:hover {
    opacity: 0.9;
  }
`

export const CryptoList = styled.div`
  width: 100%;
  padding: 10px;

  p {
    color: white;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 1px;
    text-align: center;
    padding: 6px 0;
  }
`

export const CryptoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1.6px solid rgba(255, 255, 255, 0.12);
  border-radius: 5px;
  margin: 10px 0;
  padding: 8px 10px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    border: 1.6px solid rgba(255, 255, 255, 0.3);
  }

  &:hover img {
    opacity: 1;
  } 
  
  &:hover p {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }

  p {
    font-size: 14px;
    letter-spacing: 2px;
  }
`

export const CryptoImg = styled.img`
  width: 28px;
  opacity: 0.8;
  margin-right: 12px;
  transition: 0.2s ease;
`