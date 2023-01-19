import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import styled from "styled-components";
import CourtInfo from "../pages/CourtInfo";
import ContentNav from "./ContentNav";
import CourtsBooking from "./CourtsBooking";
import LoginForm from "./LoginForm";
import { getLoggingInInfo } from "../Redux/store";
import { useSelector } from "react-redux";
import CourtsGallery from "./CourtsGallery/CourtsGallery";


const Wrapper = styled.div`
`;

const Content = styled.div`
  margin: 0 150px 50px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShowObject = () => {
  const { city, objectId } = useParams();
  const checkLoggedUser = useSelector(getLoggingInInfo);

  return (
      <Wrapper>
        <ContentNav objectId={Number(objectId)} city={city} />
        <Content>
          <Routes>
            <Route path="Info" element={<CourtInfo objectId={objectId} />} />
            <Route path="Booking" element={checkLoggedUser !== undefined ? <CourtsBooking objectId={objectId} /> : <LoginForm/>} />
            <Route path="Gallery" element={<CourtsGallery objectId={objectId} />} />
          </Routes>
        </Content>
      </Wrapper>
  );
};

export default ShowObject;