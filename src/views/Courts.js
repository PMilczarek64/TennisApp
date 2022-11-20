import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getObjectsByCity } from "../Redux/store";
import styled from "styled-components";
import HeaderBar from "../common/HeaderBar";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  margin-inline: 50px;
  border: 1px solid ${({theme}) => theme.colors.faded};
  width: 80%;
  border-radius: 15px;
  cursor: pointer;
  overflow: hidden;
`;

const ListItem = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({theme}) => theme.colors.faded};
  h3 {
    color: black;
  }
  background: linear-gradient(180deg, rgba(224,224,224,0.4962359943977591) 0%, rgba(250,250,250,0.8603816526610644) 50%, rgba(224,224,224,1) 100%);
  
  :hover {
    background: linear-gradient(180deg, #a6ff00de 0%, #ddff00 50%, #a6ff00de 100%);
  }
`;

const Courts = () => {
  const { city } = useParams();
  const objects = useSelector(state => getObjectsByCity(state, city));
  const navigate = useNavigate();
  console.log('objects test: ', objects);

  const handleClick = (id) => {
    navigate('/courts/' +  city + '/' + id + '/Info');
  };
  return (
    <Wrapper>
      <HeaderBar value={'Courts in ' + city}></HeaderBar>
    <List>
      {objects.map(object => 
        <ListItem key={object.id} onClick={() => handleClick(object.id)}>
          <h3>{object.name} {object.address}</h3>
        </ListItem>  
      )}
    </List>
    </Wrapper>
  );
};

export default Courts;