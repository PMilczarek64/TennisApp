import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  min-height: 120px;
  margin: 20px;
  padding: 30px;
  border: solid 1px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h4 {
    color: black;
    font-size: 32px;
  }
  p {
    color: black;
  }
  :hover {
    cursor: pointer;
    transition: 0.4s ease-in-out;
    background-color: black;
    h4 {
      color: ${({ theme }) => theme.colors.detailGreen};
    }
    p {
      color: white;
    }
  }
`;
