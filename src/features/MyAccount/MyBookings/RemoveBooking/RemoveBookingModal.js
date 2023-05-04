import moment from "moment/moment";
import propTypes from "prop-types";
import React from "react";
import { ButtonRedOutline, ButtonGreyOutline } from "../../../../common/Button";
import { Label } from "../../../../common/Inputs.styles";
import { deleteBooking } from "../../../../Redux/objectsRedux";
import { useDispatch } from "react-redux";
import { isLessThan24H } from "../../../../utils/utils";
import { BorderWrapper, Wrapper, Header, FormItem, ButtonsWrapper } from "./RemoveBookingModal.styled";

const RemoveBookingModal = ({
  bookingId,
  showRemoveModal,
  setShowRemoveModal,
  objectId,
  eventStartDate,
  objectName,
}) => {
  const dispatch = useDispatch();

  const handleCLose = () => {
    setShowRemoveModal(false);
  };

  const handleDelete = () => {
    dispatch(
      deleteBooking({ objectId: Number(objectId), bookingId: bookingId })
    );
    setShowRemoveModal(false);
  };

  return (
    <BorderWrapper className={showRemoveModal === false && "hide"}>
      {isLessThan24H(eventStartDate) === true ? (
        <Wrapper>
          <Header>Booking cancellation is not possible</Header>
          <FormItem>
              <p>Bookings with less than 24 hours left cannot be cancelled</p>
            </FormItem>
          <ButtonsWrapper>
            <ButtonGreyOutline onClick={() => handleCLose()}>
              Close
            </ButtonGreyOutline>
          </ButtonsWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <Header>Do you want to cancel your booking? {objectName}</Header>
          <FormItem>
            <Label htmlFor="date">Date: </Label>
            <p>{moment(eventStartDate).format("YYYY/MM/DD")}</p>
          </FormItem>
          <ButtonsWrapper>
            <ButtonGreyOutline onClick={() => handleCLose()}>
              Close
            </ButtonGreyOutline>
            <ButtonRedOutline onClick={() => handleDelete()}>
              Delete
            </ButtonRedOutline>
          </ButtonsWrapper>
        </Wrapper>
      )}
    </BorderWrapper>
  );
};

RemoveBookingModal.propTypes = {
  setShowEditBooking: propTypes.func,
};

export default RemoveBookingModal;
