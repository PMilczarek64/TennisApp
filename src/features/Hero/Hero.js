import React from "react";
import {Container, Header, TopHeader} from "./Hero.styled"
import Navbar from "../Nav/Navbar";
import TennisMotionLogo from "../../common/TennisMotionLogo";
import { useState, useEffect,  } from "react";

const Hero = ({action, pages, passedRef}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollStatus = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScrollStatus);

  return (
    <Container ref={passedRef}> 
      <Header>
        <TopHeader isScrolled={isScrolled}>
          <TennisMotionLogo isNav isScrolled={isScrolled} />
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