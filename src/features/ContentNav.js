import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getObjectById } from "../Redux/store";
import styled from "styled-components";

const Bar = styled.ul`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.detailGreen};
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;



const ContentNav = ({ objectId, city }) => {
  const object = useSelector(state => getObjectById(state, objectId));
  console.log('city test in contentBar', city);
  const contentData = object.contentData;
  console.log('object test in bar: ', contentData);
  return (
    <Bar>
      {contentData.map(item => 
          <li key={item.id}><NavLink to={"/courts/" + city + "/" + objectId + "/" + item.name}>{item.name}</NavLink></li>
      )}
    </Bar>
  );
};

export default ContentNav;