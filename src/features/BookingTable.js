import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import shortid from "shortid";
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
  parsedDate,
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

  return (
    <Table>
      <BookingForm
        showModal={showModal}
        setShowBookingForm={setShowBookingForm}
        fromHour={selectedHour}
        selectedCourt={selectedCourt}
        date={parsedDate}
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
              events.some(
                (event) =>
                  (event.court == court.id &&
                    event.fromHour <= hour &&
                    event.toHour >= hour &&
                    event.date === parsedDate &&
                    event.daily !== true) ||
                  (event.court == court.id &&
                    event.fromHour <= hour &&
                    event.toHour >= hour &&
                    event.daily === true)
              ) ? ( busyHours.push({courtId: court.id, hour: hour}) &&
                <td className="red" key={shortid()}>
                  busy
                </td>
              ) : ( freeHours.push({courtId: court.id, hour: hour}) && 
                <td
                  className="green"
                  key={shortid()}
                  onClick={() => handleBooking({hour}, court.id)}
                >
                  book{" "}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

//BookingTable.PropTypes = {};

export default BookingTable;
