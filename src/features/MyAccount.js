import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import HeaderBar from "../common/HeaderBar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: black;
  }
`;

const WidgetsWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Widget = styled.li`
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 400px;
  border: 1px solid ${({ theme }) => theme.colors.strongFaded};
  border-radius: 10px;
  box-shadow: 12px 12px 24px -2px ${({ theme }) => theme.colors.strongFaded};
  cursor: pointer;
`;

const WidgetContent = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  text-align: start;
  h3 {
    color: black;
    font-size: 32px;
  }
  p {
    font-size: 19px;
  }
`;

const Icon = styled.div`
  min-height: 100px;
  min-width: 100px;
  margin: 25px;
  border-radius: 50%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  color: white;
  
  &.green {
    background: linear-gradient(90deg, greenyellow 0%, rgb(255, 231, 76) 100%);
  }
  &.blue {
    background: linear-gradient(90deg, lightBlue 0%, rgb(0, 72, 255) 100%);
  }
  &.silver {
    background: linear-gradient(90deg, grey 0%, rgb(0, 72, 255) 100%);;
  }
`;

const MyAccount = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  console.log("test userId ", userId);

  return (
    <Wrapper>
      <HeaderBar value="My Account" />
      <WidgetsWrapper>
        <Widget onClick={() => navigate("/myaccount/" + userId + "/bookings")}>
          <Icon className="green"><i className="fa fa-user"></i></Icon>
          <WidgetContent>
            <h3>My Profile</h3>
            <p>Click to show booking menagement view </p>
          </WidgetContent>
        </Widget>
        <Widget onClick={() => navigate("/myaccount/" + userId + "/bookings")}>
          <Icon className="blue"><i className="fa fa-calendar"></i></Icon>
          <WidgetContent>
            <h3>My Bookings</h3>
            <p>Click to show and edit your player profile</p>
          </WidgetContent>
        </Widget>
        <Widget onClick={() => navigate("/myaccount/" + userId + "/bookings")}>
          <Icon className="silver"><i className="fa fa-cog"></i></Icon>
          <WidgetContent>
            <h3>Account Setings</h3>
            <p>Click edit your account configuration</p>
          </WidgetContent>
        </Widget>
      </WidgetsWrapper>
    </Wrapper>
  );
};

export default MyAccount;
