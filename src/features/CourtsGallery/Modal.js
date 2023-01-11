import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(27, 27, 27, 0.541);
  display: flex;
  align-items: center;
  i {
    font-size: 36px;
  }
  img {
    display: block;
    max-width: 60%;
    max-height: 80%;
    margin: 60px auto;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
  }
  span {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: #ffffff;
    z-index: 999;
    cursor: pointer;
  }
`;

const Arrow = styled.div`
  display: flex;
  background-color: #6d6d6d;
  justify-content: space-between;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  z-index: 999;
  right: 0;
  cursor: pointer;
  color: whitesmoke;
  &.left {
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.right {
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Modal = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <Overlay className="dismiss" onClick={handleClick}>
        <img src={clickedImg} alt="bigger pic" />
        <span className="dismiss">
          <i className="fa fa-times-circle dismiss" onClick={handleClick}></i>
        </span>
        <Arrow onClick={handelRotationLeft} className="left">
            <i className="fa fa-arrow-left"></i>
        </Arrow>
        <Arrow onClick={handelRotationRight} className="right">
            <i className="fa fa-arrow-right"></i>
        </Arrow>
      </Overlay>
    </>
  );
};

export default Modal;
