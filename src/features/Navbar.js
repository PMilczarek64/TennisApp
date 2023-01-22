import React from "react";
import styled from "styled-components";
import Ball from '../assets/images/Ball.png';
import { Link, NavLink } from 'react-router-dom';
import { getLoggingInInfo } from "../Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedIn } from "../Redux/store";

const Wrapper = styled.div`
  height: 50px;
  @media screen and (max-width: 1030px){
    display: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.719);
  
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
    font-size: 20px;
    font-weight: 500;
    border-right: solid 1px rgba(0, 0, 0, 0.122);
    color: white;
    :first-child {
      filter: blur(0.3px);
      :hover {
        transform: rotate(360deg);
        transition: 0.3s ease-in-out;
      }
    }
    :last-child {
      margin-right: 10px;
    }
    a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.15s ease-in-out;
      color: white;
    }
    :hover {
        .fa-sign-in {
          color: ${({ theme }) => theme.colors.detailGreen};
          transition: 0.2s ease-in-out;
        }
        .fa-power-off {
          color: orangered;
          transition: 0.2s ease-in-out;
        }
      }
    img {
      object-fit: cover;
      max-height: 30px;
      width: 30px;
    }
  }
`;

const NavIcon = styled.div`
  height: 25px;
  width: 25px;
  font-size: 23px;
  margin-inline: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  :hover {
    color: ${({ theme }) => theme.colors.detailGreen};
  }
`;

const Navbar = () => {
  const userIsLogged = useSelector(getLoggingInInfo);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(setLoggedIn({ setLogged: false, name: userIsLogged.userName }));
  }
  return (
    <Wrapper>
      <Ul>
        <li><Link to="/" ><img src={Ball}></img></Link></li>
        <li><NavLink to="/">Book a court</NavLink></li>
        <li>Find a partner</li>
        <li>Blog</li>
        <li>Contact</li>
        {userIsLogged === undefined ?
          <li><NavLink to="/login">Login  <NavIcon className="fa fa-sign-in"/></NavLink></li>
          :
          <>
            <li><NavLink to={'/myaccount/' + userIsLogged.id}>My account</NavLink></li>
            <li onClick={logOut}><NavLink to="/">{'Log Out'}<NavIcon className="fa fa-power-off"/></NavLink></li>
          </>
        }
      </Ul>
    </Wrapper>
  );
};

export default Navbar;