import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { Label, Input, Select } from "../common/Inputs.styles";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import { ButtonGreen } from "../common/Button";
import { useState } from "react";

const BorderWrapper = styled.div`
  padding: 20px;
  width: 600px;
  height: 400px;
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
`;

const BookingForm = ({
  showModal,
  setShowBookingForm,
  freeHours,
  busyHours,
  fromHour,
  selectedCourt,
  date,
}) => {
  const freeHoursByCourt = freeHours.filter(
    (object) => object.courtId === selectedCourt
  );
  const nextBusyHour = busyHours.find(
    (object) => object.courtId === selectedCourt && object.hour > fromHour.hour
  );

  const [name, setName] = useState('');
  const [phone, setPhone] = useState();

  console.log("pushed busy Hours: ", nextBusyHour);
  return (
    <BorderWrapper className={showModal === false && "hide"}>
      <Wrapper >
        <h2>Book tennis court num. {selectedCourt}</h2>
        <FormItem>
          <Label htmlFor="date">Date: </Label>
          <p>{date}</p>
        </FormItem>
        <FormItem>
          <Label htmlFor="from-hour">From hour: </Label>
          <Select id="from-hour" name="from-hour">
            {freeHoursByCourt.map((object) =>
              object.hour === fromHour.hour ? (
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
          <Select>
            {freeHoursByCourt.map(
              (free) =>
                free.hour > fromHour.hour &&
                free.hour <= nextBusyHour.hour && (
                  <option value={free.hour} key={free.hour}>
                    {free.hour}
                  </option>
                )
            )}
          </Select>
        </FormItem>
        <FormItem>
          <Label htmlFor="name">Name: </Label>
          <Input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)}></Input>
        </FormItem>
        <FormItem>
          <Label htmlFor="phone">Phone number: </Label>
          <Input type="tel" id="phone" name="phone" value={phone} placeholder="123-456-678" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" required onChange={e => setPhone(e.target.value)}></Input>
        </FormItem>
        <ButtonGreen onClick={() => setShowBookingForm(false)}>
          Close
        </ButtonGreen>
      </Wrapper>
    </BorderWrapper>
  );
};

BookingForm.propTypes = {
  setShowBookingForm: propTypes.func,
};

export default BookingForm;
