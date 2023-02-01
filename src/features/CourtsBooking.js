import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CompanyHeader from "../common/CompanyHeader";
import { getObjectById } from "../Redux/store";
import BookingTable from "./BookingTable";
import moment from "moment";

const ColumnWrapper = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 24px -10px rgba(66, 68, 90, 1);
  padding-bottom: 50px;
  h3 {
    color: black;
  }
  p {
    padding-inline: 50px;
  }
  @media (max-width: 1110px){
    box-shadow: none;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 20px;
  padding-inline: 50px;
  display: flex;
  justify-content: space-between;
  .react-datepicker {
    box-shadow: 12px 12px 24px -22px ${({ theme }) => theme.colors.darkGrey};
    border: 1px solid ${({ theme }) => theme.colors.strongFaded};
    .react-datepicker__header {
      background-color: ${({ theme }) => theme.colors.detailGreen};
      border-color: ${({ theme }) => theme.colors.detailGreen};
    }
    .react-datepicker__navigation{
      color: white;
    }
    .react-datepicker__day--selected {
      background-color: #fcffe5;
      color: black;
      border: 1px solid ${({ theme }) => theme.colors.detailGreen};
      border-radius: 50%;
    }
  }
  @media screen and (max-width: 920px){
    flex-direction: column;
    align-items: center;
    padding-inline: 0px;
    .react-datepicker {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 520px){
    .react-datepicker {
      transform: scale(1.37);
      margin-block: 60px;
    }
  }
`;

const CourtsBooking = () => {
  const [startDate, setStartDate] = useState(new Date());

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
      <CompanyHeader name={object.name} city={object.city} logo={object.logo} address={object.address} phone={object.phoneNumber} subHeader="Book a court"/>
      <p>
        Select a date from the calendar and click on a free date in the table to
        open the booking window. If you need to cancel your reservation, click
        on it
      </p>
      <ContentWrapper>
        <DatePicker
          selected={startDate}
          onChange={(date) => handleDateChange(date)}
          minDate={moment().toDate()}
          inline
          popperClassName="shade"
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
      </ContentWrapper>
    </ColumnWrapper>
  );
};

export default CourtsBooking;
