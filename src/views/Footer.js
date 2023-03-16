import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../assets/images/Tennis.png";

const Container = styled.div`
  height: 25vh;
  width: 100%;
  background-image: url(${LogoImage});
  background-size: 45%;
  background-position-x: center;
  background-position-y: top;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
  @media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    background-position-y: 25px;
    background-position-x: 80%;
  }
  @media (max-width: 820px) {
    background-position-y: 50px;
    background-position-x: 110%;
  }
`;

const Left = styled.div`
  padding: 40px 80px;
  max-width: 330px;
  text-align: left;
  i {
    padding: 0 8px 8px 0;
    font-size: 26px;
    color: ${({ theme }) => theme.colors.detailGreen};
  }
  @media (max-width: 820px) {
    padding: 20px 0;
  }
`;

const Right = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row;
  padding: 40px 80px;
  a {
    color: black;
    margin: 10px;
  }
  @media (max-width: 1160px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 820px) {
    padding: 20px 0;
    display: none;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <i className="fa fa-copyright" aria-hidden="true"></i>
        All Rights Reserved by Patryk Milczarek by tennismotion.com
      </Left>
      <Right>
        <li>
        <NavLink to="/">Book a court</NavLink>
        </li>
        <li>
          <NavLink to="/findapartner">Find a partner</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </Right>
    </Container>
  );
};

export default Footer;
