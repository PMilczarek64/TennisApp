import React from "react";
import PlayerProfileMenager from "./PlayerProfileMenager";
import { useDispatch, useSelector } from "react-redux";
import { getPlayerByUserId, editPlayerProfile, removePlayerProfile } from "../../../../Redux/playersRedux";
import { getLoggingInInfo } from "../../../../Redux/usersRedux";
import propTypes from "prop-types";

const EditPlayerProfile = ( { setShowModal } ) => {

  const dispatch = useDispatch();
  const handleEdit = profile => {
    dispatch(editPlayerProfile(profile))
  };
  const handleRemove = id => {
    dispatch(removePlayerProfile(id));
  }

  const userId = useSelector(getLoggingInInfo)?.id;
  const playerData = useSelector((state) => getPlayerByUserId(state, userId));
  return (
    <PlayerProfileMenager
      id={playerData.id}
      action={handleEdit}
      remove={handleRemove}
      actionText="Edit"
      userId={userId}
      setShowModal={setShowModal}
      name={playerData?.name}
      age={playerData?.age}
      city={playerData?.city}
      height={playerData?.height}
      ntrp={playerData?.ntrp}
      dominantHand={playerData?.dominantHand}
      email={playerData?.email}
      phone={playerData?.phone}
      shortDescription={playerData?.shortDescription}
      photo={playerData?.photo}
      profileOwner={playerData?.profileOwner}
    />
  );
};

EditPlayerProfile.propTypes = {
  setShowModal: propTypes.func.isRequired,
};

export default EditPlayerProfile;
