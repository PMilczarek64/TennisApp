import React, { useState } from "react";
import { ButtonGreen } from "../../../common/Button";
import { Input, Label } from "../../../common/Inputs.styles";
import { getUserName, setLoggedIn } from "../../../Redux/usersRedux";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TennisMotionLogo from "../../../common/TennisMotionLogo";
import AuthWrapper from "../AuthWrapper/AuthWrapper";
import { LoginInput, FormItem, Icon } from "./LoginForm.styled";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { objectId } = useParams();
  const checkUser = useSelector((state) =>
    getUserName(state, userName, password)
  );
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const loginAction = () => {
    if (checkUser !== undefined) {
      dispatch(setLoggedIn({ setLogged: true, name: userName }));
      if (objectId === undefined) {
        navigate(location.state.previousUrl);
        console.log("test location ", location);
      }
    } else {
      setError(true);
    }
  };

  console.log(checkUser);
  return (
    <>
    <AuthWrapper icon={<TennisMotionLogo dark />}>
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
    </AuthWrapper>
    </>
  );
};

export default LoginForm;
