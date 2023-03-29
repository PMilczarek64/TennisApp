import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getObjectById } from "../../Redux/objectsRedux";
import styled from "styled-components";

const Bar = styled.ul`
  width: 100%;
  height: 90px;
  background: ${({ theme }) => theme.gradients.shadyWhite};
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  a {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-family: 'Bree Serif', serif;
    font-size: ${({ theme }) => theme.fontSize.xl};
    :hover {
      color:  ${({ theme }) => theme.colors.pureGreen};
      transition: 0.2s ease-in-out;
    }
    &.active {
      color:  ${({ theme }) => theme.colors.pureGreen};
    }
  }
`;

const ContentNav = ({ objectId, city }) => {
  const object = useSelector(state => getObjectById(state, objectId));
  const contentData = object.contentData;
  return (
    <Bar>
      {contentData.map(item => 
          <li key={item.id}><NavLink to={"/courts/" + city + "/" + objectId + "/" + item.name}>{item.name}</NavLink></li>
      )}
    </Bar>
  );
};

export default ContentNav;