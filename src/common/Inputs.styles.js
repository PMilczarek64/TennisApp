import styled from "styled-components";

export const Input = styled.input`
    padding: 7px;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.colors.faded};
    font-size: 18px;
    height: 18px;
    width: 100%;

:-webkit-autofill, :focus {
    box-shadow: 0 0 0px 1000px white inset !important;
    outline: none;
}
`;

export const Select = styled.select`
    padding: 7px;
    width: 198px;
    border-radius: 5px;
    font-size: 18px;
`;

export const Label = styled.label`
  font-size: 18px;
  padding: 7px;
`;