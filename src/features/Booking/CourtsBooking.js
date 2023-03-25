import React, { useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { getObjectById } from "../../Redux/objectsRedux";
import { useParams } from "react-router-dom";
import CompanyHeader from "../../common/CompanyHeader/CompanyHeader";
import BookingTable from "./BookingTable/BookingTable";
import { ColumnWrapper, ContentWrapper } from "./CourtsBooking.styled";

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
      <CompanyHeader
        name={object.name}
        city={object.city}
        logo={object.logo}
        address={object.address}
        phone={object.phoneNumber}
        subHeader="Book a court"
      />
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
