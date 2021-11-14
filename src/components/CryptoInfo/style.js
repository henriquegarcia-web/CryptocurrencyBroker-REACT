import styled from "styled-components";

export const InfoScreen = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  color: white;
`

export const InfoTitle = styled.div`
  position: absolute;
  background: rgba(61, 24, 140, 0.5);
  border-bottom: 2px solid ${props => props.theme.purple};
  text-align: center;
  width: 100%;
  top: 0;
  padding: 9px 20px;
  font-size: 18px;
  color: white;
  font-weight: 200;
  letter-spacing: 1px;
  border-radius: 3px;
  cursor: pointer;
  transition: .2s ease;

  &:hover {
    background: rgba(61, 24, 140, 1);
  }
`

export const InfoData = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`

export const InfoBasic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0);
  margin-right: 10px;
  width: 25%;
  height: 200px;
  cursor: pointer;
  transition: .2s ease;
  background: ${props => props.theme.purple};

  img {
    width: 50px;
    margin-bottom: 10px;
    opacity: 0.8;
    transition: .2s ease;
  }

  h2 {
    font-size: 26px;
    font-weight: 200;
    letter-spacing: 1px;
  }

  h3 {
    font-size: 14px;
    font-weight: 100;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  &:hover img {
    opacity: 1;
  }
`

export const InfoMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - (25% + 10px));
  height: 200px;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: .2s ease;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
`

export const InfoPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: fit-content;
  margin-bottom: 10px;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 12px;
  text-transform: uppercase;
  padding: 10px 10px;
  border-right: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  cursor: pointer;
  transition: .2s ease;

  h2 {
    font-size: 34px;
    font-weight: 500;
    letter-spacing: 1.5px;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    padding: 5px;
    border-radius: 4px;
    background: green;
    letter-spacing: 0px;
  }

  &:hover {
    border-right: 2px solid rgba(255, 255, 255, 0.9);
  }
`

export const Info = styled.div`
  width: 210px;
`

export const ChartInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 400px);
  height: 100%;
  padding: 0 0 0 10px;

  div {
    margin: 0 0 5px 0;
  }
`

export const InfoContainer = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  padding: 10px;
  margin: 5px 0;
  transition: .2s ease;

  h2 {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 1px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    margin-left: 20px;
    padding: 5px;
    border-radius: 4px;
    background: rgba(61, 24, 140, 0.6);
    transition: .2s ease;
  }

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  &:hover p {
    background: rgba(61, 24, 140, 1);
  }
`

export const InfoChart = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100% - 210px);
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  transition: .2s ease;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
`

export const ChartContainer = styled.div`
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  width: 400px;
  height: 100%;
  cursor: pointer;
  transition: .2s ease;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`

export const ChangePrice = styled.div`
  justify-content: center;
  display: flex;

  p {
    margin-top: 20px;
    font-size: 30px;
    font-weight: 600;
    padding: 12px 16px;
    border-radius: 5px;
    background: green;
  }
`