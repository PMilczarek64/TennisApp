import React, { useState } from "react";
import styled from "styled-components";
import { ButtonGreen } from "../common/Button";
import { Input, Label } from "../common/Inputs.styles";
import { getUserName } from "../Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoggedIn } from "../Redux/store";
import { Logo } from "../views/Home";
import LogoImage from "../assets/images/Tennis.png";

const Wrapper = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .dark {
    margin-bottom: 20px;
    margin-left: 40px;
    h3 {
      color: black;
    }
  }
`;

const Form = styled.div`
  padding: 30px 30px 20px 30px;
  
  display: flex;
  flex-direction: column;
  border: none;
  align-items: flex-start;
  border-radius: 15px;
  border-color: ${({ theme }) => theme.colors.darkGrey};
  box-shadow: 0px 5px 24px -10px rgba(66, 68, 90, 1);
  button {
    margin-top: 20px;
  }
  label {
    padding-left: 0;
  }
  .warn {
    color: red;
  }
`;

const LoginInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  border: solid 1px ${({ theme }) => theme.colors.faded};
  border-radius: 5px;
  input {
    border: none;
  }
`;

const Icon = styled.div`
  height: 100%;
  padding: 4px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 1px ${({ theme }) => theme.colors.faded};
  margin-block: 6px;
  color: ${({ theme }) => theme.colors.detailGreen};
  font-size: 20px;
`;

const FormItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &.right {
    justify-content: flex-end;
  }
  &.center {
    justify-content: center;
    margin-bottom: 10px;
  }
`;
const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const checkUser = useSelector((state) =>
    getUserName(state, userName, password)
  );
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginAction = () => {
    if (checkUser !== undefined) {
      dispatch(setLoggedIn({ setLogged: true, name: userName }));
      navigate('/');
    } else {
      setError(true);
    }
  };

  console.log(checkUser);
  return (
    <Wrapper>
      <Logo className="dark">
        <h3>TENNIS MOTION</h3>
        <img src={LogoImage} alt="logo"></img>
      </Logo>
      <Form>
        <FormItem className="center">
          <h4>Log in to your account</h4>
        </FormItem>
        <Label htmlFor="username">Username: </Label>
        <LoginInput>
          <Icon className="fa fa-user" />
          <Input
            type="text"
            id="username"
            name="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></Input>
        </LoginInput>
        <Label htmlFor="username">Password: </Label>
        <LoginInput>
          <Icon className="fa fa-lock" />
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </LoginInput>

        {error && <p className="warn">Wrong credentials!</p>}

        <ButtonGreen onClick={loginAction}>Login</ButtonGreen>
      </Form>
    </Wrapper>
  );
};

export default LoginForm;
