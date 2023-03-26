import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import HeaderBar from "../../common/HeaderBar";
import { useSelector } from "react-redux";
import { getPlayerByUserId } from "../../Redux/playersRedux";
import EditPlayerProfile from "../FindAPartner/Modals/PlayerProfileMenager/EditPlayerProfile";
import AddPlayerProfile from "../FindAPartner/Modals/PlayerProfileMenager/AddPlayerProfile";
import { checkIfUserHasProfile } from "../../utils";
import { RoundedIcon } from "../../common/RoundedIcon";

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
  @media screen and (max-width: 540px){
    padding: 5px;
  }
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
  @media screen and (max-width: 540px){
    flex-direction: column;
  }
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
  @media screen and (max-width: 540px){
    text-align: center;
    h3 {
      margin-bottom: 10px;
    }
  }
`;

const MyAccount = ({ userLogged }) => {
  const { userId } = useParams();
  const navigate = useNavigate();
  console.log("test userId ", userId);
  const playerProfile = useSelector((state) =>
    getPlayerByUserId(state, userId)
  );
  const [showAddProfileModal, setShowAddProfileModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  useEffect(() => {
    if (userLogged === undefined) {
      return navigate("/login", {
        state: {
          previousUrl: `/myaccount/${userId}/`,
        },
      });
    }
  });
  return (
    <Wrapper>
      {showAddProfileModal && (
        <AddPlayerProfile
          userId={userId}
          setShowModal={setShowAddProfileModal}
        />
      )}
      {showEditProfileModal && (
        <EditPlayerProfile
          userId={userId}
          setShowModal={setShowEditProfileModal}
          player={playerProfile}
        />
      )}
      <HeaderBar value="My Account" />
      <WidgetsWrapper>
        <Widget
          onClick={() =>
            checkIfUserHasProfile(userId, playerProfile) === false
              ? setShowAddProfileModal(true)
              : setShowEditProfileModal(true)
          }
        >
          <RoundedIcon className="green">
            <i className="fa fa-user"></i>
          </RoundedIcon>
          <WidgetContent>
            <h3>My Profile</h3>
            <p>Click to show booking menagement view </p>
          </WidgetContent>
        </Widget>
        <Widget onClick={() => navigate("/myaccount/" + userId + "/bookings")}>
          <RoundedIcon className="blue">
            <i className="fa fa-calendar"></i>
          </RoundedIcon>
          <WidgetContent>
            <h3>My Bookings</h3>
            <p>Click to show and edit your player profile</p>
          </WidgetContent>
        </Widget>
        <Widget onClick={() => navigate("/myaccount/" + userId + "/settings")}>
          <RoundedIcon className="silver">
            <i className="fa fa-cog"></i>
          </RoundedIcon>
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
