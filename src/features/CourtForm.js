import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllCities, getObjectsByCity } from "../Redux/store";
import { Select } from "../common/Inputs.styles";
import HeaderBar from "../common/HeaderBar";
import shortid from "shortid";
import CompanyCard from "../common/CompanyCard";

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
`;

const LocationForm = styled.form`
  min-width: 20%;
  min-height: 100%;
  padding: 60px 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 20px;
  button {
    margin-left: 70%;
    background: ${({ theme }) => theme.colors.detailGreen};
    border: none;
    border-radius: 10px;
    padding: 10px 15px;
    margin-block: 10px;
    font-size: 18px;
    cursor: pointer;
  }
`;

const CourtsList = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-left: 2px solid;
  border-color: ${({ theme }) => theme.colors.strongFaded};
`;

const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 5px;
`;

const CourtForm = () => {
  const cities = useSelector(getAllCities);
  const [selectedCity, setSelectedCity] = useState("");
  const objects = useSelector((state) => getObjectsByCity(state, selectedCity));
  const navigate = useNavigate();
  const objectId = "";

  const handleCityChange = (e) => {
    setSelectedCity(e);
  };

  const handleObjectIdChange = (e) => {
    objectId = e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    objectId === ""
      ? navigate("/courts/" + selectedCity)
      : navigate("/courts/" + selectedCity + "/" + objectId + "/Info");
  };

  return (
    <Wrapper>
      <HeaderBar value="Find a court"></HeaderBar>
      <ContentWrapper>
        <LocationForm>
          <h4>Location:</h4>
          <FormItem>
            <label htmlFor="city">City: </label>
            <Select
              id="city"
              name="city"
              onChange={(e) => handleCityChange(e.target.value)}
            >
              <option
                value=""
                key={shortid()}
                selected={selectedCity === "" ? true : false}
              >
                all cities
              </option>
              {cities.map((city) => (
                <option value={city} key={city}>{city}</option>
              ))}
            </Select>
          </FormItem>
          <FormItem>
            <label htmlFor="object">Object: </label>
            <Select
              type="select"
              name="object"
              disabled={selectedCity.length > 2 ? false : true}
              onChange={(e) => handleObjectIdChange(e.target.value)}
            >
              <option value="" key={shortid()}>all</option>
              {objects.map((object) => (
                <option value={object.id} key={object.id}>
                  {object.name} {object.address}
                </option>
              ))}
            </Select>
          </FormItem>
          <button onClick={handleSubmit}>Show</button>
        </LocationForm>
        <CourtsList>
          {objects.map((object) => (
            <CompanyCard
              city={object.city}
              name={object.name}
              logo={object.logo}
              id={object.id}
            />
          ))}
        </CourtsList>
      </ContentWrapper>
    </Wrapper>
  );
};

export default CourtForm;
