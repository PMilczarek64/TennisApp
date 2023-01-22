import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getObjectById } from "../Redux/store";
import PriceListTable from "../features/PriceListTable";
import CompanyHeader from "../common/CompanyHeader";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 24px -10px rgba(66, 68, 90, 1);
  h4 {
    margin-bottom: 15px;
  }
`;

const MainInfoWrapper = styled.div`
  display: flex;
  padding-block: 20px;
  flex-direction: row;
  justify-content: space-between;
  padding-inline: 50px;
  @media screen and (max-width: 670px){
    flex-direction: column;
    align-items: center;
    padding-block: 0;
  }
  @media screen and (max-width: 460px){
    padding: 0;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 670px){
    align-items: center;
    margin: 25px;
  }
`;

const ObjectDescription = styled.div`
  padding-inline: 50px;
`;

const DetailLine = styled.span`
  margin-inline: 50px;
  margin-block: 20px;
  height: 3px;
  border-bottom: 3px solid #026592;
  &.first {
    margin-top: 0;
  }
  &.mobile {
    width: 130px;
    border-bottom: 2px solid #026592;
    @media screen and (min-width: 670px){
      display: none;
    }
  }
  @media screen and (max-width: 460px){
    margin-inline: 0;
  }
`;

const CourtInfo = () => {
  const { objectId } = useParams();
  const object = useSelector(state => getObjectById(state, Number(objectId)));
  const courts = object.courts;
  const priceList = object.priceListCourt[0];
  const uniqueCourts = new Set(courts.map(court => court.type + ', '));
  const infoData = object.contentData[0];
  const objectDescription = infoData.description;
  return (
    <Wrapper> 
      <CompanyHeader name={object.name} city={object.city} logo={object.logo} address={object.address} phone={object.phoneNumber} subHeader="Info"/>
      <DetailLine className="first"/>
      <MainInfoWrapper>
        <Info>
          <h4>Contact details</h4>
          <p><b>Phone number:</b> {object.phoneNumber}</p>
          <p><b>Email:</b> {object.email}</p>
          <p><b>Website:</b> {object.website}</p>
        </Info>
        <DetailLine className="mobile"/>
        <Info>
          <h4>Info about the courts</h4>
          <p><b>Opening hours:</b> {infoData.openingHour} - {infoData.closingHour}</p>
          <p><b>Number of courts:</b> {courts.length}</p>
          <p><b>Types of surfaces: </b>{uniqueCourts}</p>
        </Info>
      </MainInfoWrapper>
      <DetailLine />
      <ObjectDescription>
      <h4>About us</h4>
        <p>{objectDescription}</p>
      </ObjectDescription>
      <DetailLine />
      <h4>Our Services</h4>
      <ObjectDescription>
        <p>GROUP ACTIVITIES OF TENNIS</p>
        <p>INDIVIDUAL CLASSES</p>
        <p>SPORTS SEMI-COLLONS</p>
        <p>SPORTS CAMPS</p>
        <p>RENTAL OF A MACHINE FOR THROWING BALLS</p>
        <p>STRETCHING A ROCKET</p>
        <p>RENT A SPORTS ROOM 30m2 (adapted to table tennis, individual training, massage)</p>
      </ObjectDescription>
      <DetailLine />
      <h4>Price list</h4>
      <ObjectDescription>
        <p>Monday - Friday 7.00-14.00 - 100 PLN / 1h</p>
        <p>Monday - Friday 15.00-22.00 - PLN 120 / 1h</p>
        <p>SATURDAY - SUNDAY 7.00-22.00 - 110 PLN / 1h</p>
        <p>WE ACCEPT MULTISPORT PLUS CARDS, FITPROFIT - Discount for holders of PLN 15 (discount regulations available on the card issuer's website)</p>
        <p>ROCKETS AND BALLS ARE AVAILABLE FOR THE GAME FOR FREE</p>
      </ObjectDescription>
      <PriceListTable priceList={priceList} className="mobile-hide"/>
    </Wrapper>
  );
};

export default CourtInfo;