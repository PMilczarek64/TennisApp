import React, { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getObjectById } from "../../Redux/store";

const GalleryWrapper = styled.div`
  max-width: 95%;
  
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  text-align: center;
  justify-content: center;
  img {
    cursor: pointer;
  }
  @media screen and (max-width: 708px){
    padding: 0;
    margin: 50px 0;
    gap: 0.5em;
  }
`;

const GalleryItem = styled.div`
  width: 320px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 708px){
    width: 100%;
    height: 100%;
  }
`;

function App() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const { objectId } = useParams();
  const object = useSelector((state) => getObjectById(state, Number(objectId)));
  const photos = object.contentData[1].photos;

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = photos.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = photos[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = photos.filter((item) => {
      return photos.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = photos.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = photos[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = photos.filter((item) => {
      return photos.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <GalleryWrapper>
      {photos.length > 0 && photos !== undefined ? 
      (
        photos.map((item, index) => (
          <GalleryItem key={index}>
            <img
              src={item.link}
              alt={item.text}
              onClick={() => handleClick(item, index)}
            />
          </GalleryItem>
        ))
      ) : (
        <div>
          <h2>There is no photos :(</h2>
          <p>Photos have not been added by the facility owner</p>
        </div>
      )}
      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </div>
    </GalleryWrapper>
  );
}

export default App;
