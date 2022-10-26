import React from "react";
import styled from "styled-components";

const Gallery = styled.div`
  height: 720px;
  width: 1160px;
  border: solid;
  margin-block: 50px;
`;

const CourtInfo = () => {
  return (
    <>
     <h2><b>NAME: </b>{objectId}  {city}</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <Gallery>
          
        </Gallery>
    </>
  );
};

export default CourtInfo;