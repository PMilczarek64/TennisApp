import React from "react";
import TennisMotionLogo from "../TennisMotionLogo";
import { CompanyLogo } from "../CompanyLogo";
import  { HeaderWrapper, Header, LogoWrapper,  } from "./CompanyHeader.styled";

const CompanyHeader = ({ logo, name, subHeader }) => {
  console.log("logo in header test ", logo);
  return (
    <HeaderWrapper>
      <CompanyLogo>
        <img src={`/logos/${logo}`} alt={name}></img>
      </CompanyLogo>
      <Header>
        <h2>{name}</h2>
        <h3 className="subHeader">{subHeader}</h3>
      </Header>
      <LogoWrapper>
        <TennisMotionLogo  />
      </LogoWrapper>
    </HeaderWrapper>
  );
};

export default CompanyHeader;
