// import LogoImage from "../../assets/images/Tennis.png";
import styled from "styled-components";
import LogoImage from "../assets/images/Tennis.png" 


import React from "react";

export const Logo = styled.div`
  max-height: 100px;
  padding-left: 30px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  object-fit: cover;
  width: 220px;
  height: 200px;
  img {
    max-height: 100%;
    transform: translate(-40%, -15%);
  }
  .dark {
      color: black;
  }
`;


const TennisMotionLogo = ({dark, isNav}) => {
  return (
      <Logo className={dark && "dark" }>
          <h3>TENNIS MOTION</h3>
          <img src={LogoImage} alt="logo"></img>
      </Logo>
  );
};

export default TennisMotionLogo;