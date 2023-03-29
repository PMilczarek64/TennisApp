import styled from "styled-components";

export const ContactWrapper = styled.div`
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

export const LeftSideWrapper = styled.div`
  width: 45%;
  overflow: hidden;
  @media screen and (max-width: 620px){
    display: none;
  }
`;

export const RightSideWrapper = styled.div`
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

export const SidePhoto = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContactForm = styled.form`
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

export const IconInput = styled.div`
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

export const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const InfoItem = styled.div`
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