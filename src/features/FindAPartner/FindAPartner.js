import React, { useCallback, useState } from "react";
import HeaderBar from "../../common/HeaderBar";
import FindAPartnerCard from "../../common/FindAPartnerCard";
import { useSelector } from "react-redux";
import { getAllPlayers, getPlayerByUserId } from "../../Redux/playersRedux";
import { getLoggingInInfo } from "../../Redux/usersRedux";
import { strContains } from "../../utils/utils";
import PlayerModal from "./Modals/PlayerModal/PlayerModal";
import AddPlayerProfile from "./Modals/PlayerProfileMenager/AddPlayerProfile";
import EditPlayerProfile from "./Modals/PlayerProfileMenager/EditPlayerProfile";
import { useNavigate } from "react-router-dom";
import MenagementBar from "./MenagementBar/MenagementBar";
import { Wrapper, CardsWrapper } from "./FindAPartner.styled";

const FindAPartner = () => {
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
  const checkloggedUserId = useCallback(() => {
    if (loggedUserId !== undefined) {
      return true;
    } else {
      navigate('/login', {
        state: {
          previousUrl: '/findapartner',
        }
      });
      return false;
    }
  }, [loggedUserId, navigate]);

  const playerProfile = useSelector(state => getPlayerByUserId(state, loggedUserId));

  const checkIfUserHasProfile = () => {
    if (loggedUserId !== null) {
      if (playerProfile !== undefined) {
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
      <MenagementBar setCity={setCity}
        setName={setName}
        setNtrp={setNtrp}
        checkIfUserHasProfile={checkIfUserHasProfile}
        checkloggedUserId={checkloggedUserId}
        setShowAddProfileModal={setShowAddProfileModal}
        setShowEditProfileModal={setShowEditProfileModal}

      />
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

export default FindAPartner;
