import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";

const Bar = styled.div`
  height: 90px;
  width: 100%;
  background: linear-gradient(180deg, rgba(221,230,235,1) 48%, rgba(255,255,255,1) 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  i {
    margin-inline: 20px;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.lightBlue};
    cursor: pointer;
  }
`;

const HeaderBar = ({value, undo}) => {
  const navigate = useNavigate()
  return (
    <Bar>
       {undo ? <i className="fa fa-undo" onClick={(() => navigate(-1))} /> : <i />}
      <h2>{value}</h2>
      <i></i>
    </Bar>
  );
};

export default HeaderBar;