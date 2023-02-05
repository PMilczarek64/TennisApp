import moment from "moment/moment";
import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import {
  ButtonRedOutline,
  ButtonGrey,
  ButtonGreyOutline,
} from "../common/Button";
import { Label } from "../common/Inputs.styles";
import { deleteBooking } from "../Redux/store";
import { useDispatch } from "react-redux";
import { isLessThan24H } from "../utils";

const BorderWrapper = styled.div`
  padding: 20px;
  max-width: 100%;
  height: auto;
  background: linear-gradient(90deg, #ddff00 0%, rgb(255, 231, 76) 100%);
  z-index: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &.hide {
    display: none;
  }
  @media screen and (max-width: 750px) {
    min-width: 80%;
    max-width: 100%;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 1;
`;

const Header = styled.h2`
  font-weight: 500;
  padding-block: 20px;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.faded};
  border-style: none none solid none;
  font-size: 32px;
  @media screen and (max-width: 950px) {
    font-size: 28px;
  }
`;

const FormItem = styled.div`
  padding: 10px;
  margin-inline: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  &.right {
    justify-content: flex-end;
  }
  &.warn {
    p {
      color: red;
    }
  }
  input {
    width: 180px;
  }
  :last-child {
    margin-bottom: 10px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
`;

const RemoveBookingModal = ({
  bookingId,
  showRemoveModal,
  setShowRemoveModal,
  objectId,
  eventStartDate,
  objectName,
}) => {
  const dispatch = useDispatch();

  console.log("obj remove test id ", objectId);
  console.log("remove booking id: ", bookingId);

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
