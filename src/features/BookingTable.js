import moment from "moment/moment";
import React, { useState } from "react";
import shortid from "shortid";
import styled from "styled-components";
import { formatHourToNumber } from "../utils";
import BookingForm from "./BookingForm";

const Table = styled.table`
  width: 1000px;
  background: linear-gradient(90deg, #ddff00 0%, rgb(255, 231, 76) 100%);
  padding: 20px;
  margin-left: 20px;
  &.red {
    background: linear-gradient(90deg, rgb(247, 200, 200), rgb(255, 141, 141));
  }
  td,
  th {
    padding: 15px 40px;
    font-weight: 800;
    background-color: white;
    &.green {
      color: green;
      cursor: pointer;
    }
    &.red {
      color: white;
      cursor: not-allowed;
      background: linear-gradient(
        90deg,
        rgb(247, 200, 200),
        rgb(255, 141, 141)
      );
    }
    &.hour {
      opacity: 0.9;
    }
    &.header {
      color: #ddff00;
      font-weight: 800;
      font-size: 24px;
      opacity: 1;
    }
    &.green,
    &.red {
      :hover {
        opacity: 0.9;
      }
    }
  }
`;

const BookingTable = ({
  courts,
  possibleHours,
  events,
  showModal,
  setShowBookingForm,
}) => {
  const [selectedHour, setSelectedHour] = useState(possibleHours[0]);
  const [selectedCourt, setSelectedCourt] = useState(1);
  const freeHours = [];
  const busyHours = [];

  const handleBooking = (hour, court) => {
    setSelectedHour(hour);
    setSelectedCourt(court);
    setShowBookingForm(true);
  };

  const checkIfBusy = (courtId, hour) =>
    events.some(
      (event) =>
        (event.court === courtId &&
          moment(event.startDate).format("HH:mm") <= hour &&
          moment(event.endDate).format("HH:mm") >= hour &&
          moment(event.startDate).format("YYYY/MM/DD") ===
            moment().format("YYYY/MM/DD") &&
          event.daily !== true) ||
        (event.court === courtId &&
          moment(event.startDate).format("HH:mm") <= hour &&
          moment(event.endDate).format("HH:mm") >= hour &&
          event.daily === true),
    );

  return (
    <Table>
      <BookingForm
        showModal={showModal}
        setShowBookingForm={setShowBookingForm}
        fromHour={selectedHour}
        selectedCourt={selectedCourt}
        freeHours={freeHours}
        busyHours={busyHours}
        setSelectedHour={setSelectedHour}
      />
      <thead>
        <tr>
          <th className="header">Hours</th>
          {courts.map((court) => (
            <th key={court.id} className="header">
              Court {court.id}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {possibleHours.map((hour) => (
          <tr key={hour}>
            <td className="hour">{hour}</td>
            {courts.map((court) =>
              checkIfBusy(court.id, hour)
                ? busyHours.push({ courtId: court.id, hour: hour }) && (
                    <td className="red" key={shortid()}>
                      busy
                    </td>
                  )
                : freeHours.push({ courtId: court.id, hour: hour }) && (
                    <td
                      className="green"
                      key={shortid()}
                      onClick={() =>
                        handleBooking(formatHourToNumber(hour), court.id)
                      }
                    >
                      book{" "}
                    </td>
                  ),
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

//BookingTable.PropTypes = {};

export default BookingTable;
