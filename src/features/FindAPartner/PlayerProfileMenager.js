import React, { useState } from "react";
import { useSelector } from "react-redux";
import shortid from "shortid";
import styled from "styled-components";
import { Input, Label, Select, TextArea } from "../../common/Inputs.styles";
import { getAllNtrpLevels } from "../../Redux/store";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import propTypes from "prop-types";
import FindAPartnerModal, {
  ButtonsWrapper,
  ModalHeader,
} from "./FindAPratnerModal";

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
  height: 100%;
  max-height: 32px;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.strongFaded};
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
  margin-block: 6px;
  color: greenyellow;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;

const Form = styled.form`
  padding-block: 15px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
  overflow: auto;
  input {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.strongFaded};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  span {
    &.alert {
      color: ${({ theme }) => theme.colors.error};
      padding-inline: 5px;
      font-size: 14px;
    }
  }
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
  const [photo, setPhoto] = useState(
    props.photo ||
      "https://images.pexels.com/photos/6250895/pexels-photo-6250895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );
  const [loadedPhoto, setLoadedPhoto] = useState(
    props.photo ||
      "https://images.pexels.com/photos/6250895/pexels-photo-6250895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: props.name,
      city: props.city,
      age: props.age,
      height: props.height,
      email: props.email,
      phone: props.phone,
      ntrp: props.ntrp,
      dominantHand: props.dominantHand || "right",
      shortDescription: props.shortDescription || "",
    },
    criteriaMode: "all",
  });

  const handleConfirm = (data) => {
    action({
      id: id,
      name: data.name,
      city: data.city,
      age: data.age,
      height: data.height,
      ntrp: data.ntrp,
      dominantHand: data.dominantHand,
      email: data.email,
      phone: data.phone,
      shortDescription: data.shortDescription,
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
        <img src={loadedPhoto} alt="loaded link"></img>
        <ModalHeader>Info</ModalHeader>
        <Form>
          <p>
            To add your player's profile, fill in all fields and add a photo. If
            you are sure that all the data is correct, press the "confirm"
            button
          </p>
        </Form>
      </Image>
      <FormWrapper>
        <ButtonsWrapper>
          <i
            className="close-icon fa fa-close"
            onClick={() => setShowModal(false)}
          />
        </ButtonsWrapper>
        <ModalHeader>{actionText} your player profile</ModalHeader>
        <Form onSubmit={handleSubmit(handleConfirm)}>
          <Input
            placeholder="Name"
            {...register("name", {
              required: "This field is required",
              minLength: {
                value: 2,
                message: "Minimum 2 characters",
              },
              maxLength: {
                value: 20,
                message: "Maximum 20 characters",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <span key={type} className="alert">
                  {message}
                </span>
              ))
            }
          />

          <Input
            className={errors.city && "alert"}
            aria-invalid={errors.city ? "true" : "false"}
            placeholder="City"
            {...register("city", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
              maxLength: {
                value: 22,
                message: "Maximum 22 characters",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="city"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <span key={type} className="alert">
                  {message}
                </span>
              ))
            }
          />
          <Input
            type="number"
            placeholder="Age"
            {...register("age", {
              required: "This field is required",
              minLength: {
                value: 2,
                message: "Minimum 2 characters"
              },
              maxLength: {
                value: 2,
                message: "Maximum 2 characters"
              }
            })}
          />
          <ErrorMessage
            errors={errors}
            name="age"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <span key={type} className="alert">
                  {message}
                </span>
              ))
            }
          />
          <Input
            type="number"
            placeholder="Height in cm"
            {...register("height", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters"
              },
              maxLength: {
                value: 3,
                message: "Maximum 3 characters"
              }
            })}
          />
          <ErrorMessage
            errors={errors}
            name="height"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <span key={type} className="alert">
                  {message}
                </span>
              ))
            }
          />
          <Input
            placeholder="Email address"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", { pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <span role="alert" className="alert">
              e-mail address is invalid
            </span>
          )}
          <Input
            type="number"
            placeholder="Phone number"
            aria-invalid={errors.phone ? "true" : "false"}
            {...register("phone", { minLength: 9, maxLength: 12 })}
          />
          {errors.phone && (
            <span role="alert" className="alert">
              Minimum 9, maximum 12 characters
            </span>
          )}
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
                  {...register("dominantHand", { required: true })}
                  type="radio"
                  value="left"
                />
                <span>L</span>
              </Label>
              <Label>
                <input
                  {...register("dominantHand", { required: true })}
                  type="radio"
                  value="right"
                />
                <span>R</span>
              </Label>
            </div>
            <div>
              <Label>NTRP</Label>
              <Select {...register("ntrp", { required: true })}>
                {ntrpLevels.map((level) => (
                  <option value={level} key={level}>{level}</option>
                ))}
              </Select>
            </div>
          </FormItem>
          <TextArea
            {...register("shortDescription", { 
              required: "This field is required. Minimum 50 characters", 
              maxLength: {
                value: 300,
                message: "Maximum 300 characters"
              },
              minLength: {
                value: 50,
                message: "Minimum 50 characters"
              }
            })}
            placeholder="Write short description about yourself..."
          />
           <ErrorMessage
            errors={errors}
            name="shortDescription"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <span key={type} className="alert">
                  {message}
                </span>
              ))
            }
          />
          <ButtonsWrapper>
            {remove && (
              <i
                className="remove fa fa-trash-o"
                onClick={() => handleRemove()}
              ></i>
            )}
            <button type="submit">
              <i className="confirm fa fa-check" />
            </button>
          </ButtonsWrapper>
        </Form>
      </FormWrapper>
    </FindAPartnerModal>
  );
};

PlayerProfileMenager.propTypes = {
  setShowModal: propTypes.func.isRequired,
  action: propTypes.func.isRequired,
  remove: propTypes.func,
  actionText: propTypes.string.isRequired,
  userId: propTypes.string,
};

export default PlayerProfileMenager;
