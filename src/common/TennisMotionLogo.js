// import LogoImage from "../../assets/images/Tennis.png";
import styled from "styled-components";
import LogoImage from "../assets/images/Tennis.png";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Logo = styled.div`
top: 0;
  width: 170px;
  height: 140px;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &.active {
    transition: 0.15s ease-in-out;
    transform: scale(0.5);
    left: -50px;
    background: rgba(0, 0, 0, 0.719);
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    @media (max-width: 1200px) {
      transform: translate(-8%, -29%) scale(0.35);
    }
  }

  img {
    margin-left: 3px;
    ;
    max-height: 100px;
    transform: translate(-40%, -15%);
  }
  .dark {
    color: black;
  }
  &.is-nav {
    margin-top: 10px;
    z-index: 3;
    cursor: pointer;
    position: fixed;
  }
`;

const TennisMotionLogo = ({ dark, isNav, isDark, isScrolled }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Logo
      className={`${dark && "dark"} ${isNav && "is-nav"} ${
        isScrolled && "active"
      }`}
      onClick={isNav && handleClick}
      isDark={isDark}
    >
      <h3>TENNIS MOTION</h3>
      <img src={LogoImage} alt="logo"></img>
    </Logo>
  );
};

export default TennisMotionLogo;
