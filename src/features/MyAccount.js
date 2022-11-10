import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getUserObjectsByUserId } from "../Redux/store";
import EditObject from "./EditObject";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bar = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.detailGreen};
`;

const MyObjects = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;


const Object = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
  background: linear-gradient(180deg, rgba(224,224,224,0.4962359943977591) 0%, rgba(250,250,250,0.8603816526610644) 50%, rgba(224,224,224,1) 100%);
  cursor: pointer;
`;


const MyAccount = () => {
  const { userId } = useParams();
  const userProperties = useSelector(state => getUserObjectsByUserId(state, Number(userId)));
  const [expandProperty, setExpandProperty] = useState();
  console.log('test userId ', userId)

  const handleExpand = (id) => {
    expandProperty !== id ? setExpandProperty(id) : setExpandProperty();
  }
  return (
    <Wrapper>
      <Bar><h1>MY account</h1></Bar>
      <MyObjects>
        <h4>My objects</h4>
        {userProperties.map(property =>
          <Object >
            {property.name}, {property.address}
            {expandProperty === property.id &&
              <EditObject property={property} />
            }
            <button onClick={() => handleExpand(property.id)}>Expand / Collapse </button>
          </Object>
        )}
      </MyObjects>
    </Wrapper>
  );
};

export default MyAccount;