import moment from "moment/moment";
import React, { useState } from "react";
import shortid from "shortid";
import styled from "styled-components";
import { formatHourToNumber } from "../utils";
import BookingForm from "./BookingForm";
import { useSelector } from "react-redux";
import { getLoggingInInfo } from "../Redux/store";
import EditBooking from "./EditBooking";
import RemoveBookingModal from "./RemoveBookingModal";

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
      color: ${({ theme }) => theme.colors.darkGrey};
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
    &.yellow {
      background: linear-gradient(70deg, transparent, rgb(255, 255, 255));
      color: rgba(156, 202, 27, 0.871);
      cursor: pointer;
    }
    :hover {
      opacity: 0.9;
    }
  }
`;

const BookingTable = ({
  courts,
  possibleHours,
  events,
  showModal,
  setShowBookingForm,
  selectedHour,
  setSelectedHour,
  tableDate,
  showEditBooking,
  setShowEditBooking,
  showRemoveModal,
  setShowRemoveModal,
}) => {
  const [selectedCourt, setSelectedCourt] = useState(1);
  const freeHours = [];
  const busyHours = [];
  const loggedUser = useSelector(getLoggingInInfo);
  const [bookingId, setBookingId] = useState("");

  const handleBooking = (hour, court, bookingId) => {
    setSelectedHour(hour);
    setSelectedCourt(court);
    setBookingId(bookingId);
    console.log("bookingId: ", bookingId);
    setShowBookingForm(true);
  };

  const handleEdit = (hour, court, bookingId) => {
    setSelectedHour(hour);
    setSelectedCourt(court);
    setBookingId(bookingId);
    setShowEditBooking(true);
  };

  const handleRemove = (hour, court, bookingId) => {
    setSelectedHour(hour);
    setSelectedCourt(court);
    setBookingId(bookingId);
    setShowRemoveModal(true);
  };

  const checkIfBusy = (courtId, hour) =>
    events.some(
      (event) =>
        (event.court === courtId &&
          moment(event.startDate).format("HH:mm") <= hour &&
          moment(event.endDate).format("HH:mm") >= hour &&
          moment(event.startDate).format("YYYY/MM/DD") ===
            moment(tableDate).format("YYYY/MM/DD")) ||
        (event.court === courtId &&
          moment(event.startDate).format("HH:mm") <= hour &&
          moment(event.endDate).format("HH:mm") >= hour &&
          event.repeat === true)
    );

  const checkIfBusyByYou = (courtId, hour) =>
    events.some(
      (event) =>
        event.court === courtId &&
        moment(event.startDate).format("HH:mm") <= hour &&
        moment(event.endDate).format("HH:mm") >= hour &&
        moment(event.startDate).format("YYYY/MM/DD") ===
          moment(tableDate).format("YYYY/MM/DD") &&
        Number(event.bookedByUser) === Number(loggedUser.id) &&
        event.bookedByUser !== undefined
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
        tableDate={tableDate}
        bookingId={bookingId}
      />
      <EditBooking
        showEditBooking={showEditBooking}
        setShowEditBooking={setShowEditBooking}
        fromHour={selectedHour}
        selectedCourt={selectedCourt}
        freeHours={freeHours}
        busyHours={busyHours}
        setSelectedHour={setSelectedHour}
        tableDate={tableDate}
        bookingId={bookingId}
      />
      <RemoveBookingModal 
        showEditBooking={showEditBooking}
        setShowEditBooking={setShowEditBooking}
        fromHour={selectedHour}
        selectedCourt={selectedCourt}
        freeHours={freeHours}
        busyHours={busyHours}
        setSelectedHour={setSelectedHour}
        tableDate={tableDate}
        bookingId={bookingId}
        showRemoveModal={showRemoveModal}
        setShowRemoveModal={setShowRemoveModal}

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
                ? busyHours.push({ courtId: court.id, hour: hour }) &&
                  (checkIfBusyByYou(court.id, hour) ? (
                    <td
                      className="yellow"
                      id={shortid()}
                      key={shortid()}
                      onClick={(e) =>
                        handleRemove(
                          formatHourToNumber(hour),
                          court.id,
                          e.target.id
                        )
                      }
                    >
                      Booked by YOU
                    </td>
                  ) : (
                    <td className="red" key={shortid()}>
                      busy
                    </td>
                  ))
                : freeHours.push({ courtId: court.id, hour: hour }) && (
                    <td
                      className="green"
                      key={shortid()}
                      id={shortid()}
                      onClick={(e) =>
                        handleBooking(
                          formatHourToNumber(hour),
                          court.id,
                          e.target.id
                        )
                      }
                    >
                      free
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
