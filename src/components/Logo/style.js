import styled from "styled-components";

export const LogoContainer = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  width: fit-content;
  padding: 3px 12px 7px 12px;
  cursor: pointer;
  transition: .2s ease;

  &:hover {
    box-shadow: 0 0 16px rgba(255, 255, 255, 0.2);
  }

  h1 {
    color: white;
    font-size: 30px;
    font-weight: 200;
  }
`