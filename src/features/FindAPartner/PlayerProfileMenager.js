import React, { useState } from "react";
import { useSelector } from "react-redux";
import shortid from "shortid";
import styled from "styled-components";
import { Input, Label, Select, TextArea } from "../../common/Inputs.styles";
import { getAllNtrpLevels } from "../../Redux/store";
import propTypes from "prop-types";
import FindAPartnerModal, {
  ButtonsWrapper,
  ModalHeader,
} from "./FindAPratnerModal";
import { formatCmToMeters } from "../../utils";

const FormWrapper = styled.div`
  max-height: 100%;
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 1;
  i {
    font-size: 36px;
    color: ${({ theme }) => theme.colors.lightBlue};
    cursor: pointer;
    &.confirm {
      font-size: 28px;
      :hover {
        color: greenyellow;
      }
    }
    &.remove {
      font-size: 24px;
      color: ${({ theme }) => theme.colors.error};
      margin-inline: 8px;
      :hover {
        color: red;
      }
    }
  }
  @media (max-width: 780px) {
    width: 75%;
  }
  @media (max-width: 488px) {
    width: 100%;
  }
`;

const Image = styled.div`
  height: 100%;
  width: 45%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 65%;
    width: 100%;
    object-fit: cover;
  }
  border-right: 1px solid ${({ theme }) => theme.colors.strongFaded};
  @media (max-width: 780px) {
    width: 35%;
    img {
      height: 40%;
    }
    p {
      text-align: left;
    }
  }
  @media (max-width: 580px) {
    img {
      height: 25%;
    }
  }
  @media (max-width: 488px) {
    display: none;
  }
`;

const PhotoURLInput = styled.div`
  box-sizing: border-box;
  height: 32px;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  border: solid 1px ${({ theme }) => theme.colors.faded};
  border-radius: 5px;
  overflow: hidden;
  input {
    border: none;
  }
`;

const LoadButton = styled.div`
  height: 100%;
  padding: 4px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: greenyellow;
  margin-block: 6px;
  color: white;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;

const Forms = styled.form`
  padding-block: 15px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
`;

const FormItem = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  label {
    font-size: 16px;
  }
  select {
    width: 60px;
  }
  div {
    display: flex;
  }
  @media (max-width: 735px) {
    flex-direction: column;
    align-items: flex-start;
    height: 64px;
  }
`;

const PlayerProfileMenager = ({
  setShowModal,
  action,
  actionText,
  userId,
  remove,
  ...props
}) => {
  const ntrpLevels = useSelector(getAllNtrpLevels);
  const [id] = useState(props?.id || shortid());
  const [name, setName] = useState(props.name || "");
  const [city, setCity] = useState(props.city || "");
  const [age, setAge] = useState(props.age || "");
  const [height, setHeight] = useState(props.height || "");
  const [ntrp, setNtrp] = useState(props.ntrp || ntrpLevels[0]);
  const [dominantHand, setDominantHand] = useState(
    props.dominantHand || "right"
  );
  const [email, setEmail] = useState(props.email || "");
  const [phone, setPhone] = useState(props.phone || "");
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ""
  );
  const [photo, setPhoto] = useState(
    props.photo ||
      "https://images.pexels.com/photos/6250895/pexels-photo-6250895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );
  const [loadedPhoto, setLoadedPhoto] = useState(
    props.photo ||
      "https://images.pexels.com/photos/6250895/pexels-photo-6250895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  const handleAgeChange = (e) => {
    const min = 16;
    const max = 99;
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setAge(value);
  };
  const validateAge = (age) => {
    if (age <= 0 || age > 100) return false;
    return true;
  };

  const handleHeightChange = (e) => {
    const min = 120;
    const max = 240;
    const value = Math.max(
      min,
      Math.min(max, Number(e.target.value))
    ).toString();
    setHeight(value);
  };

  const handleConfirm = () => {
    action({
      id: id,
      name: name,
      city: city,
      age: age,
      height: height,
      ntrp: ntrp,
      dominantHand: dominantHand,
      email: email,
      phone: phone,
      shortDescription: shortDescription,
      photo: photo,
      profileOwner: userId,
    });
    setShowModal(false);
  };

  const handleRemove = () => {
    remove(id);
    setShowModal(false);
  };

  return (
    <FindAPartnerModal>
      <Image>
        <img src={loadedPhoto}></img>
        <ModalHeader>Info</ModalHeader>
        <Forms>
          <p>
            To add your player's profile, fill in all fields and add a photo. If
            you are sure that all the data is correct, press the "confirm"
            button
          </p>
        </Forms>
      </Image>
      <FormWrapper>
        <ButtonsWrapper>
          <i
            className="close-icon fa fa-close"
            onClick={() => setShowModal(false)}
          />
        </ButtonsWrapper>
        <ModalHeader>{actionText} your player profile</ModalHeader>
        <Forms>
          <Input
            maxLength="20"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            maxLength="22"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => handleAgeChange(e)}
          />
          <Input
            type="number"
            placeholder="Height in cm"
            value={height}
            onChange={(e) => handleHeightChange(e)}
          />
          <Input
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <PhotoURLInput>
            <Input
              placeholder="paste URL of your photo"
              onChange={(e) => setPhoto(e.target.value)}
            />
            <LoadButton
              className="fa fa-arrow-right"
              onClick={() => setLoadedPhoto(photo)}
            />
          </PhotoURLInput>
          <FormItem>
            <div>
              <Label>Dominant hand: </Label>
              <Label>
                <input
                  type="radio"
                  value="left"
                  onChange={(e) => setDominantHand(e.target.value)}
                  checked={dominantHand === "left"}
                />
                <span>L</span>
              </Label>
              <Label>
                <input
                  type="radio"
                  value="right"
                  onChange={(e) => setDominantHand(e.target.value)}
                  checked={dominantHand === "right"}
                />
                <span>R</span>
              </Label>
            </div>
            <div>
              <Label>NTRP</Label>
              <Select onChange={(e) => setNtrp(e.target.value)}>
                <option value={ntrp}>{ntrp}</option>
                {ntrpLevels.map(
                  (level) =>
                    level !== ntrp && <option value={level}>{level}</option>
                )}
              </Select>
            </div>
          </FormItem>
          <TextArea
            value={shortDescription}
            placeholder="Write short description about yourself..."
            onChange={(e) => setShortDescription(e.target.value)}
          />
          <ButtonsWrapper>
            {remove && (
              <i
                className="remove fa fa-trash-o"
                onClick={() => handleRemove()}
              ></i>
            )}
            <i
              className="confirm fa fa-check"
              onClick={() => handleConfirm()}
            ></i>
          </ButtonsWrapper>
        </Forms>
      </FormWrapper>
    </FindAPartnerModal>
  );
};

PlayerProfileMenager.propTypes = {
  setShowModal: propTypes.func.isRequired,
  name: propTypes.string,
};

export default PlayerProfileMenager;
