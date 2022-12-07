import moment from "moment/moment";
import propTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ButtonGreen, ButtonConfirm, ButtonClose } from "../common/Button";
import { Input, Label, Select } from "../common/Inputs.styles";
import { formatHourToNumber, formatNumberToHour } from "../utils";
import { addBooking, getEventsByObjectId } from "../Redux/store";
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
  :last-child {
    margin-bottom: 10px;
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
  selectedCourt,
  tableDate,
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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [maxPossibleHours, setMaxPossibleHours] = useState([]);
  const [selectedEndHour, setSelectedEndHour] = useState(fromHour);
  const dispatch = useDispatch();
  const { objectId } = useParams();

  useEffect(() => {
    const nextBusyHour =
      maxBusyHours.filter((hour) => hour > fromHour)[0] || 20.5;
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
  }, [fromHour, tableDate]);

  const handleChange = (e) => {
    setSelectedHour(formatHourToNumber(e));
  };

  const handleCLose = () => {
    setShowBookingForm(false);
  };

  const eventsByObject =  useSelector((state) => getEventsByObjectId(state, Number(objectId)));

  const handleBooking = () => {
    const startHourFormmatedToDispatch = moment(
      tableDate.toString().slice(0, 16) +
        formatNumberToHour(fromHour) +
        ":00 " +
        tableDate.toString().slice(-46)
    ).format();
    console.log("start hour: ", startHourFormmatedToDispatch);
    const endHourFormattedToDispatch = moment(
                                        tableDate.toString().slice(0, 16) +
                                        formatNumberToHour(selectedEndHour) +
                                        ":00 " +
                                        tableDate.toString().slice(-46)
                                       ).format();
    
    eventsByObject.push({
      id: shortid(),
      startDate: startHourFormmatedToDispatch,
      endDate: endHourFormattedToDispatch,
      court: selectedCourt,
      repeat: false,
      phone: phone,
      customerName: name,
      objectId: Number(objectId)
    });
    
    console.log('effect: ', eventsByObject)
  };

  
  console.log('eventsBy ', eventsByObject);

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
            {maxPossibleHours.map((hour) => (
              <option value={hour} key={hour}>
                {formatNumberToHour(hour)}
              </option>
            ))}
          </Select>
        </FormItem>
        <FormItem>
          <Label htmlFor="name">Name: </Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
        </FormItem>
        <FormItem>
          <Label htmlFor="phone">Phone number: </Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            placeholder="123-456-678"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
            onChange={(e) => setPhone(e.target.value)}
          ></Input>
        </FormItem>
      </Wrapper>
      <ButtonsWrapper>
        <ButtonClose onClick={() => handleCLose()}>Close</ButtonClose>
        <ButtonConfirm onClick={() => handleBooking()}>
          Confirm booking
        </ButtonConfirm>
      </ButtonsWrapper>
    </BorderWrapper>
  );
};

BookingForm.propTypes = {
  setShowBookingForm: propTypes.func,
};

export default BookingForm;
