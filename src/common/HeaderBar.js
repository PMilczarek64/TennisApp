import styled from "styled-components";
import React from "react";

const Bar = styled.div`
  height: 90px;
  width: 100%;
  background: linear-gradient(180deg, rgba(224,224,224,0.4962359943977591) 0%, rgba(250,250,250,0.8603816526610644) 50%, rgba(224,224,224,1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 14px -4px rgba(66, 68, 90, 1);
`;

const HeaderBar = ({value}) => {
  return (
    <Bar>
      <h2>{value}</h2>
    </Bar>
  );
};

export default HeaderBar;