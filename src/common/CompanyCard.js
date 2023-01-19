import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  width: 200px;
  margin: 5px;
  padding: 10px 17px;
  gap: 5px;
  font-size: 20px;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 12px 12px 24px -22px ${({ theme }) => theme.colors.faded};
  border: 1px solid ${({ theme }) => theme.colors.strongFaded};
  cursor: pointer;
  img {
    max-height: 50px;
  }
  :hover {
    border-color: ${({ theme }) => theme.colors.detailGreen};
    box-shadow: 12px 12px 24px -22px ${({ theme }) => theme.colors.detailGreen};
    transition: 0.4s ease-in-out;
    p {
      color: transparent;
    }
    img {
      transform: scale(2.3);
      transition: 0.4s ease-in-out;
    }
  }
`;

const CompanyCard = ({ name, logo, city, id }) => {
  return (
    <ListItem>
      <NavLink to={"/courts/" + city + "/" + id + "/Info"}>
        <p>{name}</p>
        <img src={`../../logos/${logo}`}></img>
        <p>{city}</p>
      </NavLink>
    </ListItem>
  );
};

export default CompanyCard;
