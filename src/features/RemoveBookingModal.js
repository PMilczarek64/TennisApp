import moment from "moment/moment";
import propTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ButtonGreen, ButtonConfirm, ButtonClose } from "../common/Button";
import { Input, Label, Select } from "../common/Inputs.styles";
import { formatHourToNumber, formatNumberToHour } from "../utils";
import { addBooking, deleteBooking, getLoggingInInfo } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { useParams } from "react-router-dom";

const BorderWrapper = styled.div`
  padding: 20px;
  width: 600px;
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
`;

const Wrapper = styled.div`
  height: 100%;
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
  showEditBooking,
  setShowEditBooking,
  freeHours,
  busyHours,
  fromHour,
  setSelectedHour,
  selectedCourt,
  tableDate,
  bookingId,
  showRemoveModal,
  setShowRemoveModal,
}) => {
  const dispatch = useDispatch();
  const { objectId } = useParams();

  console.log('obj remove test id ', objectId );

  const handleCLose = () => {
    setShowRemoveModal(false);
  };

  const handleDelete = () => {
    dispatch(deleteBooking({objectId: Number(objectId), bookingId: bookingId.toString()}))
    setShowRemoveModal(false);
  };

  return (
    <BorderWrapper className={showRemoveModal === false && "hide"}>
      <Wrapper>
        <Header>Do you want to delete booking?</Header>
        <FormItem>
          <Label htmlFor="date">Date: </Label>
          <p>{moment(tableDate).format("YYYY/MM/DD")}</p>
        </FormItem>
        <ButtonsWrapper>
          <ButtonClose onClick={() => handleCLose()}>Close</ButtonClose>
          <ButtonConfirm onClick={() => handleDelete()}>
            Delete Booking
          </ButtonConfirm>
        </ButtonsWrapper>
      </Wrapper>
    </BorderWrapper>
  );
};

RemoveBookingModal.propTypes = {
  setShowEditBooking: propTypes.func,
};

export default RemoveBookingModal;
