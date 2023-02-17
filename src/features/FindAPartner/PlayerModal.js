import React from "react";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { TextArea } from "../../common/Inputs.styles";
import FindAPartnerModal, {
  ButtonsWrapper,
  GreenyDetailLine,
  ModalHeader,
} from "./FindAPratnerModal";
import { formatCmToMeters } from "../../utils";

const Image = styled.div`
  height: 100%;
  min-width: 50%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 680px) {
    display: none;
  }
`;

const InfoWrapper = styled.div`
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50%;
  flex-shrink: 1;
  &.hide {
    display: none;
  }
  i {
    font-size: 36px;
    color: ${({ theme }) => theme.colors.lightBlue};
    cursor: pointer;
    &.message {
      font-size: 24px;
      margin-inline: 3px;
    }
  }
  @media (max-width: 680px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  p {
  text-align: center;
  }
`;

const PlayerModal = ({ player, setShowPlayerModal }) => {
  const [message, setMessage] = useState("");
  const [showQuill, setShowQuill] = useState(false);

  return (
    <FindAPartnerModal>
      <Image>
        <img src={player.photo}></img>
      </Image>
      <InfoWrapper className={showQuill && "hide"}>
        <ButtonsWrapper>
          <i
            className="close-icon fa fa-close"
            onClick={() => setShowPlayerModal(false)}
          ></i>
        </ButtonsWrapper>
        <ModalHeader>Player details</ModalHeader>
        <GreenyDetailLine />
        <Info>
          <p>Name: {player.name}</p>
          <p>City: {player.city}</p>
          <p>Age: {player.age}</p>
          <p>Height: {formatCmToMeters(player.height)}</p>
          <p>Email: {player.email}</p>
          <p>Phone: {player.phone}</p>
          <p>Dominant hand: {player.dominantHand}</p>
          <p>Prefered type of court: </p>
        </Info>
        <GreenyDetailLine />
        <Info>
          <p>{player.shortDescription}</p>
        </Info>
        <GreenyDetailLine className="last" />
        <i className="fa fa-envelope" onClick={() => setShowQuill(true)}></i>
      </InfoWrapper>
      <InfoWrapper className={"between" && !showQuill && "hide"}>
        <>
          <ButtonsWrapper>
            <i
              className="close-icon fa fa-close"
              onClick={() => setShowPlayerModal(false)}
            ></i>
          </ButtonsWrapper>
          <ModalHeader>Message to {player.name}</ModalHeader>
          <GreenyDetailLine />
          <Info>
            <p>{player.shortDescription}</p>
          </Info>
          <GreenyDetailLine />
        </>
        <Info>
          <TextArea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message..."
          ></TextArea>
          <ButtonsWrapper>
            <i
              className="message close-icon fa fa-undo"
              onClick={() => setShowQuill(false)}
            ></i>
            <i className="message fa fa-paper-plane"></i>
          </ButtonsWrapper>
        </Info>
      </InfoWrapper>
    </FindAPartnerModal>
  );
};

export default PlayerModal;
