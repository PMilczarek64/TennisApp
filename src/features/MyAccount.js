import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: black;
  }
`;

const Object = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
  background: linear-gradient(180deg, rgba(224,224,224,0.4962359943977591) 0%, rgba(250,250,250,0.8603816526610644) 50%, rgba(224,224,224,1) 100%);
  cursor: pointer;
`;


const MyAccount = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  console.log('test userId ', userId)

  return (
    <Wrapper>
      <Object onClick={() => navigate('/myaccount/' + userId + '/bookings')}><h4>My Bookings</h4></Object>
    </Wrapper>
  );
};

export default MyAccount;