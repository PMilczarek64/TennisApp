import React from "react";
import shortid from "shortid";
import propTypes from "prop-types";
import CourtCard from "../CourtCard/CourtCard";
import { List } from "./CourtsList.styled";

const CourtsList = ({ objects }) => {
  return (
    <List>
      {objects.map((object) => (
        <CourtCard
          key={shortid()}
          city={object.city}
          name={object.name}
          logo={object.logo}
          id={object.id}
        />
      ))}
    </List>
  );
};

CourtsList.propTypes = {
  objects: propTypes.array.isRequired
};

export default CourtsList;
