import styled from "styled-components";
import bgImage from '../../assets/bg_crypto.jpg'

export const BrokerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;
  background: ${props => props.theme.purple};
`

export const BrokerContainerBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.15)), url(${bgImage});
  background-position: center;
  background-size: cover;
  opacity: 0.08;
`

export const BrokerPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.black};
  padding: 15px;
  border-radius: 5px; 
  z-index: 12;
`