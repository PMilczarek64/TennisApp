import React, { useState } from "react";
import styled from "styled-components";
import { ButtonGreen } from "../common/Button";
import { Input, Label } from "../common/Inputs.styles";
import { getUserName } from "../Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoggedIn } from "../Redux/store";

const Wrapper = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
padding: 30px 30px 20px 30px;
  display: flex;
  flex-direction: column;
  border: solid 1px;
  border-radius: 15px;
  border-color: ${({ theme }) => theme.colors.darkGrey};
  box-shadow: 0px 5px 24px -10px rgba(66, 68, 90, 1);
`;

const FormItem = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &.right {
    justify-content: flex-end;
  }
  &.warn {
    p {
    color: red;
    }
  }
`;
const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const checkUser = useSelector(state => getUserName(state, userName, password));
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginAction = () => {
    if (checkUser !== undefined) {
      navigate(`/myaccount/${checkUser.id}`);
      console.log('check user id in my account ', checkUser.id);
      dispatch(setLoggedIn({setLogged: true, name: userName}));
    } else {
      setError(true);
    }
  };

  console.log(checkUser);
  return (
    <Wrapper>
      <Form>
        <FormItem>
          <h4>Log in</h4>
        </FormItem>
        <FormItem>
          <Label htmlFor="username">Username: </Label>
          <Input type="text" id="username" name="username" value={userName} onChange={e => setUserName(e.target.value)}></Input>
        </FormItem>
        <FormItem>
          <Label htmlFor="username">Password: </Label>
          <Input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)}></Input>
        </FormItem>
        {error &&
          <FormItem className="warn">
            <p>Wrong credentials!</p>
          </FormItem>
        }
        <FormItem className="right">
          <ButtonGreen onClick={loginAction}>Login</ButtonGreen>
        </FormItem>
      </Form>
    </Wrapper>
  );
};

export default LoginForm;