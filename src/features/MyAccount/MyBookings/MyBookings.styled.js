import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 50px 50px 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    margin-inline: 0px;
  }
`;

export const CardsWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: stretch;
  align-items: flex-start;
  @media (max-width: 600px) {
    margin-inline: 0px;
  }
`;

export const Card = styled.div`
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