import React from "react";
import styled from "styled-components";
import NavBurger from "./NavBurger";

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-block: 10px;
  z-index: 2;
  &.active {
  background: linear-gradient(130deg, rgba(0, 0, 0, 0.9), #17daa3de);
  @media (max-width: 1090px) {
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 3px 24px -9px rgba(66, 68, 90, 1);
    position: fixed;
  }
  };

  .logo {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.white};
    padding-left: 30px;
    z-index: 1;
    span {
      color:${({ theme }) => theme.colors.detailGreen};
    }
    @media screen and (max-width: 1090px) {
      padding: 0 20px;
      &.black {
        color: black;
      }
    }
  }
`

const Navbar = ({action, pages}) => {

  return (
    <Nav>
      <NavBurger action={action} pages={pages} />
    </Nav>
  );
};

export default Navbar;