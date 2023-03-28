import React from "react";
import styled from "styled-components";
import HeaderBar from "../../common/HeaderBar";
import ChangePassword from "../Auth/ChangePassword/ChangePassword";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: black;
  }
`;

const AccountSettings = () => {
  return (
    <Wrapper>
      <HeaderBar value="Settings" undo/>
      <ChangePassword />
    </Wrapper>
  );
};

export default AccountSettings;
