import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #00000193;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  position: fixed;
  top: 0;
`;

const ContentWrapper = styled.div`
  height: 630px; 
  width: 100%;
  max-width: 880px;
  background: white;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  overflow: hidden;
  display: flex;
  @media (max-width: 1400px) {
    width: 65%;
  }
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media screen and (max-width: 990px) {
    width: 90%;
  }
 
`;

export const ModalHeader = styled.h3`
  width: 100%;
  padding-block: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;

export const GreenyDetailLine = styled.span`
  margin-block: 30px;
  height: 1px;
  width: 85%;
  background-color: ${({ theme }) => theme.colors.detailGreen};
  &.last {
    margin-bottom: 15px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 98%;
  height: 35px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button {
    border: none;
    background: none;
  }
`;

const FindAPartnerModal = (props) => {
  return (
    <ModalWrapper>
      <ContentWrapper>
        {props.children}
      </ContentWrapper>
    </ModalWrapper>
  );
};

export default FindAPartnerModal;