import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderBar from "../../common/HeaderBar";
import FindAPartnerCard from "../../common/FindAPartnerCard";
import { useSelector } from "react-redux";
import { getAllPlayers, getPlayerByUserId } from "../../Redux/playersRedux";
import { getLoggingInInfo } from "../../Redux/usersRedux";
import { ButtonGreenHighlited } from "../../common/Button";
import { Input } from "../../common/Inputs.styles";
import { strContains } from "../../utils";
import PlayerModal from "./PlayerModal";
import AddPlayerProfile from "./AddPlayerProfile";
import EditPlayerProfile from "./EditPlayerProfile";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CardsWrapper = styled.div`
  max-width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 530px) {
    padding-inline: 0;
  }
`;

const MenagementBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 100%;
  color: black;
  position: relative;
  align-items: center;
  justify-content: center;
  i {
    color: #4169e1;
  }
`;

const Inputs = styled.div`
  width: 60%;
  display: flex;
  margin: 20px;
  justify-content: space-around;
  input {
    max-width: 30%;
  }
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    input {
      max-width: 70%;
      margin: 5px;
    }
  }
  @media (max-width: 450px) {
    input {
      transform: scale(1.4);
      margin: 15px;
    }
  }
`;

const FindAPartnerCards = () => {
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [ntrp, setNtrp] = useState("");
  const navigate = useNavigate();

  const allPlayers = useSelector(getAllPlayers);
  const players = allPlayers.filter(
    (player) =>
      strContains(player.city, city) &&
      strContains(player.name, name) &&
      strContains(player.ntrp, ntrp)
  );

  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [showPlayerModal, setShowPlayerModal] = useState(false);
  const [showAddProfileModal, setShowAddProfileModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);

  const handleCardClick = (player) => {
    setSelectedPlayer(player);
    setShowPlayerModal(true);
  };

  const loggedUserId = useSelector(getLoggingInInfo)?.id;
  const checkloggedUserId = () => {
    if (loggedUserId !== undefined) {
      return true;
    } else {
      navigate('/login', {
        state: {
          previousUrl: '/findapartner',
        }
      });
      return false
    }
  };

    checkloggedUserId();



  const playerProfile = useSelector(state => getPlayerByUserId(state, loggedUserId));

  const checkIfUserHasProfile = () => {
    if (loggedUserId !== null) {
      if (playerProfile !== undefined) {
        console.log('user has a profile ', playerProfile.id); 
        return true;
      } else {
        return false;
      }
    }
  }

  return (
    <Wrapper>
      {showPlayerModal && (
        <PlayerModal
          player={selectedPlayer}
          setShowPlayerModal={setShowPlayerModal}
        />
      )}
      {showAddProfileModal && <AddPlayerProfile userId={loggedUserId} setShowModal={setShowAddProfileModal} />}
      {showEditProfileModal && <EditPlayerProfile userId={loggedUserId} setShowModal={setShowEditProfileModal} player={playerProfile}/>}
      <HeaderBar value="Find a partner"></HeaderBar>
      <MenagementBar>
        <h4>
          Fill the fields below to search <i className="fa fa-search"></i>
        </h4>
        <Inputs>
          <Input
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          ></Input>
          <Input
            placeholder="Player's name"
            onChange={(e) => setName(e.target.value)}
          ></Input>
          <Input
            placeholder="NTRP level"
            onChange={(e) => setNtrp(e.target.value)}
          ></Input>
        </Inputs>
        <ButtonGreenHighlited onClick={() => checkIfUserHasProfile() === false ? setShowAddProfileModal(true) : setShowEditProfileModal(true)} >
          {checkloggedUserId() === false ? `Log in and add your player profile` : `Click to add or edit your profile`} <i className="fa fa-users"></i>
        </ButtonGreenHighlited>
      </MenagementBar>
      <CardsWrapper>
        {players.map((player) => (
          <FindAPartnerCard 
            key={player.id}
            action={() => handleCardClick(player)}
            player={player}
          />
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};

export default FindAPartnerCards;
