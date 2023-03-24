import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  padding-block: 30px;
  justify-content: space-between;
  background-position-y: 55%;
  background-size: cover;
  margin-left: 30px;
  h2 {
    font-family: 'Audiowide', cursive;
  }
  h3 {
    color: black;
    &.subHeader {
      color: ${({ theme }) => theme.colors.detailBlue};
    }
  }
  @media screen and (max-width: 820px) {
    flex-direction: column;
    padding-bottom: 0;
    margin-inline: 0;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 820px) {
    display: none;
  }
`;

const Header = styled.div`
  margin-block: 30px;
`;

export default { Header, LogoWrapper, HeaderWrapper };