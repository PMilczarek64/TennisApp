import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import styled from "styled-components";
import CourtInfo from "../pages/CourtInfo";
import ContentNav from "./ContentNav";
import CourtsBooking from "./CourtsBooking";
import LoginForm from "./LoginForm";
import {
  getFirstFacilityByCity,
  getObjectById,
} from "../Redux/objectsRedux";
import { getLoggingInInfo } from "../Redux/usersRedux";
import { useSelector } from "react-redux";
import CourtsGallery from "./CourtsGallery/CourtsGallery";
import NotFound from "../views/404NotFound";

const Wrapper = styled.div``;

const Content = styled.div`
  margin: 0 150px 50px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1260px){
    margin: 0 50px 50px 50px;
  }
  @media screen and (max-width: 1110px){
    margin: 0 0 50px 0;
  }
`;

const ShowObject = () => {
  const { city, objectId } = useParams();
  const checkLoggedUser = useSelector(getLoggingInInfo);

  const checkCityURL = useSelector((state) =>
    getFirstFacilityByCity(state, city)
  );
  const checkObjectIdURL = useSelector((state) =>
    getObjectById(state, Number(objectId))
  );
  console.log("checking city ", checkCityURL);
  console.log("checking object id ", checkObjectIdURL);

  return (
    <Wrapper>
      { checkCityURL === undefined || checkObjectIdURL === undefined ?
      <NotFound message="uncorrect URL!" /> :
        <>
          <ContentNav objectId={Number(objectId)} city={city} />
          <Content>
            <Routes>
              <Route path="*" element={<CourtInfo objectId={objectId} />} />
              <Route path="Info" element={<CourtInfo objectId={objectId} />} />
              <Route
                path="Booking"
                element={
                  checkLoggedUser !== undefined ? (
                    <CourtsBooking objectId={objectId} />
                  ) : (
                    <LoginForm />
                  )
                }
              />
              <Route
                path="Gallery"
                element={<CourtsGallery objectId={objectId} />}
              />
            </Routes>
          </Content>
        </>
      }
    </Wrapper>
  );
};

export default ShowObject;
