import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllEvents } from "../Redux/store";
import RemoveBookingModal from "./RemoveBookingModal";
import moment from "moment";
import { useState } from "react";
import shortid from "shortid";

const Wrapper = styled.div`
  margin: 50px 50px 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    margin-inline: 0px;
  }
`;

const CardsWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: stretch;
  align-items: flex-start;
  @media (max-width: 600px) {
    margin-inline: 0px;
  }
`;

const Card = styled.div`
  max-width: 100%;
  min-height: 120px;
  margin: 20px;
  padding: 30px;
  border: solid 1px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h4 {
    color: black;
    font-size: 32px;
  }
  p {
    color: black;
  }
  :hover {
    cursor: pointer;
    transition: 0.4s ease-in-out;
    background-color: black;
    h4 {
    color: ${({ theme }) => theme.colors.detailGreen};
  }
  p {
    color: white;
  }
  }
`;

const MyBookings = () => {
  const { userId } = useParams();
  // const myBookings = useSelector((state) => getEventsByUserId(state, userId));
  const allObjects = useSelector(getAllEvents);
  const myEvents = allObjects.map((object) =>
    object.events.filter(
      (event) => Number(event.bookedByUser) === Number(userId)
    )
  );
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [objectId, setObjectId] = useState('');
  const [objectName] = useState('');
  const [eventStartDate, setEventStartDate] = useState('');
  console.log("allObjects ", allObjects);
  console.log("myEvents ", myEvents);

  const handleClick = (id, objId, startDate, ) => {
    setBookingId(id);
    setObjectId(objId);
    setEventStartDate(startDate);
    setShowRemoveModal(true);
    console.log('eId = ', bookingId + ' objId = ', objectId, objectName);
  }
  return (
    <Wrapper>
      <h2>Your Bookings</h2>
      <p>click on the widget to edit or cancel this booking</p>
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
            <Card onClick={(e) => handleClick(event.id, event.objectId, event.startDate, )} key={event.id}>
              {allObjects.map(
                (object) =>
                  object.id === event.objectId && 
                    <h4 key={shortid()}>{object.name}</h4>
              )}
              <p>Court: {event.court}</p>
              <p>Date: {moment(event.startDate).format("LL")}</p>
              <p>
                Booking hours:{" "}
                {moment(event.startDate).format("HH:mm") +
                  " - " +
                  moment(event.endDate).add(0.5, "h").format("HH:mm")}
              </p>
            </Card>
          ))
        )}
      </CardsWrapper>
    </Wrapper>
  );
};

export default MyBookings;
