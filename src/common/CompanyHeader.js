import React from "react";
import { Logo } from "../views/Home";
import { CompanyLogo } from "./CompanyLogo";
import styled from "styled-components";
import LogoImage from "../assets/images/Tennis.png";

const HeaderWrapper = styled.div`
  display: flex;
  margin-left: 30px;
  padding-block: 30px;
  justify-content: space-between;
  background-position-y: 30%;
  background-size: cover;
  h2 {
    color: #026592;
  }
  h3 {
    color: black;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  margin-block: 30px;
`;

const CompanyHeader = ({ logo, name, subHeader }) => {
  console.log("logo in header test ", logo);
  return (
    <HeaderWrapper>
      <CompanyLogo>
        <img src={`/logos/${logo}`}></img>
      </CompanyLogo>
      <Header>
        <h2>{name}</h2>
        <h3>{subHeader}</h3>
      </Header>
      <LogoWrapper>
        <Logo>
          <h3>TENNIS MOTION</h3>
          <img src={LogoImage} alt="logo"></img>
        </Logo>
      </LogoWrapper>
    </HeaderWrapper>
  );
};

export default CompanyHeader;