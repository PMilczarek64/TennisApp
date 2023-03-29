import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getObjectById } from "../../Redux/objectsRedux";
import PriceListTable from "./PriceList/PriceListTable";
import CompanyHeader from "../../common/CompanyHeader/CompanyHeader";
import { Wrapper, MainInfoWrapper, Info, DetailLine, ObjectDescription } from "./CourtInfo.styled";
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
      <PriceListTable priceList={priceList} />
    </Wrapper>
  );
};

export default CourtInfo;