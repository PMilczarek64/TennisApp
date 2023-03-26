import styled from "styled-components";

export const Bar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 100%;
  color: black;
  position: relative;
  align-items: center;
  justify-content: center;
  i {
    color: #4169e1;
  }
`;

export const Inputs = styled.div`
  width: 60%;
  display: flex;
  margin: 20px;
  justify-content: space-around;
  input {
    max-width: 30%;
  }
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    input {
      max-width: 70%;
      margin: 5px;
    }
  }
  @media (max-width: 450px) {
    input {
      transform: scale(1.4);
      margin: 15px;
    }
  }
`;