import styled from "styled-components";

export const Form = styled.form`
  width: 20%;
  height: 100%;
  padding: 60px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  button {
    width: 100%;
    margin: 0;
    background: linear-gradient(90deg, #ddff00 0%, rgb(255, 231, 76) 100%);
    border: none;
    border-radius: 7px;
    padding: 10px 15px;
    margin-block: 10px;
    font-size: 18px;
    cursor: pointer;
    font-size: 18px;
  }
  h4 {
    margin-bottom: 10px;
  }
  label {
    font-size: 17px;
  }
  @media screen and (max-width: 770px) {
    min-width: 350px;
    max-width: 500px;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 20px 0;
    button, select{
      height: 53px;
    }
    h4 {
      display: none;
    }
  }
`;

export const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 5px;
  width: 100%;
  @media screen and (max-width: 546px) {
    margin: 5px 0;
    align-items: center;
    select {
      width: 100%;
      height: 60px;
      font-size: 23px;
    }
    label {
      font-size: 23px;
      margin-bottom: 2px;
    }
  }
`;
