import React from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Input } from "../../common/Inputs.styles";

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

const PlayerWrapper = styled.div`
  height: 630px;
  width: 55%;
  background: white;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  overflow: hidden;
  display: flex;
  img {
    transform: scale(1.015);
  }
  @media (max-width: 1400px) {
    width: 65%;
  }
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media screen and (max-width: 990px) {
    width: 90%;
  }
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

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
  .quill {
    max-width: 100%;
    max-height: 150px;
    position: relative;
    display: block;
  }
  i {
    font-size: 36px;
    color: #4169e1;
    cursor: pointer;
    &.message {
      font-size: 24px;
      margin-inline: 3px;
    }
  }
`;

const Header = styled.h3`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid 3px #4169e1;
  border-bottom: solid 3px #4169e1;
  color: white;
  align-items: center;
  background-color: #4169e1;
`;

const DetailLine = styled.span`
  margin-block: 30px;
  height: 1px;
  width: 85%;
  background-color: ${({ theme }) => theme.colors.detailGreen};
  &.last {
    margin-bottom: 15px;
  }
`;

const Info = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const TextArea = styled.textarea`
  height: 200px;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.faded};
  border-radius: 10px;
  margin-bottom: 5px;
`;
const PlayerModal = ({ player, setShowModal }) => {
  const [message, setMessage] = useState("");
  const [showQuill, setShowQuill] = useState(false);

  return (
    <ModalWrapper>
      <PlayerWrapper>
        <Image>
          <img src={player.photo}></img>
        </Image>
        <InfoWrapper className={showQuill && "hide"}>
          <ButtonsWrapper>
            <i
              className="close-icon fa fa-close"
              onClick={() => setShowModal(false)}
            ></i>
          </ButtonsWrapper>
          <Header>Player details</Header>
          <DetailLine />
          <Info>
            <p>Name: {player.name}</p>
            <p>City: {player.city}</p>
            <p>Age: {player.age}</p>
            <p>Height: {player.height}</p>
            <p>Email: {player.email}</p>
            <p>Phone: </p>
            <p>Dominant hand: </p>
            <p>Prefered type of court: </p>
          </Info>
          <DetailLine />
          <Info>
            <p>{player.shortDescription}</p>
          </Info>
          <DetailLine className="last" />
          <i className="fa fa-envelope" onClick={() => setShowQuill(true)}></i>
        </InfoWrapper>
        <InfoWrapper className={'between' && !showQuill && "hide"}>
          <>
          <ButtonsWrapper>
            <i
              className="close-icon fa fa-close"
              onClick={() => setShowModal(false)}
            ></i>
          </ButtonsWrapper>
          <Header>Message to {player.name}</Header>
          <DetailLine />
          <Info>
            <p>{player.shortDescription}</p>
          </Info>
          <DetailLine />
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
              <i
                className="message fa fa-paper-plane"
              ></i>
            </ButtonsWrapper>
          </Info>
        </InfoWrapper>
      </PlayerWrapper>
    </ModalWrapper>
  );
};

export default PlayerModal;
