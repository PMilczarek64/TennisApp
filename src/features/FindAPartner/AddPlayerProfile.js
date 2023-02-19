import React from "react";
import PlayerProfileMenager from "./PlayerProfileMenager";
import { useDispatch } from "react-redux";
import { addPlayerProfile } from "../../Redux/store";

const AddPlayerProfile = ({userId, setShowModal}) => {
  const dispatch = useDispatch();
  const handleSubmit = profile => {
    dispatch(addPlayerProfile(profile));
  }

  return (
    <PlayerProfileMenager action={handleSubmit} actionText="Add" userId={userId} setShowModal={setShowModal} />
  );
};

export default AddPlayerProfile;