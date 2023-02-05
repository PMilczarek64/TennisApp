import styled from "styled-components";
import React from "react";

const Bar = styled.div`
  height: 90px;
  width: 100%;
  background: linear-gradient(180deg, rgba(221,230,235,1) 48%, rgba(255,255,255,1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderBar = ({value}) => {
  return (
    <Bar>
      <h2>{value}</h2>
    </Bar>
  );
};

export default HeaderBar;