import React from "react";
import propTypes from 'prop-types';
import { Modal, ContentWrapper, Header } from "./ActionModal.styled";

const ActionModal = ({showModal, headerText, ...props}) => {
  return (
    <Modal className={showModal === false && "hide"}>
      <ContentWrapper>
        <Header>{headerText}</Header>
        {props.children}
      </ContentWrapper>
    </Modal>
  );
};


ActionModal.propTypes = {
  showModal: propTypes.bool.isRequired,
  headerText: propTypes.string,
};


export default ActionModal;