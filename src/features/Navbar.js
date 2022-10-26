import React from "react";
import styled from "styled-components";
import Ball from '../assets/images/Ball.png';
import { Link, NavLink } from 'react-router-dom';

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
    justify-content: center;
    padding-inline: 20px;
    list-style: none;
    font-size: 21px;
    border-right: solid 1px rgba(0, 0, 0, 0.122);
    :last-child {
      margin-right: 80px;
    }
    a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
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
        <li><Link to="/" ><img src={Ball}></img></Link></li>
        <li><NavLink to="/courts">Book a court</NavLink></li>
        <li>Trainers</li>
        <li>Find a partner</li>
        <li>Blog</li>
        <li>Contact</li>
      </Ul>
    </Wrapper>
  );
};

export default Navbar;