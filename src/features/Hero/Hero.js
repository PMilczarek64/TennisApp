import React from "react";
import {Container, Header, TopHeader} from "./Hero.styled"
import Navbar from "../Nav/Navbar";
import { useNavigate } from "react-router-dom";
import TennisMotionLogo from "../../common/TennisMotionLogo";



const Hero = ({passedRef, action, pages}) => {
  const navigate = useNavigate();
  return (
    <Container ref={passedRef}>
      <Header>
        <TopHeader>
          <TennisMotionLogo onClick={() => navigate('/')} />
          <Navbar action={action} pages={pages}/>
        </TopHeader>
          <span className="left"><h3>BOOK A COURT, TRAININGS, BLOG</h3></span>
          <span className="left2"><h1>Create our society!</h1></span>
          <span className="right"><h2>Play tennis <i className="fa fa-play" aria-hidden="true"></i></h2></span>
      </Header>
    </Container>
  );
};

export default Hero;