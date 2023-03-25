import styled from "styled-components";

export const Table = styled.table`
  width: 90%;
  background: linear-gradient(90deg, #ddff00 0%, rgb(255, 231, 76) 100%);
  box-shadow: 12px 12px 24px -18px ${({ theme }) => theme.colors.darkGrey};
  margin-left: 20px;
  &.red {
    background: linear-gradient(90deg, rgb(247, 200, 200), rgb(255, 141, 141));
  }
  td,
  th {
    padding: 15px;
    font-weight: 800;
    background-color: white;
    width: 25%;
    &.free {
      color: ${({ theme }) => theme.colors.darkGrey};
      cursor: pointer;
    }
    &.busy {
      flex-grow: 2;
      color: white;
      cursor: not-allowed;
      background: linear-gradient(
        90deg,
        rgb(247, 200, 200),
        rgb(255, 141, 141)
      );
    }
    &.hour {
      opacity: 0.9;
    }
    &.header {
      color: white;
      font-weight: 800;
      font-size: 24px;
      background: transparent;
      @media screen and (max-width: 450px) {
        display: flex row;
        justify-content: flex-start;
        align-items: flex-start;
      }
    }
    &.busyByYou {
      background: linear-gradient(70deg, transparent, rgb(255, 255, 255));
      color: rgba(156, 202, 27, 0.871);
      cursor: pointer;
    }
    :hover {
      opacity: 0.9;
    }
    @media screen and (max-width: 920px) {
      padding: 15px 5px;
    }
    @media screen and (max-width: 620px) {
      height: 38px;
    }
  }
  @media screen and (max-width: 920px) {
    margin-left: 0;
  }
`;