import React from "react";
import moment from "moment";
import propTypes from "prop-types";
import { useSelector } from "react-redux";
import { getObjectById } from "../../../../Redux/objectsRedux";
import { Wrapper } from "./BookingCard.styled";

const BookingCard = ({
  event,
  setBookingId,
  setObjectId,
  setEventStartDate,
  setShowRemoveModal,
}) => {
  const facilityData = useSelector((state) =>
    getObjectById(state, Number(event.objectId))
  );

  const handleClick = (id, objId, startDate) => {
    setBookingId(id);
    setObjectId(objId);
    setEventStartDate(startDate);
    setShowRemoveModal(true);
  };

  return (
    <Wrapper
      onClick={() => handleClick(event.id, event.objectId, event.startDate)}
    >
      <h4>{facilityData.name}</h4>
      <p>Court: {event.court}</p>
      <p>Date: {moment(event.startDate).format("LL")}</p>
      <p>
        Booking hours:{" "}
        {moment(event.startDate).format("HH:mm") +
          " - " +
          moment(event.endDate).add(0.5, "h").format("HH:mm")}
      </p>
    </Wrapper>
  );
};

BookingCard.propTypes = {
  event: propTypes.object.isRequired,
  setBookingId: propTypes.func,
  setObjectId: propTypes.func,
  setEventStartDate: propTypes.func,
  setShowRemoveModal: propTypes.func,
};

export default BookingCard;
