import styled from "styled-components"

export const FormWrapper = styled.div`
  max-height: 100%;
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 1;
  background-color: white;
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

export const Image = styled.div`
  height: 100%;
  width: 45%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
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

export const PhotoURLInput = styled.div`
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

export const LoadButton = styled.div`
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

export const Form = styled.form`
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

export const FormItem = styled.div`
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