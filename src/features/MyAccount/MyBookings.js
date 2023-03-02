import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllEvents } from "../../Redux/objectsRedux";
import RemoveBookingModal from "../RemoveBookingModal";
import moment from "moment";
import { useState } from "react";
import shortid from "shortid";
import HeaderBar from "../../common/HeaderBar";

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
  const allObjects = useSelector(getAllEvents);
  const myEvents = allObjects.map((object) =>
    object.events.filter((event) => event.bookedByUser === userId)
  );

  const isAnyBookings = myEvents.find((event) => event.length > 0);

  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [objectId, setObjectId] = useState("");
  const [objectName] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");

  const handleClick = (id, objId, startDate) => {
    setBookingId(id);
    setObjectId(objId);
    setEventStartDate(startDate);
    setShowRemoveModal(true);
  };
  return (
    <>
      <HeaderBar value="Your Bookings" undo/>
      <Wrapper>
        {isAnyBookings !== undefined ? (
          <h4>
            Click on the widget to display the booking cancellation window
          </h4>
        ) : (
          <h4>You don't have any reservations :(</h4>
        )}
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
              <Card
                onClick={(e) =>
                  handleClick(event.id, event.objectId, event.startDate)
                }
                key={event.id}
              >
                {allObjects.map(
                  (object) =>
                    object.id === event.objectId && (
                      <h4 key={shortid()}>{object.name}</h4>
                    )
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
    </>
  );
};

export default MyBookings;
