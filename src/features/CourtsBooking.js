import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getObjectById } from "../Redux/store";
import BookingTable from "./BookingTable";

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 100px;
`;

const RowWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const CourtsBooking = () => {
  const [startDate, setStartDate] = useState(new Date());
  console.log("start date", startDate);

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
  const [selectedHour, setSelectedHour] = useState(possibleHours[0]);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showEditBooking, setShowEditBooking] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);

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

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  checkAndFormatPossibleHours();

  return (
    <ColumnWrapper>
      <p>
        Select a date from the calendar and click on a free date in the table to
        open the booking window
      </p>
      <RowWrapper>
        <DatePicker
          selected={startDate}
          onChange={(date) => handleDateChange(date)}
          inline
        />
        <BookingTable
          courts={courts}
          events={events}
          possibleHours={possibleHours}
          showModal={showBookingForm}
          setShowBookingForm={setShowBookingForm}
          tableDate={startDate}
          selectedHour={selectedHour}
          setSelectedHour={setSelectedHour}
          showEditBooking={showEditBooking}
          setShowEditBooking={setShowEditBooking}
          showRemoveModal={showRemoveModal}
          setShowRemoveModal={setShowRemoveModal}
        />
      </RowWrapper>
    </ColumnWrapper>
  );
};

export default CourtsBooking;
