import styled from "styled-components";

export const BrokerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  width: 240px;
  border: 2px solid ${props => props.theme.bgColor};
  border-radius: 5px;
  padding: 10px;
`

export const RankingButton = styled.button`
  width: 100%;
  color: white;
  background: ${props => props.theme.bgColor};
  border-radius: 5px;
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 12px;
  cursor: pointer;
  transition: .3s ease;
  margin-bottom: 10px;

  &:hover {
    background: ${props => props.theme.bgHover};
    box-shadow: inset 0 0 20px 0px ${props => props.theme.bgColor};
  }
`

export const CryptoList = styled.div`
  width: 100%;
  background: ${props => props.theme.bgColor};
  border-radius: 5px;
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
  background: ${props => props.theme.bgHover};
  border: 1.4px solid ${props => props.theme.bgHover};
  border-radius: 5px;
  margin: 10px 0;
  padding: 8px 10px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    border: 1.4px solid rgba(255, 255, 255, 0.1)
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