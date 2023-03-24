import React from "react";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Card } from "./CourtCard.styled";

const CourtCard = ({ name, logo, city, id }) => {
  return (
    <Card>
      <NavLink to={"/courts/" + city + "/" + id + "/Info"}>
        <p>{name}</p>
        <img src={`../../logos/${logo}`} alt={name}></img>
        <p>{city}</p>
      </NavLink>
    </Card>
  );
};

export default CourtCard;

CourtCard.propTypes = {
  name: propTypes.string.isRequired,
  logo: propTypes.string.isRequired,
  city: propTypes.string.isRequired,
  id: propTypes.number.isRequired
};
