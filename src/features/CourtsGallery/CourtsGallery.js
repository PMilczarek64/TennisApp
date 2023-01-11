import React, { useState } from "react";
import data from "./data/images.json";
import Modal from "./Modal";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1350px;
  padding: 0px 60px;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  text-align: center;
  justify-content: center;
  img {
    cursor: pointer;
  }
`;

const GalleryItem = styled.div`
  width: 320px;
  max-height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function App() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <Wrapper>
      {data.data.map((item, index) => (
        <GalleryItem key={index}>
          <img
            src={item.link}
            alt={item.text}
            onClick={() => handleClick(item, index)}
          />
        </GalleryItem>
      ))}
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
    </Wrapper>
  );
}

export default App;
