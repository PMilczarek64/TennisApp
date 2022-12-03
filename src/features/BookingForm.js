import moment from "moment/moment";
import propTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ButtonGreen } from "../common/Button";
import { Input, Label, Select } from "../common/Inputs.styles";
import { formatHourToNumber, formatNumberToHour } from "../utils";

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
  setSelectedHour,
  selectedCourt,
}) => {
  const freeHoursByCourt = freeHours.filter(
    (object) => object.courtId === selectedCourt,
  );
  const maxBusyHours = busyHours.map(({ hour }) => formatHourToNumber(hour));
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [maxPossibleHours, setMaxPossibleHours] = useState([]);

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
  }, [fromHour]);

  const handleChange = (e) => {
    setSelectedHour(formatHourToNumber(e));
  };

  return (
    <BorderWrapper className={showModal === false && "hide"}>
      <Wrapper>
        <h2>Book tennis court num. {selectedCourt}</h2>
        <FormItem>
          <Label htmlFor="date">Date: </Label>
          <p>{moment().format("YYYY/MM/DD")}</p>
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
              ),
            )}
          </Select>
        </FormItem>
        <FormItem>
          <Label htmlFor="to-hour">To hour: </Label>
          <Select>
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
            required
            onChange={(e) => setPhone(e.target.value)}
          ></Input>
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
