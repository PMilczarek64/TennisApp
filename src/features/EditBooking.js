import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { ButtonGreenOutline, ButtonRedOutline } from "../common/Button";
import { useNavigate} from "react-router-dom";

const BorderWrapper = styled.div`
  padding: 20px;
  width: 600px;
  height: auto;
  background: linear-gradient(90deg, #ddff00 0%, rgb(255, 231, 76) 100%);
  z-index: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &.hide {
    display: none;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 1;
`;

const Header = styled.h2`
  font-weight: 500;
  padding-block: 20px;
  border: 1px;
  border-color: ${({ theme }) => theme.colors.faded};
  border-style: none none solid none;
`;

const FormItem = styled.div`
  padding: 10px;
  margin-inline: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  :last-child {
    margin-bottom: 10px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
`;

const EditBooking = ({ showEditBooking, setShowEditBooking, userId }) => {
  const navigate = useNavigate();
  const handleCLose = () => {
    setShowEditBooking(false);
  };

  const handleEdit = () => {
    navigate("/myaccount/" + userId + "/bookings");
  };

  return (
    <BorderWrapper className={showEditBooking === false && "hide"}>
      <Wrapper>
        <Header>Do you want to cancel this reservation?</Header>
        <FormItem>
          <h4>Go to the booking management panel</h4>
        </FormItem>
      </Wrapper>
      <ButtonsWrapper>
        <ButtonRedOutline onClick={() => handleCLose()}>Close</ButtonRedOutline>
        <ButtonGreenOutline onClick={() => handleEdit()}>Yes</ButtonGreenOutline>
      </ButtonsWrapper>
    </BorderWrapper>
  );
};

EditBooking.propTypes = {
  setShowEditBooking: propTypes.func,
};

export default EditBooking;
