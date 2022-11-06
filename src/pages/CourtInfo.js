import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getObjectById } from "../Redux/store";
import PriceListTable from "../features/PriceListTable";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  box-shadow: 0px 5px 24px -10px rgba(66, 68, 90, 1);
`;

const MainInfoWrapper = styled.div`
  display: flex;
  margin: 30px;
  flex-direction: row;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-block: 30px;
`;

const ObjectDescription = styled.div`
margin-block: 30px;
  
`;

const CourtInfo = () => {
  const { objectId, city } = useParams();
  const object = useSelector(state => getObjectById(state, Number(objectId)));
  const courts = object.courts;
  const priceList = object.priceListCourt[0];
  const uniqueCourts = new Set(courts.map(court => court.type + ', '));
  console.log("priceList", priceList);
  const infoData = object.contentData[0];
  const objectDescription = infoData.description;
  return (
    <Wrapper>
      <h2>{object.name} {city}</h2>
      <h4>{object.address}</h4>
      <MainInfoWrapper>
        <Info>
          <h4>Contact details</h4>
          <p><b>Phone number:</b> {object.phoneNumber}</p>
          <p><b>Email:</b> {object.email}</p>
          <p><b>Website:</b> {object.website}</p>
        </Info>
        <Info>
          <h4>Info about the courts</h4>
          <p><b>Opening hours:</b> {infoData.openingHour} - {infoData.closingHour}</p>
          <p><b>Number of courts:</b> {courts.length}</p>
          <p><b>Types of surfaces: </b>{uniqueCourts}</p>
        </Info>
      </MainInfoWrapper>
      <h4>About us</h4>
      <ObjectDescription>
        <p>{objectDescription}</p>
      </ObjectDescription>
      <h4>Our Services</h4>
      <Info>
        <p>GROUP ACTIVITIES OF TENNIS</p>
        <p>INDIVIDUAL CLASSES</p>
        <p>SPORTS SEMI-COLLONS</p>
        <p>SPORTS CAMPS</p>
        <p>RENTAL OF A MACHINE FOR THROWING BALLS</p>
        <p>STRETCHING A ROCKET</p>
        <p>RENT A SPORTS ROOM 30m2 (adapted to table tennis, individual training, massage)</p>
      </Info>
      <h4>Price list</h4>
      <Info>
        <p>Monday - Friday 7.00-14.00 - 100 PLN / 1h</p>
        <p>Monday - Friday 15.00-22.00 - PLN 120 / 1h</p>
        <p>SATURDAY - SUNDAY 7.00-22.00 - 110 PLN / 1h</p>
        <p>WE ACCEPT MULTISPORT PLUS CARDS, FITPROFIT - Discount for holders of PLN 15 (discount regulations available on the card issuer's website)</p>
        <p>ROCKETS AND BALLS ARE AVAILABLE FOR THE GAME FOR FREE</p>
      </Info>
      <PriceListTable priceList={priceList}/>
    </Wrapper>
  );
};

export default CourtInfo;