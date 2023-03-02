import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderBar from "../../common/HeaderBar";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Input, Label } from "../../common/Inputs.styles";
import { RoundedIcon } from "../../common/RoundedIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoggingInInfo,
  getPassword,
  updatePassword,
} from "../../Redux/usersRedux";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonGreen } from "../../common/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: black;
  }
`;

const ContentWrapper = styled.div`
  margin: 50px;
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.colors.strongFaded};
  border-radius: 25px;
  width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 5px 24px -10px ${({ theme }) => theme.colors.faded};
  @media screen and (max-width: 525px) {
    width: 80%;
    padding: 10px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 60%;
  .alert {
    color: ${({ theme }) => theme.colors.error};
  }
  input {
    height: 42px;
    margin-block: 5px;
    border-color: ${({ theme }) => theme.colors.strongFaded};
  }
  @media screen and (max-width: 525px) {
    width: 90%;
  }
`;

const AccountSettings = () => {
  const user = useSelector(getLoggingInInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();
  const [passwordChanged, setPasswordChanged] = useState(false);

  useEffect(() => {
    if (user === undefined) {
      return navigate("/login", {
        state: {
          previousUrl: `/myaccount/${userId}/`,
        },
      });
    }
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      newPassword: "",
      newPaswordRepeat: "",
    },
    criteriaMode: "all",
  });

  const handlePasswordChange = (data) => {
    dispatch(
      updatePassword({
        id: userId,
        password: data.pasword,
        newPassword: data.newPassword,
      })
    );
    setPasswordChanged(true);
  };
  const currentNewPassword = watch("newPassword", "");
  return (
    <Wrapper>
      <HeaderBar value="Account Settings" undo/>
      <ContentWrapper>
        {passwordChanged ?
        <>
        <RoundedIcon className="green">
          <i className="fa fa-check"></i>
        </RoundedIcon>
        <h4>Password changed!</h4>
      </> :
        <>
          <RoundedIcon className="green">
            <i className="fa fa-lock"></i>
          </RoundedIcon>
          <h4>Change password</h4>
        </> 
        }
        <Form onSubmit={handleSubmit(handlePasswordChange)}>
          <Input
            type="password"
            placeholder="Enter your current password"
            {...register("password", {
              required: "This field is required",
              validate: (value) => value === user.password || "Wrong password",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <span key={type} className="alert">
                  {message}
                </span>
              ))
            }
          />
          <Input
            type="password"
            placeholder="Enter a new password"
            {...register("newPassword", {
              required: "This field is required",
              minLength: {
                value: 5,
                message: "Minimum 5 characters",
              },
              maxLength: {
                value: 30,
                message: "Maximum 30 characters",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="newPassword"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <span key={type} className="alert">
                  {message}
                </span>
              ))
            }
          />
          <Input
            type="password"
            placeholder="Repeat new password"
            {...register("newPasswordRepeat", {
              required: "This field is required",
              validate: (value) =>
                value === currentNewPassword || "The passwords do not match",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="newPasswordRepeat"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <span key={type} className="alert">
                  {message}
                </span>
              ))
            }
          />
          <ButtonGreen type="submit">Submit</ButtonGreen>
        </Form>
      </ContentWrapper>
      
    </Wrapper>
  );
};

export default AccountSettings;
