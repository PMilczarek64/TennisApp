import React from "react";
import FindAPartnerModal from "../../common/ContentModal";
import { Input, TextArea } from "../../common/Inputs.styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { isValidEmail } from "../../utils";
import {
  ContactWrapper,
  LeftSideWrapper,
  SidePhoto,
  RightSideWrapper,
  ContactForm,
  IconInput,
  ContactInfo,
  InfoItem,
} from "./Contact.styled";

const Contact = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    criteriaMode: "all",
  });

  const handleEmailValidation = (email) => {
    const isValid = isValidEmail(email);
    const validityChanged =
      (errors.email && isValid) || (!errors.email && !isValid);
    if (validityChanged) {
      console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
    }
    return isValid;
  };

  const handleConfirm = () => {
    console.log("handle Confirm");
  };

  return (
    <FindAPartnerModal>
      <ContactWrapper>
        <LeftSideWrapper>
          <SidePhoto>
            <img alt="contact" src="https://images.pexels.com/photos/2833103/pexels-photo-2833103.jpeg?auto=compress&cs=tinysrgb&w=600" />
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
                    message: "Minimum 7 characters",
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
                  <span key={type} className="alert">
                    {message}
                  </span>
                ))
              }
            />
            <IconInput>
              <i className="fa fa-envelope-o"></i>
              <Input
                placeholder="Email"
                {...register("email", {
                  required: true,
                  validate: handleEmailValidation,
                })}
              />
            </IconInput>
            <ErrorMessage
              errors={errors}
              name="email"
              message={<span className="alert">Email is incorrect!</span>}
            />
            <TextArea
              placeholder="Write a message..."
              {...register("mailContent", {
                required: "This field is required",
                maxLength: {
                  value: 300,
                  message: "Maximum 300 characters",
                },
                minLength: {
                  value: 30,
                  message: "Minimum 30 characters",
                },
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
          <i
            className="close-icon fa fa-close"
            onClick={() => navigate(-1)}
          ></i>
        </RightSideWrapper>
      </ContactWrapper>
    </FindAPartnerModal>
  );
};

export default Contact;
