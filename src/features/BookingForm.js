import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { Label, Input, Select } from "../common/Inputs.styles";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import { ButtonGreen } from "../common/Button";
import { useState } from "react";
import shortid from "shortid";

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
  date,
}) => {
  const possibleNextHours = [];
  const freeHoursByCourt = freeHours.filter(
    (object) => object.courtId === selectedCourt
  );
  const busyHoursByCourt = [];
  const checkBusyHoursByCourt = () => {
    busyHours.map(
      (object) =>
        (object.courtId === selectedCourt) && busyHoursByCourt.push(object.hour)

    );
  };

  const findNextPossibleHour = () => {
    for (const hour of freeHoursByCourt) {
      //console.log('fre hour ', hour);
      if (Number(hour.hour.split(':')[0] + hour.hour.split(':')[1]) > Number(fromHour.hour.split(':')[0] + fromHour.hour.split(':')[1])) {
        //console.log('większe ', hour.hour, ' od ', fromHour.hour);
       
      }
    };
  };
    //freeHoursByCourt.map( hour => 
   //   (Number(hour.hour.split(':')[0] + hour.hour.split(':')[1]) > Number(fromHour.hour.split(':')[0] + fromHour.hour.split(':')[1])) &&
   //   console.log('xd ',  busyHoursByCourt)
       /* console.log('busy hour', busyHour) &&
        console.log(Number(busyHour.split(':')[0] + busyHour.split(':')[1]), 'test split') //< Number(fromHour.hour.split(':')[0] + fromHour.hour.split(':')[1]) &&
       && console.log('busyHour < fromHour passed') &&
        setMaxPossibleHour(hour.hour) 
      ) */ //)}
    /*  (Number(fromHour.hour.split(':')[0] + fromHour.hour.split(':')[1]) > Number(object.hour.split(':')[0] + object.hour.split(':')[1]) &&
      Number(hour.hour.split(':')[0] + hour.hour.split(':')[1]) > Number(fromHour.hour.split(':')[0] + fromHour.hour.split(':')[1])) ?
      console.log('test: ', Number(fromHour.hour.split(':')[0] + fromHour.hour.split(':')[1])) &&
      setMaxPossibleHour(hour.hour) :
     (Number(hour.hour.split(':')[0] + hour.hour.split(':')[1]) > Number(fromHour.hour.split(':')[0] + fromHour.hour.split(':')[1]) &&
    Number(hour.hour.split(':')[0] + hour.hour.split(':')[1]) <  Number(object.hour.split(':')[0] + object.hour.split(':')[1])) &&
      setMaxPossibleHour(hour.hour) 
      
) */
  
  

  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [maxPossibleHour, setMaxPossibleHour] = useState('');

  const handleChange = (e) => {
    setSelectedHour({ hour: e });
    console.log("test from hour", fromHour);
    console.log("test busy hours", busyHours);
    checkBusyHoursByCourt();
    //findNextPossibleHour();
    console.log("busyHoursByCourt", busyHoursByCourt);
    console.log('maxPossibleHour test ', maxPossibleHour);
  };

  

  return (
    <BorderWrapper className={showModal === false && "hide"}>
      <Wrapper>
        <p>{maxPossibleHour}</p>
        <h2>Book tennis court num. {selectedCourt}</h2>
        <FormItem>
          <Label htmlFor="date">Date: </Label>
          <p>{date}</p>
        </FormItem>
        <FormItem>
          <Label htmlFor="from-hour">From hour: </Label>
          <Select
            id="from-hour"
            name="from-hour"
            onChange={(e) => handleChange(e.target.value)}
          >
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
              (object =>
                (object.hour.split(':')[0] + object.hour.split(':')[1]) > (fromHour.hour.split(':')[0] + fromHour.hour.split(':')[1]) &&
                
                object.hour != maxPossibleHour &&
                <option value={object.hour} key={object.hour}>
                  {object.hour}
                </option>
              )
            )}
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
