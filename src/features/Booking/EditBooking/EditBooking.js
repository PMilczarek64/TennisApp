import propTypes from "prop-types";
import React from "react";
import { ButtonGreenOutline, ButtonRedOutline } from "../../../common/Button";
import { useNavigate } from "react-router-dom";
import ActionModal from "../../../common/ActionModal/ActionModal";
import { FormItem, ButtonsWrapper } from "./EditBooking.styled";

const EditBooking = ({ showEditBooking, setShowEditBooking, userId }) => {
  const navigate = useNavigate();
  const handleCLose = () => {
    setShowEditBooking(false);
  };

  const handleEdit = () => {
    navigate("/myaccount/" + userId + "/bookings");
  };

  return (
    <ActionModal
      headerText={"Do you want to cancel this reservation?"}
      showModal={showEditBooking}
    >
      <FormItem>Go to the booking management panel</FormItem>
      <ButtonsWrapper>
        <ButtonRedOutline onClick={() => handleCLose()}>Close</ButtonRedOutline>
        <ButtonGreenOutline onClick={() => handleEdit()}>
          Yes
        </ButtonGreenOutline>
      </ButtonsWrapper>
    </ActionModal>
  );
};

EditBooking.propTypes = {
  setShowEditBooking: propTypes.func,
};

export default EditBooking;
