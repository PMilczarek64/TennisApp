import styled from "styled-components";

export const RoundedIcon = styled.div`
  min-height: 100px;
  min-width: 100px;
  margin: 25px;
  border-radius: 50%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  color: white;
  background-color: black;

  &.green {
    background: linear-gradient(90deg, greenyellow 0%, rgb(255, 231, 76) 100%);
  }
  &.blue {
    background: linear-gradient(90deg, lightBlue 0%, rgb(0, 72, 255) 100%);
  }
  &.silver {
    background: linear-gradient(90deg, grey 0%, rgb(0, 72, 255) 100%);
  }
`;