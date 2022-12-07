import styled from "styled-components";

export const Input = styled.input`
    padding: 7px;
    width: 180px;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.colors.faded};
    font-size: 18px;
    height: 18px;
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