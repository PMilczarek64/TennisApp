import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Input, Label, Select } from "../common/Inputs.styles";
import { getAllCities } from "../Redux/store";
import styled from "styled-components";
import { ButtonGreen } from "../common/Button";

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const EditObject = ({ property }) => {
  const cities = useSelector(getAllCities);
  const [objectName, setObjectName] = useState(property.name);
  const [objectAddress, setObjectAddress] = useState(property.address);
  const [objectPhone, setObjectPhone] = useState(property.phoneNumber);
  const [objectEmail, setObjectEmail] = useState(property.email);
  const [objectWebsite, setObjectWebsite] = useState(property.website);
  return (
    <Form>
      <FormItem>
        <Label htmlFor="username">Object name: </Label>
        <Input type="text" id="name" name="name" value={objectName} onChange={e => setObjectName(e.target.value)}></Input>
      </FormItem>
      <FormItem>
        <Label htmlFor="city">City: </Label>
        <Select id="city" name="city">
          {cities.map(city => (
            <option value={city} key={city}>{city}</option>
          ))}
        </Select>
      </FormItem>
      <FormItem>
        <Label htmlFor="address">Address: </Label>
        <Input type="text" id="address" name="address" value={objectAddress} onChange={e => setObjectAddress(e.target.value)}></Input>
      </FormItem>
      <FormItem>
        <Label htmlFor="phone">Phone: </Label>
        <Input type="text" id="phone" name="phone" value={objectPhone} onChange={e => setObjectPhone(e.target.value)}></Input>
      </FormItem>
      <FormItem>
        <Label htmlFor="phone">Email: </Label>
        <Input type="text" id="email" name="email" value={objectEmail} onChange={e => setObjectEmail(e.target.value)}></Input>
      </FormItem>
      <FormItem>
        <Label htmlFor="website">Website: </Label>
        <Input type="text" id="website" name="website" value={objectWebsite} onChange={e => setObjectWebsite(e.target.value)}></Input>
      </FormItem>
      <FormItem><ButtonGreen>Save</ButtonGreen></FormItem>
    </Form>
  )
};

export default EditObject;