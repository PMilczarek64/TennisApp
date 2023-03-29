import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderBar from "../../../common/HeaderBar";
import { useSelector } from "react-redux";
import { getPlayerByUserId } from "../../../Redux/playersRedux";
import EditPlayerProfile from "../../FindAPartner/Modals/PlayerProfileMenager/EditPlayerProfile";
import AddPlayerProfile from "../../FindAPartner/Modals/PlayerProfileMenager/AddPlayerProfile";
import { checkIfUserHasProfile } from "../../../utils";
import { RoundedIcon } from "../../../common/RoundedIcon";
import { Wrapper, WidgetsWrapper, Widget, WidgetContent } from "./MyAccount.styled";

const MyAccount = ({ userLogged }) => {
  const { userId } = useParams();
  const navigate = useNavigate();
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
