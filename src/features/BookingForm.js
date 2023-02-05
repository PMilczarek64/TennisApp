import moment from "moment/moment";
import propTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ButtonGreenOutline, ButtonRedOutline } from "../common/Button";
import { Label, Select } from "../common/Inputs.styles";
import { formatHourToNumber, formatNumberToHour } from "../utils";
import { addBooking, getLoggingInInfo } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getObjectById } from "../Redux/store";

import { useParams } from "react-router-dom";

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
  @media screen and (max-width: 990px) {
    width: 70%;
  }
  @media screen and (max-width: 790px) {
    width: 90%;
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
  padding: 20px;
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
  @media screen and (max-width: 990px) {
    flex-direction: column;
    margin: 0;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
`;

const BookingForm = ({
  showModal,
  setShowBookingForm,
  freeHours,
  busyHours,
  fromHour,
  setSelectedHour,
  selectedEndHour,
  setSelectedEndHour,
  selectedCourt,
  tableDate,
  bookingId,
}) => {
  const freeHoursByCourt = freeHours.filter(
    (object) => object.courtId === selectedCourt
  );

  const busyHoursByCourt = busyHours.filter(
    (object) => object.courtId === selectedCourt
  );
  const maxBusyHours = busyHoursByCourt.map(({ hour }) =>
    formatHourToNumber(hour)
  );

  const loggedUser = useSelector(getLoggingInInfo);
  const [maxPossibleHours, setMaxPossibleHours] = useState([]);
  const dispatch = useDispatch();
  const { objectId } = useParams();

  const object = useSelector((state) => getObjectById(state, Number(objectId)));
  const closingHour = object.contentData[0].closingHour;

  const countPossibleHours = () => {
    const nextBusyHour =
      maxBusyHours.filter((hour) => hour > fromHour)[0] || closingHour + 0.5;
    let preparedMaxPossibleHours = freeHoursByCourt
      .map(({ hour }) => formatHourToNumber(hour))
      .filter((hour) => hour < nextBusyHour && hour > fromHour);
    if (nextBusyHour) {
      preparedMaxPossibleHours = [
        ...preparedMaxPossibleHours,
        nextBusyHour,
      ].sort();
    }
    setMaxPossibleHours(preparedMaxPossibleHours);
  };

  useEffect(() => {
    countPossibleHours();
    setSelectedEndHour(fromHour + 0.5);
  }, [fromHour, tableDate]);

  const handleChange = (e) => {
    setSelectedHour(formatHourToNumber(e));
  };

  const handleCLose = () => {
    setShowBookingForm(false);
  };

  const handleBooking = () => {
    const startHourFormmatedToDispatch = moment(
      tableDate.toString().slice(0, 16) +
        formatNumberToHour(fromHour) +
        ":00 " +
        tableDate.toString().slice(-46)
    ).format();
    const endHourFormattedToDispatch = moment(
      tableDate.toString().slice(0, 16) +
        formatNumberToHour(selectedEndHour - 0.5) +
        ":00 " +
        tableDate.toString().slice(-46)
    ).format();
    dispatch(
      addBooking({
        id: bookingId,
        startDate: startHourFormmatedToDispatch,
        endDate: endHourFormattedToDispatch,
        court: selectedCourt,
        repeat: false,
        objectId: Number(objectId),
        bookedByUser: loggedUser.id,
      })
    );
    countPossibleHours();
    setSelectedHour(null);
    setShowBookingForm(false);
  };

  return (
    <BorderWrapper className={showModal === false && "hide"}>
      <Wrapper>
        <Header>Book tennis court num. {selectedCourt}</Header>
        <FormItem>
          <Label htmlFor="date">Date: </Label>
          <p>{moment(tableDate).format("YYYY/MM/DD")}</p>
        </FormItem>
        <FormItem>
          <Label htmlFor="from-hour">From hour: </Label>
          <Select
            id="from-hour"
            name="from-hour"
            onChange={(e) => handleChange(e.target.value)}
          >
            {freeHoursByCourt.map((object) =>
              formatHourToNumber(object.hour) === fromHour ? (
                <option value={object.hour} key={object.hour} selected>
                  {object.hour}
                </option>
              ) : (
                object.courtId === selectedCourt && (
                  <option value={object.hour} key={object.hour}>
                    {object.hour}
                  </option>
                )
              )
            )}
          </Select>
        </FormItem>
        <FormItem>
          <Label htmlFor="to-hour">To hour: </Label>
          <Select onChange={(e) => setSelectedEndHour(e.target.value)}>
            {maxPossibleHours.map((hour) =>
              hour === fromHour + 0.5 ? (
                <option value={hour} key={hour} selected>
                  {formatNumberToHour(hour)}
                </option>
              ) : (
                <option value={hour} key={hour}>
                  {formatNumberToHour(hour)}
                </option>
              )
            )}
          </Select>
        </FormItem>
      </Wrapper>
      <ButtonsWrapper>
        <ButtonRedOutline onClick={() => handleCLose()}>Close</ButtonRedOutline>
        <ButtonGreenOutline onClick={() => handleBooking()}>
          Confirm booking
        </ButtonGreenOutline>
      </ButtonsWrapper>
    </BorderWrapper>
  );
};

BookingForm.propTypes = {
  setShowBookingForm: propTypes.func,
};

export default BookingForm;
