import moment from "moment/moment";
import React, { useState } from "react";
import shortid from "shortid";
import { formatHourToNumber, formatNumberToHour } from "../../../utils";
import BookingForm from "../BookingForm/BookingForm";
import { useSelector } from "react-redux";
import { getLoggingInInfo } from "../../../Redux/usersRedux";
import EditBooking from "../EditBooking/EditBooking";
import { Table } from "./BookingTable.styled";

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
}) => {
  const [selectedCourt, setSelectedCourt] = useState(1);
  const freeHours = [];
  const busyHours = [];
  const loggedUser = useSelector(getLoggingInInfo);
  const [bookingId, setBookingId] = useState("");
  const [selectedEndHour, setSelectedEndHour] = useState();

  const handleBooking = (hour, court, bookingId) => {
    setSelectedHour(hour);
    setSelectedCourt(court);
    setBookingId(bookingId);
    setShowBookingForm(true);
  };

  const handleEdit = () => {
    setShowEditBooking(true);
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

  const checkIfTermExpired = (hour) => {
    if (
      moment(tableDate).format("L") === moment().format("L") &&
      formatNumberToHour(hour) > moment(tableDate).format("HH:mm")
    ) {
      return true;
    } else if (moment(tableDate).format("L") !== moment().format("L")) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
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
        selectedEndHour={selectedEndHour}
        setSelectedEndHour={setSelectedEndHour}
      />
      <EditBooking
        showEditBooking={showEditBooking}
        setShowEditBooking={setShowEditBooking}
        userId={loggedUser.id}
      />
      <Table>
        <thead>
          <tr>
            <td className="header">Hours</td>
            {courts.map((court) => (
              <td key={court.id} className="header">
                Court {court.id}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {possibleHours.map(
            (hour) =>
              checkIfTermExpired(hour) && (
                <tr key={hour}>
                  <td className="hour">{hour}</td>
                  {courts.map((court) =>
                    checkIfBusy(court.id, hour)
                      ? busyHours.push({ courtId: court.id, hour: hour }) &&
                        (checkIfBusyByYou(court.id, hour) ? (
                          <td
                            className="busyByYou"
                            key={shortid()}
                            onClick={(e) => handleEdit()}
                          >
                            Booked by YOU
                          </td>
                        ) : (
                          <td className="busy" key={shortid()}>
                            busy
                          </td>
                        ))
                      : freeHours.push({ courtId: court.id, hour: hour }) && (
                          <td
                            className="free"
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
              )
          )}
        </tbody>
      </Table>
    </>
  );
};

export default BookingTable;
