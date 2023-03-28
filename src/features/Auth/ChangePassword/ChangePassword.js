import AuthWrapper from "../AuthWrapper/AuthWrapper";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Input } from "../../../common/Inputs.styles";
import { RoundedIcon } from "../../../common/RoundedIcon";
import { getLoggingInInfo, updatePassword } from "../../../Redux/usersRedux";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonGreen } from "../../../common/Button";
import { Header, Form } from "./ChangePassword.styled";

const ChangePassword = () => {
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
    <AuthWrapper
      icon={
        <RoundedIcon className="green">
          <i className={passwordChanged ? `fa fa-check` : `fa fa-lock`}></i>
        </RoundedIcon>
      }
    >
      <Form onSubmit={handleSubmit(handlePasswordChange)}>
        {passwordChanged ? (
          <Header>Password changed!</Header>
        ) : (
          <Header>Change password</Header>
        )}
        <Input
          type="password"
          placeholder="Current password"
          {...register("password", {
            required: "This field is required",
            validate: (value) =>
              value === user.password || value === "" || "Wrong password",
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
          placeholder="New password"
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
    </AuthWrapper>
  );
};

export default ChangePassword;
