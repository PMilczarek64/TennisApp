import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  h4 {
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.detailBlue};
  }
  @media (max-width: 1110px){
    box-shadow: none;
  }
`;

export const MainInfoWrapper = styled.div`
  display: flex;
  padding-block: 20px;
  flex-direction: row;
  justify-content: space-between;
  padding-inline: 50px;
  @media screen and (max-width: 670px){
    flex-direction: column;
    align-items: center;
    padding-block: 0;
  }
  @media screen and (max-width: 460px){
    padding: 0;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 670px){
    align-items: center;
    margin: 25px;
  }
`;

export const ObjectDescription = styled.div`
  padding-inline: 50px;
`;

export const DetailLine = styled.span`
  margin-inline: 50px;
  margin-block: 20px;
  height: 3px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.strongFaded};
  &.first {
    margin-top: 0;
  }
  &.mobile {
    width: 130px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.strongfaded};
    @media screen and (min-width: 670px){
      display: none;
    }
  }
  @media screen and (max-width: 460px){
    margin-inline: 0;
  }
`;
