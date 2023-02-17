import styled from "styled-components";

export const Input = styled.input`
    box-sizing: border-box;
    padding: 7px;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.colors.faded};
    font-size: 18px;
    height: 32px;
    width: 100%;

    :-webkit-autofill, :focus {
        box-shadow: 0 0 0px 1000px white inset !important;
        outline: none;
    }
`;

export const Select = styled.select`
    padding: 3px;
    width: 100%;
    border-radius: 5px;
    font-size: 18px;
    height: 33px;
    box-sizing: border-box;
    :-webkit-autofill, :focus {
        box-shadow: 0 0 0px 1000px white inset !important;
        outline: none;
    }
`;

export const Label = styled.label`
  font-size: 18px;
  padding: 7px;
`;

export const TextArea = styled.textarea`
  height: 150px;
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.faded};
  border-radius: 7px;
  margin-bottom: 5px;
  :-webkit-autofill, :focus {
    box-shadow: 0 0 0px 1000px white inset !important;
    outline: none;
  }
`;