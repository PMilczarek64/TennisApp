import React from "react";
import { Logo } from "../../views/Home";
import { CompanyLogo } from "../CompanyLogo";
import LogoImage from "../../assets/images/Tennis.png";
import Styled from './CompanyHeader.styled.js';

const CompanyHeader = ({ logo, name, subHeader }) => {
  console.log("logo in header test ", logo);
  return (
    <Styled.HeaderWrapper>
      <CompanyLogo>
        <img src={`/logos/${logo}`} alt={name}></img>
      </CompanyLogo>
      <Styled.Header>
        <h2>{name}</h2>
        <h3>{subHeader}</h3>
      </Styled.Header>
      <Styled.LogoWrapper>
        <Logo className="zi2">
          <h3>TENNIS MOTION</h3>
          <img src={LogoImage} alt="logo"></img>
        </Logo>
      </Styled.LogoWrapper>
    </Styled.HeaderWrapper>
  );
};

export default CompanyHeader;
