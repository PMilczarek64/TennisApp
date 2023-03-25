import styled from "styled-components";

export const ColumnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  h3 {
    color: black;
  }
  p {
    padding-inline: 50px;
  }
  @media (max-width: 1110px){
    box-shadow: none;
  }
  @media (max-width: 1110px) {
    box-shadow: none;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 20px;
  padding-inline: 50px;
  display: flex;
  justify-content: space-between;
  .react-datepicker {
    box-shadow: 12px 12px 24px -22px ${({ theme }) => theme.colors.darkGrey};
    border: 1px solid ${({ theme }) => theme.colors.strongFaded};
    .react-datepicker__header {
      background-color: ${({ theme }) => theme.colors.detailGreen};
      border-color: ${({ theme }) => theme.colors.detailGreen};
    }
    .react-datepicker__navigation {
      color: white;
    }
    .react-datepicker__day--selected {
      background-color: #fcffe5;
      color: black;
      border: 1px solid ${({ theme }) => theme.colors.detailGreen};
      border-radius: 50%;
    }
  }
  @media screen and (max-width: 920px) {
    flex-direction: column;
    align-items: center;
    padding-inline: 0px;
    .react-datepicker {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 520px) {
    .react-datepicker {
      transform: scale(1.37);
      margin-block: 60px;
    }
  }
`;