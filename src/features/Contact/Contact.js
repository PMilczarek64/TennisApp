import React from "react";
import FindAPartnerModal from "../FindAPartner/FindAPratnerModal";
import styled from "styled-components";
import { Input, TextArea } from "../../common/Inputs.styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { isValidEmail } from "../../utils";

const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: #053d5be5;
  h4 {
    color: greenyellow;
    font-family: "Oleo Script", cursive;
    font-size: 35px;
    margin-bottom: 30px;
  }
`;

const LeftSideWrapper = styled.div`
  width: 45%;
  overflow: hidden;
  @media screen and (max-width: 620px){
    display: none;
  }
`;

const RightSideWrapper = styled.div`
  max-height: 100%;
  width: 45%;
  padding: 5%;
  color: greenyellow;
  position: relative;
  .close-icon {
    position: absolute;
    top: 0;
    right: 0;
    margin: 15px;
    font-size: 30px;
    cursor: pointer;
  }
  @media screen and (max-width: 800px){
    width: 100%;
  }
  @media screen and (max-width: 620px){
    padding-inline: 0;
  }
`;

const SidePhoto = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  textarea {
    margin: 7px;
    width: 81%;
    background: transparent;
    border: 3px solid greenyellow;
    box-sizing: border-box;
    color: white;
    font-size: 16px;
    padding: 10px;
    ::placeholder {
      color: greenyellow;
    }
  }
  button {
    width: 81%;
    margin: 7px;
    background: greenyellow;
    border: 3px solid greenyellow;
    color: #053d5be5;
    font-family: "Oleo Script", cursive;
    font-size: 24px;
    padding: 5px 15px;
    border-radius: 8px;
    cursor: pointer;
  }
  .alert {
      color: ${({ theme }) => theme.colors.error};
  }
`;

const IconInput = styled.div`
  margin: 7px;
  width: 80%;
  border: 3px solid greenyellow;
  background-color: transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;

  input {
    border: none;
    background-color: transparent;
    border-radius: 0;
    color: white;
    ::placeholder {
      color: greenyellow;
    }
    :-webkit-autofill,
    :focus {
      box-shadow: 0 0 0px 1000px transparent inset !important;
      outline: none;
    }
  }

  i {
    font-size: 20px;
    margin: 5px 8px;
    color: greenyellow;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const InfoItem = styled.div`
  display: flex;
  color: greenyellow;
  align-items: center;
  height: 58px;
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 58px;
    font-size: 28px;
  }
  p {
    color: white;
  }
`;

const Contact = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
     
    },
    criteriaMode: "all",
  });

  const handleEmailValidation = email => {
    const isValid = isValidEmail(email);
    const validityChanged =
      (errors.email && isValid) || (!errors.email && !isValid);
    if (validityChanged) {
      console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
    }
    return isValid;
  };

  const handleConfirm = () => {
    console.log('handle Confirm');
  }

  return (
    <FindAPartnerModal>
      <ContactWrapper>
        <LeftSideWrapper>
          <SidePhoto>
            <img src="https://images.pexels.com/photos/2833103/pexels-photo-2833103.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </SidePhoto>
        </LeftSideWrapper>
        <RightSideWrapper>
          <ContactForm onSubmit={handleSubmit(handleConfirm)}>
            <h4>Let's get in touch</h4>
            <IconInput>
              <i className="fa fa-user-o"></i>
              <Input 
                placeholder="Full name"
                {...register("name", {
                  required: "This field is required",
                  minLength: {
                    value: 7,
                    message: "Minimum 2 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Maximum 50 characters",
                  },
                })}
              />
            </IconInput>
            <ErrorMessage
                errors={errors}
                name="name"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className="alert">{message}</span>
                  ))
                }
              />
            <IconInput>
              <i className="fa fa-envelope-o"></i>
              <Input 
                placeholder="Email"
                {...register('email', {
                  required: true, 
                  validate: handleEmailValidation 
                })}
              />
            </IconInput>
            <ErrorMessage errors={errors} name="email" message={<span className="alert">Email is incorrect!</span>} />
            <TextArea 
              placeholder="Write a message..." 
              {...register("mailContent", { 
                required: "This field is required", 
                maxLength: {
                  value: 300,
                  message: "Maximum 300 characters"
                },
                minLength: {
                  value: 30,
                  message: "Minimum 30 characters"
                }
              })}
            />
            <ErrorMessage
              errors={errors}
              name="mailContent"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <span key={type} className="alert">
                    {message}
                  </span>
                ))
              }
            />
            <button>Send message</button>
          </ContactForm>
          <ContactInfo>
            <InfoItem>
              <i className="fa fa-phone" />
              <p>123-123 321</p>
            </InfoItem>
            <InfoItem>
              <i className="fa fa-envelope" />
              <p>praca.patrykmilczarek@gmail.com</p>
            </InfoItem>
            <InfoItem>
              <i className="fa fa-location-arrow" />
              <p>Example st. 81, 32-001 Krakow</p>
            </InfoItem>
          </ContactInfo>
          <i className="close-icon fa fa-close" onClick={() => navigate(-1)}></i>
        </RightSideWrapper>
      </ContactWrapper>
    </FindAPartnerModal>
  );
};

export default Contact;
