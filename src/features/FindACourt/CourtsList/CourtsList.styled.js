import styled from "styled-components";

export const List = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-left: 2px solid;
  border-color: ${({ theme }) => theme.colors.strongFaded};
  p {
    color: black;
  }
  @media screen and (max-width: 770px) {
    border: none;
    width: 90%;
    padding: 20px;
  }
`;