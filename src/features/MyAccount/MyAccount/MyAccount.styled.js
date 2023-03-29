import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: black;
  }
`;

export const WidgetsWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 540px){
    padding: 5px;
  }
`;

export const Widget = styled.li`
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 400px;
  border: 1px solid ${({ theme }) => theme.colors.strongFaded};
  border-radius: 10px;
  box-shadow: 12px 12px 24px -2px ${({ theme }) => theme.colors.strongFaded};
  cursor: pointer;
  @media screen and (max-width: 540px){
    flex-direction: column;
  }
`;

export const WidgetContent = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  text-align: start;
  h3 {
    color: black;
    font-size: 32px;
  }
  p {
    font-size: 19px;
  }
  @media screen and (max-width: 540px){
    text-align: center;
    h3 {
      margin-bottom: 10px;
    }
  }
`;