import styled from "styled-components";

export const CompanyLogo = styled.div`
  margin-inline: 20px;
  min-width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100px;
    &.help {
      filter: invert(32%) sepia(93%) saturate(1352%) hue-rotate(67deg) brightness(219%) contrast(119%);
      height: 50px;
      :hover {
        cursor: pointer;
        transform: scale(1.15);
        transition: 0.2s ease-in-out;
      }
    }
  }
  @media screen and (max-width: 770px) {
    margin-inline: 0;
  }
`;