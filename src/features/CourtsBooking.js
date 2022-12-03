import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getObjectById } from "../Redux/store";
import BookingTable from "./BookingTable";

const Wrapper = styled.div`
  margin: 50px 100px;
  display: flex;
  justify-content: space-between;
`;

const CourtsBooking = () => {
  const [startDate, setStartDate] = useState(new Date());

  const { objectId } = useParams();
  const object = useSelector((state) => getObjectById(state, Number(objectId)));
  const events = useSelector((state) =>
    getObjectById(state, Number(objectId)),
  ).events;
  const courts = useSelector((state) =>
    getObjectById(state, Number(objectId)),
  ).courts;

  const openingHour = object.contentData[0].openingHour;
  const closingHour = object.contentData[0].closingHour;
  const possibleHours = [];
  const [showBookingForm, setShowBookingForm] = useState(false);

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

  return (
    <Wrapper>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
      />
      <BookingTable
        courts={courts}
        events={events}
        possibleHours={possibleHours}
        showModal={showBookingForm}
        setShowBookingForm={setShowBookingForm}
      />
    </Wrapper>
  );
};

export default CourtsBooking;
