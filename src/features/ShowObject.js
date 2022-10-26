import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ContentNav from "./ContentNav";

const Wrapper = styled.div`

`;

const Bar = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.detailGreen};
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
`;

const Content = styled.div`
  padding: 50px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const ShowObject = () => {
  const { city, objectId } = useParams();
  console.log('showObject City', city);
  console.log('showObject id', objectId);
  return (
    <Wrapper>
      <ContentNav objectId={Number(objectId)} city={city} />
      <Content>
       
      </Content>


    </Wrapper>
  );
};

export default ShowObject;