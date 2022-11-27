import React from "react";
import PropTypes from "prop-types";
import DateChange from "./DatePicker";
import { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import { getAllEvents, getObjectById } from "../Redux/store";
import { useParams } from "react-router-dom";
import BookingTable from "./BookingTable";
import BookingForm from "./BookingForm";

const Wrapper = styled.div`
  margin: 50px 100px;
  display: flex;
  justify-content: space-between;
`;



const CourtsBooking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const parsedDate =
    startDate.getFullYear() +
    "/" +
    (startDate.getMonth() + 1) +
    "/" +
    startDate.getUTCDate();

  const { objectId } = useParams();
  const object = useSelector((state) => getObjectById(state, Number(objectId)));
  const events = useSelector((state) =>
    getObjectById(state, Number(objectId))
  ).events;
  const courts = useSelector((state) =>
    getObjectById(state, Number(objectId))
  ).courts;

  const openingHour = object.contentData[0].openingHour;
  const closingHour = object.contentData[0].closingHour;
  const possibleHours = [];
  const [showBookingForm, setShowBookingForm] = useState(false);

  console.log(parsedDate, "parsedDtae");

  const checkAndFormatPossibleHours = () => {
    for (let i = openingHour; i <= closingHour; i += 0.5) {
      let hourToCheck = i.toString();
      if (hourToCheck.length > 2) {
        possibleHours.push(hourToCheck.slice(0, 2) + ":30");
      } else {
        possibleHours.push(hourToCheck + ":00");
      }
    }
  };

  checkAndFormatPossibleHours();
  possibleHours.map((item) => console.log(item));

  console.log("courts in tables ", openingHour, closingHour);
  console.log(parsedDate, "test parsedDate");
  return (
    <Wrapper>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
      />
      <BookingTable courts={courts} events={events} possibleHours={possibleHours} parsedDate={parsedDate} setShowBookingForm={setShowBookingForm}/>
      <BookingForm showModal={showBookingForm} />
    </Wrapper>
  );
};

export default CourtsBooking;
