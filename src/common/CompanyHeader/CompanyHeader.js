import React from "react";
import TennisMotionLogo from "../TennisMotionLogo";
import { CompanyLogo } from "../CompanyLogo";
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
        <h3 className="subHeader">{subHeader}</h3>
      </Styled.Header>
      <Styled.LogoWrapper>
        <TennisMotionLogo  />
      </Styled.LogoWrapper>
    </Styled.HeaderWrapper>
  );
};

export default CompanyHeader;
