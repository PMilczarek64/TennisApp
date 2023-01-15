import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getObjectById } from "../Redux/store";
import styled from "styled-components";

const Bar = styled.ul`
  width: 100%;
  height: 90px;
  background: linear-gradient(180deg, rgba(224,224,224,0.4962359943977591) 0%, rgba(250,250,250,0.8603816526610644) 50%, rgba(224,224,224,1) 100%);
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  box-shadow: -1px 13px 24px -18px rgba(66, 68, 90, 1);
  a {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-family: 'Bree Serif', serif;
    font-size: ${({ theme }) => theme.fontSize.xl};
    :hover {
      color:  #00ac56;
      transition: 0.2s ease-in-out;
    }
    &.active {
      border-bottom: solid 3px #00ac56;
    }
  }
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