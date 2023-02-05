import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  max-height: 520px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: solid 1px;
  border: none;
  margin: 20px;
  align-items: stretch;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 2px 14px -4px rgba(66, 68, 90, 1);
  &.no-margin {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
  }
  h4 {
    color: ${({ theme }) => theme.colors.detailBlue};
    margin: 5px 0 5px 0;
    font-size: 22px;
    position: relative;
    top: 0;
  }
  p {
    padding-inline: 10px;
  }
  @media (max-width: 450px) {
    margin-inline: 10px;
    width: 100vw;
    max-height: 95vh;
  }
  @media (max-height: 830px) {
    max-height: 85vh;
    width: 390px;
  }
`;

const Image = styled.div`
  max-height: 60%;
  width: 100%;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: 60% 40%;
  }
`;

const CityBar = styled.div`
  margin: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 25px;
  color: white;
  text-align: center;
  z-index: 1;
  background-color: #4169e1;
  top: 9%;
  transform: rotate(45deg);
  right: -17%;
`;

const CardContent = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  h4 {
    margin-top: 7px;
  }
`;

const LowBar = styled.div`
  display: flex;
  bottom: 0;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: white;
  background-color: ${({ theme }) => theme.colors.strongFaded};
  margin-top: 15px;
  gap: 1px;
`;

const LowBarItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65px;
  color: ${({ theme }) => theme.colors.detailBlue};
  background-color: ${({ theme }) => theme.colors.detailGreen};
  h4 {
    margin: 0;
    font-weight: 700;
    color: green;
    color: ${({ theme }) => theme.colors.detailBlue};
  }
  p {
    font-weight: 700;
    font-size: 12px;
    color: green;
  }
`;

const FindAPartnerCard = ({ player, action, onlyPhoto, noMargin }) => {
  return (
    <Card onClick={action} className={noMargin && 'no-margin'}>
      {onlyPhoto ? (
        <Image>
          <img src={player.photo}></img>
          <CityBar>{player.city}</CityBar>
        </Image>
      ) : (
        <>
          <Image>
            <img src={player.photo}></img>
            <CityBar>{player.city}</CityBar>
          </Image>
          <CardContent>
            <h4>{player.name}</h4>
            <p>{player.shortDescription}</p>
            <LowBar>
              <LowBarItem>
                <h4>{player.ntrp}</h4>
                <p>NTRP</p>
              </LowBarItem>
              <LowBarItem>
                <h4>{player.age}</h4>
                <p>Age</p>
              </LowBarItem>
              <LowBarItem>
                <h4>{player.height}</h4>
                <p>Height</p>
              </LowBarItem>
            </LowBar>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default FindAPartnerCard;