import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Label, Input } from "../common/Inputs.styles";
import { useParams } from "react-router-dom";
import clsx from "clsx";

const Wrapper = styled.div`
  width: 600px;
  height: 400px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;

&.hide {
  display: none;
}
`;

const FormItem = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &.right {
    justify-content: flex-end;
  }
  &.warn {
    p {
    color: red;
    }
  }
`;

const BookingForm = (showModal) => {
  console.log('test showModal', showModal.showModal)
  return (
    <Wrapper className={`${showModal.showModal === false && 'hide'}`}>
      <h2>Book tennis court num. </h2>
      <FormItem>
          <Label htmlFor="date">Date: </Label>
          <Input type="date" id="date" name="date" value=""></Input>
      </FormItem>
    </Wrapper>
  );
};


//BookingForm.PropTypes = {};


export default BookingForm;