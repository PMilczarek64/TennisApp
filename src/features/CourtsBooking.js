import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getObjectById } from "../Redux/store";

const Wrapper = styled.div`
  margin: 50px 100px;
  display: flex;
  justify-content: space-around;
`;

const Table = styled.table`
  width: 1000px;
  background: linear-gradient(90deg, #ddff00 0%, rgb(255, 231, 76) 100%);
  padding: 20px;
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

const CourtsBooking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const parsedDate =
    startDate.getFullYear() +
    "/" +
    (startDate.getMonth() + 1) +
    "/" +
    startDate.getUTCDate();
  const { objectId } = useParams();
  const object = useSelector((state) => getObjectById(state, Number(objectId)));
  const events = useSelector((state) =>
    getObjectById(state, Number(objectId)),
  ).events;
  const courts = useSelector((state) =>
    getObjectById(state, Number(objectId)),
  ).courts;
  const openingHour = object.contentData[0].openingHour;
  const closingHour = object.contentData[0].closingHour;
  const possibleHours = [];

  console.log(parsedDate, "parsedDtae");

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

  checkAndFormatPossibleHours();
  possibleHours.map((item) => console.log(item));

  console.log("courts in tables ", openingHour, closingHour);
  console.log(parsedDate, "test parsedDate");
  return (
    <Wrapper>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
      />
      <Table>
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
                    event.court == court.id &&
                    event.fromHour <= hour &&
                    event.toHour >= hour &&
                    event.date === parsedDate,
                ) ? (
                  <td className="red">busy</td>
                ) : (
                  <td className="green">book</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default CourtsBooking;
