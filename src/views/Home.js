import React from "react";
import styled from "styled-components";
import HeaderImg from '../assets/images/Header.jpg';
import LogoImage from '../assets/images/Tennis.png';
import Navbar from "../features/Navbar";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 100%;
  margin: 0;
  padding: 0;
`;

const Header = styled.div`
  min-height: 90vh;
  max-width: 100%;
  background-image: url(${HeaderImg});
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  background-position-y: 45%;
  
 
  flex-direction: column;
  display: flex;
  overflow: hidden;
  span {
    max-width: 100%;
    margin-block: 10px;
    background-color: rgba(0, 0, 0, 0.719);
    font-weight: 100;
    color: ${({ theme }) => theme.colors.detalGreen};
    &.left {
      margin-top: 130px;
      transform: translateX(-54%);
      padding: 10px 40px 10px 50%;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      margin-bottom: 80px;
      h3 {
        color: ${({ theme }) => theme.colors.detailGreen};
      }
    }
    &.right {
      transform: translateX(77%);
      padding: 12px 50% 12px 40px;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      h2 {
        color: #026592;
      }
      i {
        font-size: 32px;
        color: ${({ theme }) => theme.colors.detailGreen};
      }
    }
    &.left2 {
      transform: translateX(-63%);
      padding: 12px 50px 12px 50%;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      margin-bottom: 75px;
    }
  }
`;

const TopHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-block: 30px;
  align-items: center;
  justify-content: space-between;
`;

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
  cursor: pointer;
  img {
    max-height: 100%;
    transform: translate(-40%, -15%);
  }
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <TopHeader>
          <Logo onClick={() => navigate('/')}>
            <h3>TENNIS MOTION</h3>
            <img src={LogoImage} alt="logo"></img>
          </Logo>
          <Navbar />
        </TopHeader>
          
          <span className="left"><h3>BOOK A COURT, TRAININGS, BLOG</h3></span>
          <span className="left2"><h1>Create our society!</h1></span>
          <span className="right"><h2>Play tennis <i class="fa fa-play" aria-hidden="true"></i></h2></span>
      </Header>
    </Container>
  );
};

export default Home;