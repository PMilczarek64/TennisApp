import React from "react";
import { useState } from "react";
import FindAPartnerModal, {
  ButtonsWrapper,
  GreenyDetailLine,
  ModalHeader,
} from "../../../../common/ContentModal";
import { formatCmToMeters } from "../../../../utils/utils";
import { TextArea } from "../../../../common/Inputs.styles";
import { Image, InfoWrapper, Info } from "./PlayerModal.styled";

const PlayerModal = ({ player, setShowPlayerModal }) => {
  const [message, setMessage] = useState("");
  const [showQuill, setShowQuill] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = () => {
    setMessageSent(true);
    setMessage("");
  }

  return (
    <FindAPartnerModal>
      <Image>
        <img src={player.photo} alt="player avatar"></img>
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
          <p>NTRP: {player.ntrp}</p>
        </Info>
        <GreenyDetailLine />
        <Info>
          <p className="short">{player.shortDescription}</p>
          <button onClick={() => setShowQuill(true)}>Show full description</button>
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
          {messageSent && 
            <p className="success">Message successfully sent</p>}
          <ButtonsWrapper>
            <i
              className="message close-icon fa fa-undo"
              onClick={() => setShowQuill(false)}
            ></i>
            <i className="message fa fa-paper-plane" onClick={() => handleSendMessage()}></i>
          </ButtonsWrapper>
        </Info>
      </InfoWrapper>
    </FindAPartnerModal>
  );
};

export default PlayerModal;
