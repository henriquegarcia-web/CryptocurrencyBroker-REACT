import styled from "styled-components";

export const BrokerViewContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  width: 600px;
  border: 2px solid ${props => props.theme.purple};
  border-radius: 5px;
  margin-left: 10px;
`

export const ViewContainerBg = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background: ${props => props.theme.purple};
  opacity: 0.08;
`