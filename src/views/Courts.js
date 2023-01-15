import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getObjectsByCity } from "../Redux/store";
import styled from "styled-components";
import HeaderBar from "../common/HeaderBar";
import { useNavigate } from "react-router-dom";
import { CompanyLogo } from "../common/CompanyLogo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  margin-inline: 50px;
  margin-block: 50px;
  display: flex;
  flex-direction: column;
  width: 80%;
  cursor: pointer;
  overflow: hidden;
`;

const ListItem = styled.li`
  max-width: 100%;
  height: 120px;
  margin-block: 5px;
  display: flex;
  justify-content: baseline;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.strongFaded};
  box-shadow: 12px 12px 24px -22px ${({ theme }) => theme.colors.faded};
  h3, p{
    color: black;
  }
  :hover {
    border-color: ${({ theme }) => theme.colors.detailGreen};
    box-shadow: 12px 12px 24px -22px ${({ theme }) => theme.colors.detailGreen};
    background-color: ${({ theme }) => theme.colors.fadedDetailGreen};
  }
`;

const Courts = () => {
  const { city } = useParams();
  const objects = useSelector((state) => getObjectsByCity(state, city));
  const navigate = useNavigate();
  console.log("objects test: ", objects);

  const [courtType, setCourtType] = useState('');

  const handleClick = (id, city) => {
    navigate("/courts/" + city + "/" + id + "/Info");
  };
  return (
    <Wrapper>
      <HeaderBar
        value={city !== undefined ? "Courts in " + city : "All Courts"}
      ></HeaderBar>
      <List>
        {objects.map((object) => (
          <ListItem
            key={object.id}
            onClick={() => handleClick(object.id, object.city)}
          >
            <CompanyLogo>
              <img src={`../../logos/${object.logo}`}></img>
            </CompanyLogo>
            <h3>
              <p><b>{object.name}</b> {object.city}, {object.address}, Types of courts: </p>
            </h3>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default Courts;
