import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllCities, getObjectsByCity, getFirstCourtByCity, getLoggingInInfo } from "../Redux/store";
import { Select } from "../common/Inputs.styles";
import HeaderBar from "../common/HeaderBar";
import Net from '../assets/images/Net.jpg'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


const LocationForm = styled.form`
  width: 25%;
  padding: 60px 100px;
  display: flex;
  flex-direction: column;
  text-align: start;
  font-size: 20px;
  border-right: 2px solid;
  border-color: #00000020;;
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

const FormItem = styled.div`
height: 35px;
display: flex;
align-items: center;
justify-content: space-between;
margin-block: 10px;
`;

const CourtForm = () => {
  const cities = useSelector(getAllCities);
  const [selectedCity, setSelectedCity] = useState(cities[0].toString());
  const objects = useSelector(state => getObjectsByCity(state, selectedCity));
  let objectId = '';
  console.log(useSelector(getLoggingInInfo));

  console.log('object id: ', objectId);
  const navigate = useNavigate();
    const handleCityChange = (e) => {
      setSelectedCity(e);
    }

    const handleObjectIdChange = (e) => {
      console.log('e test',e)
      objectId = e;
    }

    console.log('object test from city', useSelector(state => getFirstCourtByCity(state, selectedCity).id));
    const handleSubmit = (e) => {
      e.preventDefault();
      objectId === '' ?  navigate('/courts/' +  selectedCity + '/') :
                         navigate('/courts/' +  selectedCity + '/' + objectId + '/Info');
    };
 
  console.log(selectedCity);
  return (
    <Wrapper>
      <HeaderBar value='Find a court'></HeaderBar>
      <LocationForm>
        <h4>Location:</h4>
        <FormItem >
          <label htmlFor="city">City: </label>
          <Select id="city" name="city" onChange={e => handleCityChange(e.target.value)}>
            {cities.map(city => (
             <option value={city} key={city}>{city}</option>
            ))}
          </Select>
        </FormItem>
        <FormItem>
          <label htmlFor="object">Object: </label>
          <Select type="select" name="object" onChange={e => handleObjectIdChange(e.target.value)}>
            <option value=''>all</option>
            {objects.map(object => 
            <option value={object.id} key={object.id}>{object.name} {object.address}</option>
            )}
          </Select>
        </FormItem>
        <button onClick={handleSubmit}>Submit</button>
      </LocationForm>
    </Wrapper>
  );
};

export default CourtForm;