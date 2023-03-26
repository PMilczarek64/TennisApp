import React from "react";
import { ButtonGreenHighlited } from "../../../common/Button";
import { Input } from "../../../common/Inputs.styles";
import propTypes from "prop-types";
import { Inputs, Bar } from "./MenagementBar.styled";

const MenagementBar = ({
  setCity,
  setName,
  setNtrp,
  checkIfUserHasProfile,
  checkloggedUserId,
  setShowAddProfileModal,
  setShowEditProfileModal,
}) => {
  return (
    <Bar>
      <h4>
        Fill the fields below to search <i className="fa fa-search"></i>
      </h4>
      <Inputs>
        <Input
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        ></Input>
        <Input
          placeholder="Player's name"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          placeholder="NTRP level"
          onChange={(e) => setNtrp(e.target.value)}
        ></Input>
      </Inputs>
      <ButtonGreenHighlited
        onClick={() =>
          checkloggedUserId() &&
            checkIfUserHasProfile() === false
              ? setShowAddProfileModal(true)
              : setShowEditProfileModal(true)
        }
      >
        Click to add or edit your profile
        <i className="fa fa-users"></i>
      </ButtonGreenHighlited>
    </Bar>
  );
};

MenagementBar.propTypes = {
  checkIfUserHasProfile: propTypes.func.isRequired,
  checkloggedUserId: propTypes.func.isRequired,
  setShowAddProfileModal: propTypes.func.isRequired,
  setShowEditProfileModal: propTypes.func.isRequired,
  setCity: propTypes.func.isRequired,
  setName: propTypes.func.isRequired,
  setNtrp: propTypes.func.isRequired,
};

export default MenagementBar;
