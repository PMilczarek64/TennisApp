import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  margin-left: 30px;
  padding-block: 30px;
  justify-content: space-between;
  background-position-y: 30%;
  background-size: cover;
  h2 {
    color: ${({ theme }) => theme.colors.detailBlue};
  }
  h3 {
    color: black;
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
  .zi2 {
    z-index: 0;
  }
  @media screen and (max-width: 820px) {
    display: none;
  }
`;

const Header = styled.div`
  margin-block: 30px;
`;

export default { Header, LogoWrapper, HeaderWrapper};