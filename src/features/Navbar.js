import React from "react";
import styled from "styled-components";
import Ball from '../assets/images/Ball.png';

const Wrapper = styled.div`
  height: 50px;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  background: linear-gradient(180deg, rgba(255,255,255,1) 2%, rgba(250,250,250,0.6306897759103641) 50%, rgba(255,255,255,1) 98%);
  height: 100%;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  overflow: hidden;
  li {
    display: flex;
    max-height: 100%;
    align-items: center;
    padding-inline: 20px;
    list-style: none;
    font-size: 21px;
    border-right: solid 1px rgba(0, 0, 0, 0.122);
    :last-child {
      margin-right: 80px;
    }
    :first-child {
      
    }
    img {
      object-fit: cover;
      max-height: 30px;
      width: 30px;
    }
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Ul>
        <li><img src={Ball}></img></li>
        <li>Book a court</li>
        <li>Trainers</li>
        <li>Find a partner</li>
        <li>Blog</li>
        <li>Contact</li>
      </Ul>
    </Wrapper>
  );
};

export default Navbar;