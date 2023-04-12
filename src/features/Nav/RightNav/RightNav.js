import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getLoggingInInfo, setLoggedIn } from "../../../Redux/usersRedux";
import Ball from "../../../assets/images/Ball.png";
import { Ul, NavIcon } from "./RightNav.styled";

const RightNav = ({ open, setOpen, action, pages }) => {
  const userIsLogged = useSelector(getLoggingInInfo);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(setLoggedIn({ setLogged: false, name: userIsLogged.userName }));
  };

  const navigate = useNavigate();

  const handleLogin = (endpoint) => {
    setOpen(false);
    action(pages.content);
    navigate(endpoint, {
      state: {
        previousUrl: '/',
      }
    });
  };

  const handleNavClick = () => {
    action(pages.content);
    setOpen(false);
  }

  return (
    <Ul open={open}>
      <li className="mobileHide">
        <Link to="/" onClick={() => action(pages.home)}>
          <img src={Ball} alt="ball"></img>
        </Link>
      </li>
      <li>
        <NavLink to="/" onClick={() => handleNavClick(pages.content)}>
          Book a court
        </NavLink>
      </li>
      <li>
        <NavLink to="/findapartner" onClick={() => handleNavClick(pages.content)}>
          Find a partner
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {userIsLogged === undefined ? (
         <li
         onClick={() => handleLogin('/login')}>
         Login <NavIcon className="fa fa-sign-in" />
         </li>
      ) : (
        <>
          <li>
            <NavLink
              to={"/myaccount/" + userIsLogged.id}
              onClick={() => handleNavClick(pages.content)}
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
