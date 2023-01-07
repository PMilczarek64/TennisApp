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
  margin-bottom: 50px;
  border: 1px solid ${({theme}) => theme.colors.faded};
  width: 80%;
  border-radius: 15px;
  cursor: pointer;
  overflow: hidden;
`;

const ListItem = styled.li`
  max-width: 100%;
  height: 120px;
  display: flex;
  justify-content: baseline;
  align-items: center;
  border-bottom: 1px solid ${({theme}) => theme.colors.faded};
  h3 {
    color: black;
  }
  background: linear-gradient(180deg, rgba(224,224,224,0.4962359943977591) 0%, rgba(250,250,250,0.8603816526610644) 50%, rgba(224,224,224,1) 100%);
  :hover {
    background: linear-gradient(90deg,#ddff00c3 0%, #ddff00b0 50%, #ddff00c3 100%);
  }
`;

const Logo = styled.div`
margin-inline: 20px;
min-width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    max-height: 90px;
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
          <Logo><img src={`../../logos/${object.logo}`}></img></Logo>
          <h3><b>{object.name}</b> {object.address}</h3>
        </ListItem>  
      )}
    </List>
    </Wrapper>
  );
};

export default Courts;