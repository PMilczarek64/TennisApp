import React from "react";
import styled from "styled-components";
import HeaderBar from "../common/HeaderBar";

const Wrapper = styled.div`
  h3 {
    color: black;
  }
`;

const ContentWrapper = styled.div`
  margin-block: 30px;
`;

const NotFound = ({ message }) => {
  return (
    <Wrapper>
      <HeaderBar value="Error"></HeaderBar>
      <ContentWrapper>
        <h3>404 Page not found...</h3>
        {message && <h3>{message}</h3>}
      </ContentWrapper>
    </Wrapper>
  );
};

export default NotFound;
