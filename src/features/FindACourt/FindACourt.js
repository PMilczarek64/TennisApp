import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllCities } from "../../Redux/citiesRedux";
import { getObjectsByCity } from "../../Redux/objectsRedux";
import LocationForm from "./LocationForm/LocationForm";
import HeaderBar from "../../common/HeaderBar";
import CourtsList from "./CourtsList/CourtsList";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-block: 30px;
  @media screen and (max-width: 770px) {
    flex-direction: column;
    align-items: center;
  }
`;



const FindACourt = () => {
  const cities = useSelector(getAllCities);
  const [selectedCity, setSelectedCity] = useState("");
  const objects = useSelector((state) => getObjectsByCity(state, selectedCity));
  const navigate = useNavigate();
  const [objectId, setObjectId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    objectId === ""
      ? navigate("/courts/" + selectedCity)
      : navigate("/courts/" + selectedCity + "/" + objectId + "/Info");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e);
  };

  return (
    <Wrapper>
      <HeaderBar value="Find a court"></HeaderBar>
      <ContentWrapper>
        <LocationForm
          objects={objects}
          setObjectId={setObjectId}
          cities={cities}
          selectedCity={selectedCity}
          setSelectedCity={selectedCity}
          handleCityChange={handleCityChange}
          handleSubmit={handleSubmit}
        />
        <CourtsList objects={objects}/>
      </ContentWrapper>
    </Wrapper>
  );
};

export default FindACourt;
