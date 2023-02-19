import React, { useState } from "react";
import styled from "styled-components";
import HeaderBar from "../common/HeaderBar";
import FindAPartnerCard from "../common/FindAPartnerCard";
import { useSelector } from "react-redux";
import { getAllPlayers } from "../Redux/store";
import { ButtonGreen } from "../common/Button";
import { Input, Label } from "../common/Inputs.styles";
import { strContains } from "../utils";

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
    color: #4169E1;
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

  const allPlayers = useSelector(getAllPlayers);
  const players = allPlayers.filter(
    (player) =>
      strContains(player.city, city) &&
      strContains(player.name, name) &&
      strContains(player.ntrp, ntrp)
  );

  return (
    <Wrapper>
      <HeaderBar value="Find a partner"></HeaderBar>
      <MenagementBar>
        <h4>Fill the fields below to search <i className="fa fa-search"></i></h4>
        <Inputs>
          <Input
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          ></Input>
          <Input placeholder="Player's name" onChange={(e) => setName(e.target.value)}></Input>
          <Input placeholder="NTRP level" onChange={(e) => setNtrp(e.target.value)}></Input>
        </Inputs>
      </MenagementBar>
      <CardsWrapper>
        {players.map((player) => (
          <FindAPartnerCard
            image={player.photo}
            name={player.name}
            city={player.city}
            ntrp={player.ntrp}
            age={player.age}
            height={player.height}
            description={player.shortDescription}
          />
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};

export default FindAPartnerCards;
