import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderBar = styled.div`
  height: 90px;
  width: 100%;
  background: linear-gradient(180deg, rgba(224,224,224,0.4962359943977591) 0%, rgba(250,250,250,0.8603816526610644) 50%, rgba(224,224,224,1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -1px 13px 24px -18px rgba(66, 68, 90, 1);
  h2 {
  color: #000000ae;
  }
`;

const LocationForm = styled.form`
  width: 30%;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  margin-block: 50px;
  text-align: start;
  font-size: 20px;
  button {
    margin-left: 70%;
    background: ${({theme}) => theme.colors.detailGreen};
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
  select {
    padding: 7px;
    width: 180px;
    border-radius: 5px;
    font-size: 18px;
  }
`;

const CourtBooking = () => {
  return (
    <Wrapper>
      <HeaderBar>
        <h2>Find a court</h2>
      </HeaderBar>
      <LocationForm>
        <h4>Location:</h4>
        <FormItem>
          <label htmlFor="city">City: </label>
          <select id="city" name="city">
            <option value="Cracow">Cracow</option>
            <option value="Warsaw">Warsaw</option>
          </select>
        </FormItem>
        <FormItem>
          <label htmlFor="object">Object: </label>
          <select type="select" name="object">
            <option value="example 1">Example 1</option>
            <option value="example 2">Example 2</option>
            <option value="example 3">Example 3</option>
          </select>
        </FormItem>
        <button>Submit</button>
      </LocationForm>
    </Wrapper>
  );
};

export default CourtBooking;