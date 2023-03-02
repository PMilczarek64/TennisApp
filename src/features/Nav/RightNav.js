import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getLoggingInInfo, setLoggedIn } from "../../Redux/usersRedux";
import styled from "styled-components";
import Ball from "../../assets/images/Ball.png";

const Ul = styled.ul`
position: fixed;
  list-style: none;
  display: flex;
  flex-flow: row;
  background-color: rgba(0, 0, 0, 0.719);
  height: 50px;
  z-index: 2;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  li {
    display: flex;
    max-height: 100%;
    align-items: center;
    justify-content: center;
    padding-inline: 15px;
    list-style: none;
    font-size: 20px;
    font-weight: 500;
    border-right: solid 1px rgba(0, 0, 0, 0.122);
    color: white;
    cursor: pointer;
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

  @media (max-width: 1090px) {
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.colors.detailBlue};
    text-align: start;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100%;
    width: 350px;
    opacity: 0.95;
    transition: transform 0.3s ease-in-out;
    justify-content: center;
    border-radius: 0;
    li {
      color: white;
      font-size: ${({ theme }) => theme.fontSize.l};
      padding-left: 30px;
      padding-block: 30px;
    }
  }
  @media (max-width: 600px) {
    width: 60%;
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

const RightNav = ({ open, action, pages }) => {
  const userIsLogged = useSelector(getLoggingInInfo);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(setLoggedIn({ setLogged: false, name: userIsLogged.userName }));
  };
  const navigate = useNavigate();

  const handleLogin = () => {
    action(pages.content);
    navigate('/login', {
      state: {
        previousUrl: '/',
      }
    })
  };

  return (
    <Ul open={open}>
      <li>
        <Link to="/" onClick={() => action(pages.home)}>
          <img src={Ball} alt="ball"></img>
        </Link>
      </li>
      <li>
        <NavLink to="/" onClick={() => action(pages.content)}>
          Book a court
        </NavLink>
      </li>
      <li>
        <NavLink to="/findapartner" onClick={() => action(pages.content)}>
          Find a partner
        </NavLink>
      </li>
      <li>Contact</li>
      {userIsLogged === undefined ? (
        <li
        onClick={handleLogin}>
        Login <NavIcon className="fa fa-sign-in" />
        </li>
      ) : (
        <>
          <li>
            <NavLink
              to={"/myaccount/" + userIsLogged.id}
              onClick={() => action(pages.content)}
            >
              My account
            </NavLink>
          </li>
          <li onClick={logOut}>
            <NavLink to="/">
              {"Log Out"}
              <NavIcon className="fa fa-power-off" />
            </NavLink>
          </li>
        </>
      )}
    </Ul>
  );
};

export default RightNav;
