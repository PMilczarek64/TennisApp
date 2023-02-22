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
  padding-block: 30px;
  @media screen and (max-width: 770px){
    flex-direction: column;
    align-items: center;
  }
`;

const LocationForm = styled.form`
  min-width: 200px;
  min-height: 100%;
  padding: 60px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  button {
    width: 100%;
    margin: 0;
    background: linear-gradient(90deg, #ddff00 0%, rgb(255, 231, 76) 100%);
    border: none;
    border-radius: 7px;
    padding: 10px 15px;
    margin-block: 10px;
    font-size: 18px;
    cursor: pointer;
  }
  h4 {
    margin-bottom: 10px;
  }
  label {
    font-size: 17px;
  }
  @media screen and (max-width: 770px){
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 20px 0;
     button {
      margin-block: 0;
    }
    h4 {
      display: none;
    }
  }
  @media screen and (max-width: 546px){
    flex-direction: column;
    width: 85%;
    button {
    height: 60px;
    }
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
  p {
    color: black;
  }
  @media screen and (max-width: 770px){
    width: 90%;
    padding: 20px;
  }
`;

const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 5px;
  width: 100%;
  @media screen and (max-width: 546px){
    margin: 5px 0;
    align-items: center;
    select {
      width: 100%;
      height: 60px;
      font-size: 23px;
    }
    label {
      font-size: 23px;
      margin-bottom: 2px;
    }
  }
`;

const CourtForm = () => {
  const cities = useSelector(getAllCities);
  const [selectedCity, setSelectedCity] = useState("");
  const objects = useSelector((state) => getObjectsByCity(state, selectedCity));
  const navigate = useNavigate();
  const [objectId, setObjectId] = useState("");

  const handleCityChange = (e) => {
    setSelectedCity(e);
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
              onChange={(e) => setObjectId(e.target.value)}
            >
              <option value="" key={shortid()}>all</option>
              {objects.map((object) => (
                <option value={object.id} key={object.id}>
                  {object.name} {object.address}
                </option>
              ))}
            </Select>
          </FormItem>
          <button onClick={handleSubmit}>Search</button>
        </LocationForm>
        <CourtsList>
          {objects.map((object) => (
            <CompanyCard
              key={shortid()}
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
