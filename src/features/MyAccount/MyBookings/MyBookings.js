import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllEvents } from "../../../Redux/objectsRedux";
import RemoveBookingModal from "./RemoveBooking/RemoveBookingModal";
import { useState } from "react";
import HeaderBar from "../../../common/HeaderBar";
import { Wrapper, CardsWrapper } from "./MyBookings.styled";
import BookingCard from "./BookingCard/BookingCard";

const MyBookings = () => {
  const { userId } = useParams();
  const allFacilities = useSelector(getAllEvents);
  const myEvents = allFacilities.map((object) =>
    object.events.filter((event) => event.bookedByUser === userId)
  );

  const isAnyBookings = myEvents.find((event) => event.length > 0);

  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [objectId, setObjectId] = useState("");
  const [objectName] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");

  return (
    <>
      <HeaderBar value="Your Bookings" undo />
      <Wrapper>
        <h4>
          {isAnyBookings
            ? "Click on the widget to display the booking cancellation window"
            : "You don't have any reservations :("}
        </h4>
        <RemoveBookingModal
          bookingId={bookingId}
          objectId={objectId}
          objectName={objectName}
          eventStartDate={eventStartDate}
          showRemoveModal={showRemoveModal}
          setShowRemoveModal={setShowRemoveModal}
        />
        <CardsWrapper>
          {myEvents.map((object) =>
            object.map((event) => (
              <BookingCard
                key={event.id}
                event={event}
                setBookingId={setBookingId}
                setObjectId={setObjectId}
                setEventStartDate={setEventStartDate}
                setShowRemoveModal={setShowRemoveModal}
              />
            ))
          )}
        </CardsWrapper>
      </Wrapper>
    </>
  );
};

export default MyBookings;
