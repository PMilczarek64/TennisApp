import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CardsWrapper = styled.div`
  max-width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 530px) {
    padding-inline: 0;
  }
`;
